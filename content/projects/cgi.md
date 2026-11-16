---
slug: cgi
title: Club des Gendarmes Investisseur
tagline: Plateforme d'adhésion, de réservation de biens et de parrainage pour investisseurs
summary: >-
  Site et espace membre du Club des Gendarmes Investisseur : biens disponibles, réalisations, adhésion payante,
  réservation avec offre d'achat signée en ligne, parrainage et administration complète.
type: Site vitrine + espace membre + back-office
status: Livré (v1)
period: "Octobre → Novembre 2026"
role: Développeur full-stack (conception et réalisation de bout en bout)
team: Quasi seul développeur
featured: false
tags: [Immobilier, Next.js, Rails API, Stripe, Signature électronique, Parrainage]
stack:
  frontend: [Next.js (App Router), React, TypeScript, MUI, NextAuth, React Query, PWA manifest]
  backend: [Ruby 3.2, Rails (API), PostgreSQL, JWT, Alba (sérialisation), Prawn (PDF), Swagger]
  infra: [Docker, AWS S3 (Active Storage)]
  services: [Stripe, DocuSeal, Mailjet, Google Agenda (prise de rendez-vous), géocodage]
metrics:
  commits_perso: 97
  commits_total: 99
  premiere_contribution: 2026-10-15
  derniere_contribution: 2026-11-06
modules:
  - name: Site public
    description: "Accueil, biens disponibles, fiche bien, réalisations, capacité d'emprunt, méthode et honoraires, parrainage."
    features:
      - Carte « Où investir » avec gestion des villes et légende
      - Réalisations filtrables (région, statut) avec pagination
      - "SEO : métadonnées et données structurées"
  - name: Authentification & adhésion
    description: "Inscription avec code parrain, connexion, paiement de l'adhésion par Stripe."
    features: [JWT 24 h, vérification d'état d'adhésion, pages succès/annulation]
  - name: Espace membre
    description: "Tableau de bord, réservations, parrainage, compte et avatar."
    features:
      - Progression de réservation, lien de parrainage
      - Suivi des filleuls et des récompenses (250 € par camarade qui investit)
  - name: Réservation & offre d'achat
    description: "Assignation d'un bien à un membre, génération du PDF d'offre et signature électronique."
    features: [Choix du modèle d'offre à l'assignation, statuts Vendu, déblocage d'accès]
  - name: Administration
    description: "Gestion des biens (lots, photos, documents, plaquette), membres, parrainages, modèles d'emails."
    features:
      - Glisser-déposer de fichiers, optimisation automatique des images
      - Éditeur et aperçu des emails administratifs
contributions:
  - Conception de l'architecture front et API en trois semaines
  - Paiement Stripe et webhooks, signature DocuSeal
  - Système de parrainage et suivi des récompenses
  - Documentation Swagger, tests d'intégration
challenges:
  - Livrer un produit complet très rapidement avec règles métier de réservation et paiement
links:
  site: "À compléter"
  repo: privé
screenshots:
  - { src: "projects/cgi/01-biens-disponibles.jpg", alt: "Biens disponibles", caption: "Catalogue public des projets : filtres, statuts, prix réservés aux membres", kind: capture }
  - { src: "projects/cgi/02-admin-biens.jpg", alt: "Admin des biens", caption: "Administration : liste des biens, statuts et demandes en attente", kind: capture }
  - { src: "projects/cgi/03-admin-membres.jpg", alt: "Admin des membres", caption: "Administration : membres, accès, parrains, export CSV", kind: capture }
  - { src: "projects/cgi/04-admin-parrainage.jpg", alt: "Admin du parrainage", caption: "Administration : suivi des parrainages et primes", kind: capture }
  - { src: "projects/cgi/05-admin-fiche-bien.jpg", alt: "Fiche bien admin", caption: "Administration : fiche d'un bien et parcours de réservation", kind: capture }
  - { src: "projects/cgi/06-admin-emails.jpg", alt: "Modèles d'emails", caption: "Administration : modèles d'emails éditables", kind: capture }
---

## Présentation
Le Club des Gendarmes Investisseur accompagne ses membres dans l'achat de biens immobiliers. La plateforme gère l'adhésion, la présentation des biens, la réservation, la signature et le parrainage.

## Mon rôle
J'ai construit l'application de zéro (97 des 99 commits) : front Next.js, API Rails documentée en Swagger, paiements et signature.

> À compléter : URL, résultats.
