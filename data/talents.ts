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
            'Maxer Vitesse de construction I & II',
            'Maxer Vitesse de recherche I & II',
            'Maxer Vitesse d\'entrainement I & II',
            'Reste des points dans Collecte II et Charge max II',
        ],
        whenToUse: 'Utilise ce set quand tu es en paix, que tu construis, recherches ou farm des ressources.',
    },
    {
        id: 'mix',
        name: 'Mix',
        type: 'war',
        subtype: 'mix',
        description: 'Build équilibré pour défense de château/forts avec composition mixte.',
        imagePath: '/talents/mix.png',
        targetStats: '+70% ATK total, +5% Army ATK, +100% HP armée',
        priorities: [
            'Maxer Attaque escouade I',
            'Maxer PV escouade I & II',
            'Maxer Attaque Infanterie III',
            'Maxer Attaque Distance III',
            'Maxer Attaque Cavalerie III',
            'Répartir le reste dans Attaque Infanterie/Distance/Cavalerie II selon ta comp',
        ],
        whenToUse: 'Défense de château, défense de forts, compositions mixtes équilibrées.',
    },
    {
        id: 'infantry',
        name: 'Infanterie',
        type: 'war',
        subtype: 'infantry',
        description: 'Build spécialisé pour blast Infanterie ou rally Inf front.',
        imagePath: '/talents/infanterie.png',
        targetStats: '+70% Inf ATK, +5% Army ATK, +100% HP armée',
        priorities: [
            'Maxer Attaque escouade I',
            'Maxer PV escouade I & II',
            'Maxer Attaque Infanterie III',
            'Maxer Attaque Infanterie II',
            'Minimum requis dans Attaque Infanterie I',
            'Quelques points dans Attaque Distance/Cavalerie II/III pour side-troops (optionnel)',
        ],
        whenToUse: 'Blast Infanterie, rally en Inf front, attaques solo lourdes Inf.',
    },
    {
        id: 'cavalry',
        name: 'Cavalerie',
        type: 'war',
        subtype: 'cavalry',
        description: 'Build spécialisé pour blast Cavalerie ou rally Cav.',
        imagePath: '/talents/cavalerie.png',
        targetStats: '+70% Cav ATK, +5% Army ATK, +100% HP armée',
        priorities: [
            'Maxer Attaque escouade I',
            'Maxer PV escouade I & II',
            'Maxer Attaque Cavalerie III',
            'Maxer Attaque Cavalerie II',
            'Minimum requis dans Attaque Cavalerie I',
            'Quelques points dans Attaque Distance/Infanterie II/III pour compositions 424/442',
        ],
        whenToUse: 'Blast Cavalerie, rally en Cav.',
    },
    {
        id: 'ranged',
        name: 'Distance',
        type: 'war',
        subtype: 'ranged',
        description: 'Build spécialisé pour blast Distance/Ranged.',
        imagePath: '/talents/distance.png',
        targetStats: '+70% Ranged ATK, +5% Army ATK, +100% HP armée',
        priorities: [
            'Maxer Attaque escouade I',
            'Maxer PV escouade I & II',
            'Maxer Attaque Distance III',
            'Maxer Attaque Distance II',
            'Minimum dans Attaque Distance I',
            'Quelques points dans Attaque Cavalerie II/III (bonne 2e ligne)',
        ],
        whenToUse: 'Blast Distance, rally sur forts.',
    },
];
