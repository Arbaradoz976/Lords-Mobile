export type GuideCategory = 'tuto' | 'evenements';
export type GuideLevel = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Guide {
    slug: string;
    title: string;
    category: GuideCategory;
    level: GuideLevel;
    summary: string;
    readTime: string;
    imageUrl: string;
}

export const GUIDES: Guide[] = [
    // Tutos
    {
        slug: 'chasse-aux-monstres',
        title: 'Chasse aux monstres',
        category: 'tuto',
        level: 'Débutant',
        summary: 'Apprenez les bases de la chasse aux monstres pour maximiser vos récompenses.',
        readTime: '5 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'talents',
        title: 'Talents (Paix vs Combat)',
        category: 'tuto',
        level: 'Débutant',
        summary: 'Comment configurer vos talents pour la croissance ou la guerre.',
        readTime: '4 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'sombres-nids',
        title: 'Sombres nids',
        category: 'tuto',
        level: 'Intermédiaire',
        summary: 'Guide complet pour mener des ralliements contre les sombres nids.',
        readTime: '6 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'stages-de-heros',
        title: 'Stages de héros',
        category: 'tuto',
        level: 'Débutant',
        summary: 'Astuces pour terminer les stages de héros (Normal et Élite).',
        readTime: '5 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'heros',
        title: 'Héros F2P indispensables',
        category: 'tuto',
        level: 'Débutant',
        summary: 'Quels héros monter en priorité quand on est Free-to-Play.',
        readTime: '7 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'joyaux',
        title: 'Optimisation des Joyaux',
        category: 'tuto',
        level: 'Intermédiaire',
        summary: 'Quels joyaux incruster sur vos équipements de guerre.',
        readTime: '4 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'stuff',
        title: 'Équipement (Stuff)',
        category: 'tuto',
        level: 'Avancé',
        summary: 'Les meilleurs sets d\'équipement pour chaque type de troupe.',
        readTime: '8 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'exp-joueur',
        title: 'XP Joueur rapide',
        category: 'tuto',
        level: 'Débutant',
        summary: 'Comment monter rapidement au niveau 60.',
        readTime: '3 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'familiers',
        title: 'Familiers',
        category: 'tuto',
        level: 'Intermédiaire',
        summary: 'Les familiers à monter en priorité pour le développement et la guerre.',
        readTime: '6 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'base-rally',
        title: 'Base d\'un rally',
        category: 'tuto',
        level: 'Avancé',
        summary: 'Comprendre la composition et le lead d\'un ralliement.',
        readTime: '10 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    // Événements
    {
        slug: 'guild-fest',
        title: 'Guild Fest (Fête des Guildes)',
        category: 'evenements',
        level: 'Intermédiaire',
        summary: 'Comment maximiser vos points lors du Guild Fest.',
        readTime: '5 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'arene-dragon',
        title: 'Arène du Dragon',
        category: 'evenements',
        level: 'Avancé',
        summary: 'Stratégies pour gagner l\'Arène du Dragon.',
        readTime: '8 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'kvk',
        title: 'KvK (Royaume vs Royaume)',
        category: 'evenements',
        level: 'Avancé',
        summary: 'Préparer et survivre au KvK.',
        readTime: '7 min',
        imageUrl: '/images/placeholder-hero.png',
    },
    {
        slug: 'epreuve-guilde',
        title: 'Épreuve de Guilde',
        category: 'evenements',
        level: 'Débutant',
        summary: 'Formations pour vaincre les boss de l\'épreuve de guilde.',
        readTime: '3 min',
        imageUrl: '/images/placeholder-hero.png',
    },
];
