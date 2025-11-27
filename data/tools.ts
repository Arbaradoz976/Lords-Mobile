export interface Tool {
    slug: string;
    title: string;
    description: string;
    icon: string; // placeholder text or path
}

export const TOOLS: Tool[] = [
    {
        slug: 'calculateur-accelerateurs',
        title: 'Calculateur d\'accélérateurs',
        description: 'Gérez votre stock d\'accélérateurs et calculez le temps total disponible.',
        icon: '⏱️',
    },
    {
        slug: 'calculateur-entrainement',
        title: 'Calculateur d\'entraînement',
        description: 'Estimez le coût et le temps pour entraîner vos troupes.',
        icon: '⚔️',
    },
    {
        slug: 'simulateur-equipement',
        title: 'Simulateur d\'équipement',
        description: 'Testez différentes combinaisons d\'équipement et de joyaux.',
        icon: '🛡️',
    },
    {
        slug: 'cout-migration',
        title: 'Coût de migration',
        description: 'Calculez le nombre de parchemins nécessaires pour migrer.',
        icon: '✈️',
    },
    {
        slug: 'rally-aide',
        title: 'Rally Aide',
        description: 'Outil pour organiser et rejoindre les ralliements.',
        icon: '📢',
    },
];
