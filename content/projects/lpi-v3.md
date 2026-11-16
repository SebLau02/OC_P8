---
slug: lpi-v3
title: La Petite Imprimerie
tagline: Catalogue e-commerce textile personnalisé, blog SEO et back-office, migrés depuis WordPress
summary: >-
  Refonte complète du site d'un atelier de personnalisation textile : catalogue produits avec filtres avancés,
  panier et devis, commandes fournisseurs (Stanley/Stella, Imbretex), blog et pages SEO, migration de 389 URLs
  WordPress avec redirections 301.
type: E-commerce + CMS + back-office
status: En production
period: "Août 2025 → novembre 2026"
role: Développeur full-stack principal
team: 2-3 développeurs
featured: true
tags: [E-commerce, SEO, Migration WordPress, Next.js, Rails, Cloudflare, Fournisseurs]
stack:
  frontend: [Next.js, React, TypeScript, MUI + MUI X, NextAuth, React Query, Zustand, Swiper, Marked, xss, cookie-consent]
  backend: [Ruby 3.2, Rails (API v1), PostgreSQL, Redis, Sidekiq + sidekiq-cron, JWT, Rack::Attack, Kaminari, RSpec]
  infra: [Cloudflare (OpenNext, règles de redirection en masse), AWS S3, WebP]
  services: [API Stanley/Stella, Imbretex, Mailjet, FTP fournisseur, Google Analytics]
metrics:
  commits_perso: 1031
  commits_total: 1112
  premiere_contribution: 2025-08-07
  derniere_contribution: 2026-11-06
modules:
  - name: Catalogue produits
    description: "Catégories et super-catégories, marques, couleurs, styles, matériaux, techniques de marquage."
    features:
      - Filtres dynamiques (masqués si sans résultat), tri, recherche
      - "Fiche produit : couleurs (images dédiées), tailles, guide des tailles, produits suggérés"
  - name: Panier & devis
    description: "Ajout de produits personnalisés avec upload de fichiers, panier, devis express gratuit."
    features: [Stepper d'ajout, adresses facturation/livraison, paniers abandonnés suivis]
  - name: Commandes fournisseurs
    description: "Vérification de stock et passage de commande auprès des fournisseurs."
    features: [Import de bons de commande PDF validés, références, historique]
  - name: Blog & pages SEO
    description: "Articles par blocs, pages statiques de marquage, sitemaps, slugs, JSON-LD."
    features: [Éditeur d'articles, import XML WordPress, navigation précédent/suivant]
  - name: Back-office
    description: "Produits, commandes, échecs de commande, articles, pages SEO, paniers en attente."
    features: [Droits administrateur, import de produits par fichiers]
  - name: Migration WordPress
    description: "Bascule d'un site historique sans perte de référencement."
    features: [389 URLs, redirections 301 (règles génériques + manuelles), images en WebP sur S3, checklist jour J]
contributions:
  - Front complet (≈ 755 commits) et API (≈ 276)
  - Moteur de filtres et de recherche du catalogue
  - Intégrations Stanley/Stella et Imbretex
  - "Migration WordPress → app : contenu, images, redirections, SEO"
  - "Optimisations : cache, requêtes, conversion WebP, sécurisation HTML"
challenges:
  - Préserver le référencement pendant la migration
  - Catalogue volumineux avec filtres combinés
links:
  site: https://lapetiteimprimerie.fr/
  repo: privé
screenshots:
  - { src: "projects/lpi-v3/01-catalogue-tee-shirts.jpg", alt: "Catalogue tee-shirts", caption: "Catalogue : filtres par catégorie, produits personnalisables", kind: capture }
  - { src: "projects/lpi-v3/02-catalogue-sweatshirts.jpg", alt: "Catalogue sweatshirts", caption: "Catalogue d'une autre catégorie", kind: capture }
  - { src: "projects/lpi-v3/03-fiche-produit.jpg", alt: "Fiche produit", caption: "Fiche produit : couleurs, techniques de marquage, emplacements, quantités", kind: capture }
---

## Présentation
La Petite Imprimerie, atelier de personnalisation depuis 2020, dispose de deux sites : l'historique sous WordPress et un catalogue e-commerce neuf. LPI v3 unifie les deux et ajoute un back-office.

## Mon rôle
1 031 des 1 112 commits : conception du front, de l'API, des intégrations et de la migration.

