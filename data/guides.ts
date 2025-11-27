// data/guides.ts
export type GuideCategory = 'tuto' | 'evenements';
export type GuideLevel = 'Débutant' | 'Intermédiaire' | 'Avancé';

export type Guide = {
    id: string;
    category: GuideCategory;
    slug: string;
    titre: string;
    resume: string;
    niveau: GuideLevel;
    illustration: string; // chemin vers une image dans /public/images/...
};

export const guides: Guide[] = [
    // --------- TUTO ----------
    {
        id: 'chasse-aux-monstres',
        category: 'tuto',
        slug: 'chasse-aux-monstres',
        titre: 'Chasse aux monstres',
        resume:
            "Comprendre l’énergie, les niveaux de monstres et quelles équipes utiliser pour rentabiliser chaque frappe.",
        niveau: 'Débutant',
        illustration: '/images/guides/chasse-monstres.png',
    },
    {
        id: 'talents-paix-combat',
        category: 'tuto',
        slug: 'talents-paix-combat',
        titre: 'Talents – mode Paix et Combat',
        resume:
            'Deux presets de talents pour alterner entre développement tranquille et guerre.',
        niveau: 'Débutant',
        illustration: '/images/guides/talents.png',
    },
    {
        id: 'sombres-nids',
        category: 'tuto',
        slug: 'sombres-nids',
        titre: 'Sombres nids',
        resume:
            'Les bases pour lancer des nids sans tout casser : compositions, timers et coordination de guilde.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/sombres-nids.png',
    },
    {
        id: 'stages-heros',
        category: 'tuto',
        slug: 'stages-heros',
        titre: 'Stages de héros',
        resume:
            'Comment passer les chapitres qui bloquent, quels héros monter en priorité pour avancer.',
        niveau: 'Débutant',
        illustration: '/images/guides/stages-heros.png',
    },
    {
        id: 'heros',
        category: 'tuto',
        slug: 'heros',
        titre: 'Héros',
        resume:
            'Vue d’ensemble des héros F2P : farm, guerre, mur, soutien… et comment les utiliser intelligemment.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/heros.png',
    },
    {
        id: 'joyaux',
        category: 'tuto',
        slug: 'joyaux',
        titre: 'Joyaux',
        resume:
            'Quels joyaux placer sur quel équipement, selon que tu joues farm, guerre ou mix.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/joyaux.png',
    },
    {
        id: 'stuff',
        category: 'tuto',
        slug: 'stuff',
        titre: 'Stuff (équipement)',
        resume:
            'Les ensembles de base pour farm, combat mono et compo mixte, avec une logique F2P.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/stuff.png',
    },
    {
        id: 'exp-joueur',
        category: 'tuto',
        slug: 'exp-joueur',
        titre: 'Expérience joueur',
        resume:
            'Comment monter rapidement ton niveau de joueur, et ce que ça débloque concrètement.',
        niveau: 'Débutant',
        illustration: '/images/guides/exp-joueur.png',
    },
    {
        id: 'familiers',
        category: 'tuto',
        slug: 'familiers',
        titre: 'Familiers',
        resume:
            'Les familiers utiles en priorité pour la chasse, la guerre et l’éco, sans tomber dans le full pay-to-win.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/familiers.png',
    },
    {
        id: 'base-rally',
        category: 'tuto',
        slug: 'base-rally',
        titre: 'Base d’un rally',
        resume:
            'Les bases pour lancer ou rejoindre des rallys sans ruiner ta guilde : formation, rôle, timing.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/base-rally.png',
    },

    // --------- EVENEMENTS ----------
    {
        id: 'guild-fest',
        category: 'evenements',
        slug: 'guild-fest',
        titre: 'Guild Fest',
        resume:
            'Quêtes à privilégier, pièges à éviter et organisation de guilde pour maximiser les points.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/guild-fest.png',
    },
    {
        id: 'arene-dragon',
        category: 'evenements',
        slug: 'arene-dragon',
        titre: 'Arène Dragon',
        resume:
            'Préparation des forts, compositions globales et coordination de guilde pendant l’Arène.',
        niveau: 'Avancé',
        illustration: '/images/guides/arene-dragon.png',
    },
    {
        id: 'kvk',
        category: 'evenements',
        slug: 'kvk',
        titre: 'KvK',
        resume:
            'Comment scorer en KvK sans brûler ton château pour rien : bouclier, migrations, cibles.',
        niveau: 'Intermédiaire',
        illustration: '/images/guides/kvk.png',
    },
    {
        id: 'epreuve-guilde',
        category: 'evenements',
        slug: 'epreuve-de-guilde',
        titre: 'Épreuve de guilde',
        resume:
            'Optimiser les dégâts sur les boss, bien utiliser les tentatives et les bonus de guilde.',
        niveau: 'Débutant',
        illustration: '/images/guides/epreuve-guilde.png',
    },
];
