---
slug: trustify
title: TRUSTIFY
tagline: Plateforme d'investissement immobilier avec espaces investisseur, partenaire et administration
summary: >-
  Plateforme de commercialisation de programmes immobiliers (lots) : catalogue, alertes, réservation et
  offre d'achat avec signature électronique, espaces investisseur et prescripteur, marque blanche,
  exclusivités et panel d'administration.
type: Plateforme web (catalogue + portails + back-office)
status: En production, évolution continue
period: "Juillet 2026 → aujourd'hui"
role: Développeur full-stack
team: 3-4 développeurs
featured: true
tags: [Immobilier, Marque blanche, Signature électronique, Next.js, Rails, Cloudflare]
stack:
  frontend: [Next.js, React, TypeScript, MUI, NextAuth, React Query, Zustand, dnd-kit, Recharts, Sass]
  backend: [Ruby 3.2, Rails (API), PostgreSQL, JWT, GoodJob, Active Storage, Prawn (PDF), MiniMagick]
  infra: [Cloudflare (OpenNext), AWS S3]
  services: [DocuSeal (signature), SMS (smsmode), Leboncoin (annonces), Google Agenda, captcha]
metrics:
  commits_perso: 161
  commits_total: 244
  premiere_contribution: 2026-07-30
  derniere_contribution: 2026-11-12
modules:
  - name: Catalogue & fiches programmes
    description: "Projets immobiliers, lots, galerie, phases, rendement et fiscalité."
    features:
      - Filtres (typologie, stratégie fiscale, rendement, disponibilité) et tri par meilleur rendement
      - "Fiche programme : galerie, onglets, localisation, plans, vidéo, plaquette PDF générée"
      - Prise en charge des immeubles et de la copropriété
  - name: « Rechercher le bien idéal »
    description: "Questionnaire en 7 questions et profil investisseur (budget, apport, revenus, objectif, horizon, villes)."
    features:
      - Résultats triés par rendement, profil rattaché à la fiche contact
  - name: Alertes email & SMS
    description: "Alertes sur les nouveaux biens avec consentement et retrait en un clic."
    features:
      - Un seul email quotidien regroupé (9 h, Paris), SMS en complément avec STOP et horaires légaux
  - name: Réservation & offre d'achat
    description: "Parcours Réservation → Offre demandée → envoyée → signée avec contrat."
    features:
      - Signature électronique DocuSeal, notifications admin, refus d'offre
      - Libération / réservation de lot, téléchargement des documents signés
  - name: Espace investisseur
    description: "Tableau de bord (demandes, alertes, contacts, profil), inscription par code ou lien."
    features:
      - Connexion, mot de passe oublié, confirmation d'email, création d'espace après signature
  - name: Espace partenaire / prescripteur & marque blanche
    description: "Entreprises, collaborateurs, liens personnels, suivi des contacts et validation des rattachements."
    features:
      - Inscription en étapes, code entreprise / SIREN, onglet « Mon entreprise »
      - Pages et réservations en marque blanche attribuées au prescripteur
  - name: Exclusivités
    description: "Accès anticipé à un projet via lien personnel pour certains bénéficiaires."
    features:
      - Cartes verrouillées avec badge, emails début/fin, onglet « Mes exclusivités »
  - name: Administration
    description: "Dashboard, leads, projets, prescripteurs, CGP, marketing."
    features:
      - "Suivi d'un contact : modale à deux colonnes, stepper, montant modifiable, historique"
      - Regroupement des contacts par personne
contributions:
  - Conception et développement des espaces investisseur et prescripteur de bout en bout (API + interface)
  - Suivi des contacts et offres, intégration DocuSeal
  - Système d'alertes et d'envois (email + SMS), consentements
  - Exclusivités et marque blanche
  - Génération de la plaquette PDF et optimisation des images (cache, mémoire)
  - Déploiement Next.js sur Cloudflare (OpenNext) et gestion du cache
challenges:
  - Modèle de droits multi-rôles (admin, entreprise, prescripteur, investisseur)
  - Génération PDF performante avec beaucoup d'images
  - Cache Cloudflare vs contenus d'exclusivité
links:
  site: "À compléter"
  repo: privé
screenshots:
  - { src: "projects/trustify/02-catalogue-programmes.jpg", alt: "Catalogue des programmes", caption: "Catalogue : filtres (ville, budget, typologie, rendement, stratégie fiscale)", kind: capture }
  - { src: "projects/trustify/01-fiche-programme.jpg", alt: "Fiche programme", caption: "Fiche d'un programme", kind: capture }
  - { src: "projects/trustify/03-presentation-programme.jpg", alt: "Présentation du programme", caption: "Présentation, onglets lots / plans / quartier", kind: capture }
  - { src: "projects/trustify/04-admin-vue-ensemble.jpg", alt: "Admin vue d'ensemble", caption: "Administration : tableau de bord", kind: capture }
  - { src: "projects/trustify/05-admin-projets.jpg", alt: "Admin programmes", caption: "Administration : programmes et lots", kind: capture }
  - { src: "projects/trustify/06-admin-leads.jpg", alt: "Admin contacts", caption: "Administration : contacts et demandes", kind: capture }
  - { src: "projects/trustify/07-admin-suivi-contact.jpg", alt: "Suivi d'un contact", caption: "Suivi d'une demande d'offre : étapes et traitement de l'offre", kind: capture }
  - { src: "projects/trustify/08-admin-prescripteurs.jpg", alt: "Admin prescripteurs", caption: "Administration : prescripteurs", kind: capture }
  - { src: "projects/trustify/09-admin-espace-partenaire.jpg", alt: "Espace partenaire", caption: "Espace partenaire : lien en marque blanche et code de rattachement", kind: capture }
---

## Présentation
TRUSTIFY met en relation des investisseurs et des programmes immobiliers : ils découvrent les lots, reçoivent des alertes, réservent ou font une offre d'achat signée en ligne, avec le concours de prescripteurs (partenaires) et d'une équipe d'administration.

## Mon rôle
Arrivé en juillet 2026, j'ai porté 161 des 244 commits : la majorité des portails investisseur/partenaire, du suivi des offres, des alertes et des exclusivités, côté API et interface.

> À compléter : URL, résultats, témoignage.
