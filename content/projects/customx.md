---
slug: customx
title: CustomX
tagline: SaaS de gestion pour imprimeurs et ateliers de personnalisation textile
summary: >-
  Application de gestion de bout en bout pour ateliers de sérigraphie, DTF et broderie : devis, commandes,
  bons à tirer (BAT), achats et stocks, production, calendrier, expéditions, espace client final, abonnements Stripe
  et assistant IA.
type: SaaS B2B
status: En production
period: "Février 2025 → aujourd'hui"
role: Développeur full-stack principal
team: 3-4 développeurs
featured: true
tags: [SaaS, Next.js, Rails, Stripe, Print, Workflow, IA]
stack:
  frontend: [Next.js, React, MUI + MUI X (DataGrid, dates), Zustand, dnd-kit, react-rnd, react-pdf, Recharts, Sass, Testing Library]
  backend: [Ruby 3.2, Rails 7, PostgreSQL, JWT, ActiveModelSerializers, Jbuilder, Kaminari, ActionCable]
  infra: [Docker, Cloudflare (OpenNext), AWS S3]
  services: [Stripe (abonnements, Connect), OpenAI (assistant), MCP, Imbretex (commande fournisseur), email transactionnel]
metrics:
  commits_perso: 1194
  commits_total: 1364
  premiere_contribution: 2025-02-27
  derniere_contribution: 2026-11-13
modules:
  - name: Tableau de bord
    description: "Trois vues (commercial, production, expéditions) avec indicateurs et cartes."
    features: [KPIs par rôle, cartes d'avancement]
  - name: Commercial
    description: "Clients, devis, commandes, paiements en attente."
    features:
      - Éditeur de devis (tailles et quantités, marquage, frais rush/expédition), PDF, envoi et relance
      - Tarifs paramétrables (grilles, colonnes, échelles de prix)
      - Validation et paiement par le client (Stripe)
  - name: Pré-production
    description: "Bon à tirer, achats fournisseurs, stocks."
    features:
      - "BAT visuel : positionnement des visuels par vue, redimensionnement/drag, validation client, PDF"
      - Achats groupés par fournisseur, réception en stock
  - name: Production
    description: "Ordres de production, calendrier, expéditions."
    features: [Calendrier mensuel/hebdomadaire, délais de production et d'expédition, retrait en magasin]
  - name: Paramètres
    description: "Entreprise, équipe et rôles, catalogue produit (couleurs, tailles, vues), tarifs, livraison, paiement."
    features: [Zone d'impression par produit, étiquettes d'étape, rôles directeur / commercial / production]
  - name: Espace client final
    description: "Suivi de projet, devis à valider, BAT à approuver, profil."
    features: [Accès par lien, messages par salle (rooms)]
  - name: Abonnement, freemium & assistant IA
    description: "Offre mensuelle/annuelle, essai gratuit avec données d'exemple, assistant intégré."
    features: [Webhooks Stripe, complétion de profil, assistant en langage naturel]
contributions:
  - "Architecture front quasi complète (≈ 810 commits) : DataGrid, filtres, stores, responsive"
  - "Back-end Rails (≈ 384 commits) : devis, BAT, production, stocks, achats, calendrier"
  - Éditeur de BAT interactif (positionnement des visuels) et génération PDF
  - Intégration Stripe (abonnement, redirections, mise à jour automatique des statuts)
  - Freemium avec données d'exemple, emails automatiques activables, profil à compléter
  - Pages marketing et SEO (fonctionnalités, tarifs), déploiement Cloudflare
challenges:
  - Modéliser un flux métier multi-étapes (devis → BAT → achats → production → expédition)
  - Calculs de prix dynamiques selon quantités, tailles et techniques de marquage
  - Multi-tenant (entreprises) et rôles
links:
  site: https://customx.fr/
  repo: privé
screenshots:
  - { src: "projects/customx/01-dashboard.jpg", alt: "Tableau de bord", caption: "Tableau de bord : chiffre d'affaires, devis et commandes", kind: capture }
  - { src: "projects/customx/02-clients.jpg", alt: "Clients", caption: "Gestion des clients", kind: capture }
  - { src: "projects/customx/03-devis.jpg", alt: "Devis", caption: "Liste des devis", kind: capture }
  - { src: "projects/customx/04-production.jpg", alt: "Production", caption: "Ordres de production", kind: capture }
  - { src: "projects/customx/05-calendrier.jpg", alt: "Calendrier", caption: "Calendrier de production mensuel", kind: capture }
  - { src: "projects/customx/06-catalogue.jpg", alt: "Catalogue", caption: "Catalogue produits", kind: capture }
  - { src: "projects/customx/07-equipe.jpg", alt: "Équipe", caption: "Équipe et rôles", kind: capture }
---

## Présentation
CustomX remplace tableurs et outils dispersés dans les ateliers de personnalisation textile : un même flux relie le devis, la validation client par BAT, les achats, la production et l'expédition.

## Mon rôle
Développeur principal : plus de 1 190 commits sur les 1 360, du front à l'API.

> À compléter : URL, nombre d'ateliers utilisateurs, témoignage.
