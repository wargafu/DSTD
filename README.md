# TDGS - Tchad Design System

## Phase 1 — Architecture du projet monorepo

Ce dépôt est organisé comme un monorepo moderne, simple et évolutif pour soutenir un design system national.

### Principes

- monorepo `pnpm + turbo`
- séparation claire entre `packages`, `apps`, `templates`
- architecture modulaire et maintenable
- priorité à l’adoption institutionnelle et à l’accessibilité

### Structure proposée

- `packages/` : packages réutilisables et agnostiques
  - `core` : composants HTML/CSS first et utilities
  - `tokens` : design tokens partagés
  - `docs` : contenu structuré pour la documentation et les guides

- `apps/` : applications et sites utilisant le design system
  - `site` : site de documentation publique
  - `storybook` : visualisation des composants et tests visuels

- `templates/` : exemples de pages et cas d’usage institutionnels
  - `citizen-portal`
  - `results-portal`
  - `admin-dashboard`
  - `government-landing`

### Configuration

- `package.json` : gestion des scripts et dépendances de développement
- `pnpm-workspace.yaml` : workspace declaration
- `turbo.json` : orchestration des pipelines
- `tsconfig.base.json` : configuration TypeScript partagée
