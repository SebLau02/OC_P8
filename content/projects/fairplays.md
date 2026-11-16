---
slug: fairplays
title: FairPlays
tagline: Application mobile de marketplace et communauté pour sportifs
summary: >-
  Application iOS / Android où les sportifs vendent et achètent des équipements d'occasion, échangent par messagerie,
  suivent des athlètes certifiés et publient des stories, avec paiement et virement sécurisés.
type: Application mobile + API
status: Publiée sur les stores (v1.0.4)
period: "Novembre 2024 → juillet 2026"
role: Développeur mobile Flutter + contributions API Rails
team: 3 développeurs
featured: false
tags: [Mobile, Flutter, Marketplace, Communauté, Stripe, Notifications push]
stack:
  mobile: [Flutter / Dart, Stacked (MVVM), Dio, Hive, Firebase Messaging, Google Maps, Stripe SDK]
  backend: [Ruby 3.2, Rails 7, PostgreSQL, Redis, Sidekiq, JWT, FCM]
  infra: [AWS S3, App Store, Google Play]
  services: [Stripe (comptes connectés, KYC, virements), Sendcloud (expédition), Mailjet, Firebase]
metrics:
  commits_perso: 157
  commits_total: 974
  premiere_contribution: 2024-11-14
  derniere_contribution: 2026-07-31
modules:
  - name: Marketplace
    description: "Articles par sport, recherche normalisée, favoris, aperçu zoomable."
    features: [Cartes par style de sport, pagination et skeleton de chargement]
  - name: Vente & paiement
    description: "Dépôt d'articles, commandes, avis, litiges, virements."
    features: [Compte Stripe vendeur, dépôt des documents KYC, historique des ventes]
  - name: Messagerie
    description: "Discussions par article, images, aperçu d'article."
    features: [Notifications ciblées à l'ouverture]
  - name: Communauté
    description: "Stories, publications, commentaires, abonnements, athlètes certifiés."
    features: [Abonnés / abonnements avec défilement infini]
  - name: Notifications push
    description: "Firebase Cloud Messaging pour messages, ventes et nouveaux posts."
    features: [Navigation vers l'écran concerné, suivi des notifications non vues]
contributions:
  - "Écrans et logique Flutter (≈ 125 commits) : compte, vente, messagerie, communauté"
  - Notifications push de bout en bout (API + app)
  - Endpoints d'abonnement, redimensionnement d'images, statut athlète
  - Configuration de build et publication iOS / Android
challenges:
  - Gestion des jetons et expiration, traduction des erreurs réseau
  - Navigation par onglets avec notifications profondes
links:
  site: https://fairplays.fr/
  repo: privé
cover: projects/fairplays/01-apercu.jpg
screenshots:
  - { src: "projects/fairplays/02-profil.jpg", alt: "Profil d'un sportif", caption: "Profil : abonnés, évaluations et vestiaire d'articles", kind: capture }
  - { src: "projects/fairplays/03-fil-communaute.jpg", alt: "Fil de la communauté", caption: "Communauté : stories et publications", kind: capture }
  - { src: "projects/fairplays/04-fiche-article.jpg", alt: "Fiche article", caption: "Fiche article : prix, état, messagerie et achat", kind: capture }
---

## Présentation
FairPlays (anciennement Ovestiaire) permet de revendre son équipement entre sportifs et de suivre une communauté.

## Mon rôle
Rejoint en 2024 sur un projet démarré en 2021 : 157 de mes commits sur 974 au total, surtout sur l'application mobile.

