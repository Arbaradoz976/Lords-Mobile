# Security Review

## Summary
- L'application est un site Next.js statique sans interactions utilisateur sensibles (pas de formulaires, pas d'authentification), ce qui réduit les surfaces d'attaque côté serveur.
- Le code affiche uniquement des données locales (listes de guides et d'outils), sans appels réseau ni logique côté serveur.
- Aucun en-tête de sécurité (CSP, Referrer-Policy, Permissions-Policy, etc.) n'est défini dans `next.config.ts`, ce qui laisse les protections par défaut du navigateur.

## Points vérifiés
- **Entrées utilisateurs** : aucune saisie utilisateur ni stockage de données ; faible risque d'injection côté client.
- **Navigation interne** : les liens sont statiques via `next/link` et ne consomment pas de paramètres non filtrés.
- **Dépendances** : dépend de `next@16`, `react@19`, `framer-motion` et Tailwind. Pas de bibliothèques côté serveur sensibles.

## Recommandations
1. **En-têtes de sécurité** : ajouter une configuration `headers()` dans `next.config.ts` (CSP stricte en lecture seule, `Referrer-Policy: same-origin`, `Permissions-Policy` minimale, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security` côté reverse proxy).
2. **CSP adaptée** : autoriser uniquement les scripts/styles `self` et les polices Google utilisées par `next/font`, en ajoutant `upgrade-insecure-requests` pour forcer HTTPS.
3. **Mises à jour régulières** : surveiller les avis de sécurité `next`, `react` et `framer-motion` et appliquer les mises à jour mineures/patches rapidement.
4. **Linting/CI** : activer `npm run lint` en CI pour détecter les imports ou patterns non sécurisés (ex. utilisation imprudente de `dangerouslySetInnerHTML`).
5. **Déploiement** : s'assurer que le reverse proxy force HTTPS et désactive l'indexation des dossiers statiques.
