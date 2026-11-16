---
slug: rentco
title: RENTCO
tagline: ERP de rénovation et plateforme d'accompagnement d'investisseurs (MatchInvest)
summary: >-
  ERP complet d'une entreprise de rénovation (dossiers, chiffrage, devis, commandes fournisseurs,
  facturation, planning de chantier) couplé à un réseau d'accompagnement d'investisseurs immobiliers
  (MatchInvest). Monolithe Rails historique (depuis 2020) sur lequel j'interviens depuis août 2024.
type: ERP / SaaS métier + site vitrine
status: En production, évolution continue
period: "Août 2024 → aujourd'hui"
role: Développeur full-stack (Rails)
team: Équipe de 4-5 développeurs, projet historique
context: Mission longue, reprise et évolution d'un monolithe existant
featured: true
tags: [ERP, Rénovation, Immobilier, Rails, Intégrations, IA, Facturation]
stack:
  backend: [Ruby 3.2, Rails 7.0, PostgreSQL, Redis, Sidekiq, Devise, JWT]
  frontend: [ERB, Hotwire/JS, jQuery, Highcharts / Chartkick, SCSS]
  data: [Geocoder, Nokogiri, wkhtmltopdf / combine_pdf (PDF), rqrcode]
  services: [Mailjet, Stripe, Twilio Voice, Leboncoin (API pro), Monday.com, Super PDP (facturation électronique), OpenAI, MCP, AWS S3]
metrics:
  commits_perso: 1497
  commits_total: 5635
  premiere_contribution: 2024-08-27
  derniere_contribution: 2026-10-30
modules:
  - name: Dossiers (cases) & étude de rentabilité
    description: "Cœur de l'ERP : un dossier regroupe le projet d'un client, ses informations principales, sa projection financière et son suivi."
    features:
      - Projection financière (rentabilité, gain à 10 ans, ratio d'exploitation)
      - Estimation des coûts de rénovation par pièce, hypothèses personnalisées
      - Récapitulatif PDF du dossier, cahier des charges (démolition, etc.)
      - Statuts automatiques (ex. passage à jour à la signature du devis)
  - name: Chiffrage, pré-chiffrage & devis
    description: "Génération et validation des devis de travaux, avec pré-chiffrages partageables."
    features:
      - Devis principal, rédaction et TVA
      - Pré-chiffrage préparé (aussi par l'IA) et partage par lien
      - Copie de lien client / artisan avec confirmation
  - name: Commandes fournisseurs
    description: "Passage de commande lié aux dossiers (produits, options, menuiserie, cuisine, VMC…)."
    features:
      - Bons de commande PDF avec informations acheteur
      - États de commande, panier, validation
  - name: Facturation & coûts réels
    description: "Factures reçues, ventilation en coûts réels multiples par chantier, avances et royalties."
    features:
      - Rapprochement facture ↔ coûts réels (plafonné au TTC)
      - Calcul de royalties et facturation électronique via Super PDP
  - name: MatchInvest / simulateur d'investissement
    description: "Parcours investisseur, simulateur, fiches d'enchères/biens et profil investisseur."
    features:
      - Simulateur avec filtres, scoring de profil, tunnel en 7 questions
      - Cartes de villes, résumé du PLU analysé par IA (OpenAI)
  - name: Réseau, franchises & prescripteurs
    description: "Gestion des entreprises, franchises, contacts référents et de leur progression."
    features:
      - Inscription rapide, parcours référent en étapes, calcul de scores
      - Gestion franchise / entreprise, commissions, KPI
  - name: Intégrations externes
    description: "Leboncoin (annonces, leads, messages, quotas), Twilio (appels), Monday.com, webhooks."
    features:
      - Publication d'annonces et réception de leads Leboncoin
      - Appels vocaux Twilio
      - Planification Monday.com
  - name: Assistant IA & MCP
    description: "Assistant intégré avec actions validables (créer un contact, préparer un pré-chiffrage, déposer une facture)."
    features:
      - Journal des demandes et suivi des tokens (en cours)
contributions:
  - Refonte de l'espace client (profil, étapes du dossier) et du menu latéral/responsive
  - "Calculs métier : rentabilité, coûts de salle de bain/plomberie, avances, royalties"
  - Génération de PDF (récapitulatifs, bons de commande, plaquettes personnalisées, carte de visite)
  - Intégration Super PDP (facturation électronique), Monday.com, Leboncoin et Twilio
  - Analyse automatique des PLU avec OpenAI et fiches ville
  - Simulateur et filtres MatchInvest, inscription rapide, tunnel investisseur
  - Optimisation de requêtes (N+1, includes), tri/filtres des index
challenges:
  - Faire évoluer un monolithe de plus de 5 000 commits sans régression
  - Modèle de coûts réels multi-factures / multi-chantiers
  - Intégrer plusieurs API tierces avec webhooks et quotas
links:
  site: https://www.rentco.app/
  repo: privé
screenshots:
  - { src: "projects/rentco/01-tableau-de-bord.jpg", alt: "Tableau de bord", caption: "Tableau de bord : chiffrages, clients potentiels et checklist", kind: capture }
  - { src: "projects/rentco/02-prechiffrages.jpg", alt: "Pré-chiffrages", caption: "Liste des pré-chiffrages avec filtres de rentabilité", kind: capture }
  - { src: "projects/rentco/03-dossier.jpg", alt: "Dossier", caption: "Fiche d'un dossier : informations, travaux, étude de marché", kind: capture }
  - { src: "projects/rentco/04-simulateur.jpg", alt: "Simulateur", caption: "Simulateur d'investissement", kind: capture }
  - { src: "projects/rentco/05-produits.jpg", alt: "Produits", caption: "Catalogue de produits et références fournisseurs", kind: capture }
  - { src: "projects/rentco/06-contacts.jpg", alt: "Base contacts", caption: "Base de contacts par parcours", kind: capture }
  - { src: "projects/rentco/07-devis.jpg", alt: "Devis", caption: "Suivi des devis et chiffre d'affaires", kind: capture }
  - { src: "projects/rentco/08-villes.jpg", alt: "Villes", caption: "Base villes", kind: capture }
---

## Présentation
RENTCO est l'ERP d'une entreprise de rénovation : elle vend les travaux, les investisseurs achètent et sont accompagnés, et l'entreprise réalise le reste. Le même socle alimente MatchInvest, la vitrine et le parcours investisseur.

## Mon rôle
Intervenant full-stack Rails sur ce monolithe depuis août 2024 : 1 497 de mes commits sur plus de 5 600. J'y ai livré des modules métier complets, des intégrations et des automatisations.

## Ce que je retiens
Travailler dans un code historique, le rendre plus performant, et brancher des services tiers (Leboncoin, Twilio, Super PDP, OpenAI) de façon fiable.

> À compléter : URL publique, résultats chiffrés (gain de temps, nombre de dossiers), témoignage.
