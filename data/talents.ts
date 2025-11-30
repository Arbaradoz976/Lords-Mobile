// data/talents.ts

export type TalentBuild = {
    id: string;
    name: string;
    type: 'economy' | 'war';
    subtype?: 'mix' | 'infantry' | 'cavalry' | 'ranged';
    description: string;
    imagePath: string;
    priorities: string[];
    whenToUse: string;
    targetStats?: string;
};

export const talentBuilds: TalentBuild[] = [
    {
        id: 'economy',
        name: 'Économie',
        type: 'economy',
        description: 'Set pour accélérer construction, recherche et production de ressources.',
        imagePath: '/talents/eco.png',
        priorities: [
            'Maxer Construction Speed I & II',
            'Maxer Research I & II',
            'Choisir une ressource principale (Pierre ou Bois) et maxer Production I/II/III',
            'Minimum dans Food Production I (2-3 points) pour débloquer l\'arbre',
            'Reste des points dans Gathering I/II et Max Load',
        ],
        whenToUse: 'Utilise ce set quand tu es en paix, que tu construis, recherches ou farm des ressources.',
    },
    {
        id: 'mix',
        name: 'Mix',
        type: 'war',
        subtype: 'mix',
        description: 'Build équilibré pour défense de château/forts avec composition mixte (ex: 442, 554).',
        imagePath: '/talents/mix.png',
        targetStats: '+70% ATK total, +5% Army ATK, +100% HP/DEF armée',
        priorities: [
            'Maxer Squad Offense I',
            'Maxer Squad Health I & II',
            'Maxer Infantry Offense III',
            'Maxer Ranged Offense III',
            'Maxer Cavalry Offense III',
            'Répartir le reste dans Infantry/Ranged/Cavalry Offense II selon ta comp',
            'Surplus dans Training Speed II',
        ],
        whenToUse: 'Défense de château, défense de forts, compositions mixtes équilibrées.',
    },
    {
        id: 'infantry',
        name: 'Infanterie',
        type: 'war',
        subtype: 'infantry',
        description: 'Build spécialisé pour blast Infanterie ou rally Inf front.',
        imagePath: '/talents/infantry.png',
        targetStats: '+70% Inf ATK, +5% Army ATK, +100% HP/DEF armée',
        priorities: [
            'Maxer Squad Offense I',
            'Maxer Squad Health I & II',
            'Maxer Infantry Offense III',
            'Maxer Infantry Offense II',
            'Minimum requis dans Infantry Offense I',
            'Quelques points dans Cavalry/Ranged Offense II/III pour side-troops (optionnel)',
            'Surplus dans Training Speed II',
        ],
        whenToUse: 'Blast Infanterie, rally en Inf front, attaques solo lourdes Inf.',
    },
    {
        id: 'cavalry',
        name: 'Cavalerie',
        type: 'war',
        subtype: 'cavalry',
        description: 'Build spécialisé pour blast Cavalerie ou rally Cav.',
        imagePath: '/talents/cavalry.png',
        targetStats: '+70% Cav ATK, +5% Army ATK, +100% HP/DEF armée',
        priorities: [
            'Maxer Squad Offense I',
            'Maxer Squad Health I & II',
            'Maxer Cavalry Offense III',
            'Maxer Cavalry Offense II',
            'Minimum requis dans Cavalry Offense I',
            'Quelques points dans Infantry Offense II/III pour compositions 424/442',
            'Surplus dans Training Speed II',
        ],
        whenToUse: 'Blast Cavalerie, rally en Cav, compos type 424 ou 442.',
    },
    {
        id: 'ranged',
        name: 'Distance',
        type: 'war',
        subtype: 'ranged',
        description: 'Build spécialisé pour blast Distance/Ranged.',
        imagePath: '/talents/ranged.png',
        targetStats: '+70% Ranged ATK, +5% Army ATK, +100% HP/DEF armée',
        priorities: [
            'Maxer Squad Offense I',
            'Maxer Squad Health I & II',
            'Maxer Ranged Offense III',
            'Maxer Ranged Offense II',
            'Minimum dans Ranged Offense I',
            'Quelques points dans Cavalry Offense II/III (bonne 2e ligne)',
            'Surplus dans Training Speed II',
        ],
        whenToUse: 'Blast Distance, rally sur forts, cibles lourdes en Inf.',
    },
];
