# Déploiement sur Cloudflare Workers

Le site est un Next 16 (rendu statique, SSG) exécuté sur **Cloudflare Workers** via
**OpenNext** (`@opennextjs/cloudflare`). Pas de base de données ni de secret applicatif.

## Déployer

Le déploiement est **manuel** : un push ne lance que les vérifications (`ci.yml`).

```bash
pnpm typecheck && pnpm build   # en local avant de pousser
git push                       # sur main : lance CI (typecheck + build)
pnpm deploy:prod               # = gh workflow run deploy.yml + gh run watch
```

Sans GitHub CLI : repo › Actions › Deploy › Run workflow › `main`.
Dépannage hors GitHub : `pnpm wrangler login` puis `pnpm run deploy`
(attention : `pnpm deploy` sans `run` est une commande pnpm intégrée).

## À configurer une seule fois

**Secrets GitHub Actions** (Settings › Secrets and variables › Actions) :
- `CLOUDFLARE_API_TOKEN` : modèle « Edit Cloudflare Workers »
- `CLOUDFLARE_ACCOUNT_ID`

**Variables GitHub Actions** (même écran, onglet Variables) :
- `NEXT_PUBLIC_SITE_URL` : URL publique, sans slash final (`https://sebastienlau.fr`).
  Alimente le sitemap, les URLs canoniques, Open Graph et le JSON-LD.
- `NEXT_PUBLIC_STATUS` : `recherche` (par défaut) ou `en-poste`.

> Ces `NEXT_PUBLIC_*` sont lues **au build** : pour changer de statut ou de domaine,
> modifier la variable puis relancer le déploiement.

**Domaine personnalisé** : `sebastienlau.fr` est déclaré dans `routes` (`wrangler.jsonc`).
La zone doit être **Active** dans le compte Cloudflare avant le premier déploiement ;
le DNS et le certificat sont créés automatiquement.

## Contraintes Workers à respecter

- Un Worker n'est pas Node : pas de `fs` à l'exécution (les fiches `content/projects`
  sont lues **au build**), pas de binaire natif, 3 Mo max (gzip) sur l'offre gratuite.
- Pas de `proxy.ts` / middleware (runtime Node non supporté par OpenNext).
- Ne jamais activer `enableCacheInterception` (boucle de prefetch avec Next 16).
- Images : `images.unoptimized` (pas d'optimisation Cloudflare) → garder les visuels
  raisonnables (≈ 100–300 Ko).

## Tester comme en prod

```bash
pnpm preview   # build OpenNext + exécution dans le runtime Workers (local)
```

`next dev` / `next start` ne reproduisent pas le comportement d'OpenNext.
