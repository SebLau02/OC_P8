---
slug: lfsf
title: La Ferme de Sept Fontaines (Mennouroche)
tagline: Application métier de gestion de stockage, tri et facturation de céréales bio
summary: >-
  Application full-stack pour une exploitation agricole biologique : clients, bons d'entrée et de sortie,
  stockage en silos (racks, lignes, cellules, big bags), scan de codes-barres, planning des prestations
  et facturation avec tarifs.
type: Application métier (web + scan mobile)
status: En développement actif, modules progressivement ouverts
period: "Septembre → Novembre 2026"
role: Développeur full-stack
team: Quasi seul développeur
featured: false
tags: [Agriculture, Bio, Traçabilité, Next.js, Rails, Code-barres, Facturation]
stack:
  frontend: [Next.js 15, TypeScript, MUI 7 + MUI X DataGrid, Zustand, React Query, React Hook Form + Zod, NextAuth, Sass, dayjs]
  backend: [Ruby 3.2, Rails 7.2 API, PostgreSQL, JWT, Solid Queue, ActiveModelSerializers, Kaminari, RSpec]
  infra: [Cloudflare, Kamal / Heroku (Procfile), AWS S3]
  services: [Barby (codes-barres), Prawn (PDF)]
metrics:
  commits_perso: 170
  commits_total: 181
  premiere_contribution: 2026-09-10
  derniere_contribution: 2026-11-13
modules:
  - name: Clients & bons d'entrée
    description: "Réception de marchandise avec numéro de lot, humidité, impuretés, poids spécifique et mention Bio."
    features: [Création/édition, export PDF, statuts]
  - name: Stockage
    description: "Plan du site en racks, lignes et cellules, lots et big bags."
    features:
      - Génération dynamique des cellules, capacité des silos, changement de propriétaire et d'emplacement
      - Big bags avec codes-barres, sacs sans suivi
  - name: Bons de sortie & expéditions
    description: "Brouillons, finalisation, expédition depuis une cellule."
    features: [Sélection multi-big bags, date d'expédition]
  - name: Planning
    description: "Prestations (prétriage, triage optique, brassage, démêlage) et mouvements."
    features: [Vue globale, types de service]
  - name: Scan terrain (mode immersif)
    description: "Création, définition et expédition de big bags par scan."
    features: [Saisie type « scannette », sélection d'emplacement par grille]
  - name: Facturation & tarifs
    description: "Factures avec lignes éditables, recalcul des totaux, forfaits, TVA."
    features: [Tarifs par prestation, forfait séjours courts, pagination, email]
  - name: Gestion, droits & aide
    description: "Rôles utilisateur, accès par module, aide contextuelle, signalement de problèmes."
    features: [Cultures et variétés, pages masquées, modale d'aide illustrée]
contributions:
  - Modélisation complète du stockage et de la traçabilité
  - Scan de codes-barres et parcours terrain
  - Facturation et tarification
  - Contrôle d'accès par rôle et par module
  - Documentation d'aide intégrée à l'interface, signalement connecté à un outil de pilotage
challenges:
  - Modèle de données de traçabilité (lot ↔ big bag ↔ emplacement ↔ prestation)
  - Ergonomie du scan sur mobile en environnement agricole
links:
  site: "À compléter"
  repo: privé
screenshots:
  - { src: "projects/lfsf/01-racks.jpg", alt: "Vue racks", caption: "Plan du site : racks, niveaux et emplacements occupés", kind: capture }
  - { src: "projects/lfsf/02-lignes.jpg", alt: "Vue lignes", caption: "Lignes et cellules de stockage en vrac", kind: capture }
  - { src: "projects/lfsf/03-big-bags.jpg", alt: "Big bags", caption: "Suivi des big bags par code-barres et emplacement", kind: capture }
  - { src: "projects/lfsf/04-bons-entree.jpg", alt: "Bons d'entrée", caption: "Bons d'entrée et indicateurs de réception", kind: capture }
  - { src: "projects/lfsf/05-bons-sortie.jpg", alt: "Bons de sortie", caption: "Expéditions, certification et destinations", kind: capture }
  - { src: "projects/lfsf/06-planning.jpg", alt: "Planning", caption: "Planning hebdomadaire des prestations", kind: capture }
  - { src: "projects/lfsf/07-facturation.jpg", alt: "Facturation", caption: "Factures émises à chaque expédition", kind: capture }
  - { src: "projects/lfsf/08-gestion.jpg", alt: "Gestion", caption: "Barème des tarifs, variétés et utilisateurs", kind: capture }
  - { src: "projects/lfsf/09-clients.jpg", alt: "Clients", caption: "Répertoire des clients", kind: capture }
  - { src: "projects/lfsf/10-scan-mobile.jpg", alt: "Scan mobile", caption: "Parcours de scan immersif sur mobile", kind: capture }
---

## Présentation
La Ferme de Sept Fontaines (Rochefort-sur-la-Côte) trie, stocke, décortique et conditionne des céréales biologiques. L'application remplace un outil interne rudimentaire et couvre toute la chaîne, de la réception à la facturation.

## Mon rôle
170 des 181 commits : modèle de données, API, interface, scan terrain et facturation.

