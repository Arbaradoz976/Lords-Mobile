// data/heroes.ts

// Mapping des noms de héros EN vers les chemins d'images (dossier /public/heroes)
export const heroImages: Record<string, string> = {
    // ─────────────────────────
    // FREE HEROES (F2P)
    // ─────────────────────────

    // Army boost
    'Rose Knight': '/heroes/chevalier-rose.png',
    'Watcher': '/heroes/veilleur.png',
    'Chaos Dragon': '/heroes/dragon-du-chaos.png',

    // Infantry boost
    'Demon Slayer': '/heroes/tueur-de-demons.png',
    'Sea Squire': '/heroes/ecuyer-marin.png',
    'Soul Forger': '/heroes/forgeur-d-ames.png',
    'Oath Keeper': '/heroes/le-loyal.png',

    // Ranged boost
    'Tracker': '/heroes/traqueuse.png',
    'Snow Queen': '/heroes/reine-des-neiges.png',
    'Black Crow': '/heroes/oiseau-noir.png',
    'Death Archer': '/heroes/archere-funeste.png',

    // Cavalry boost
    'Child of Light': '/heroes/enfant-de-lumiere.png',
    'Death Knight': '/heroes/chevalier-noir.png',
    'Night Raven': '/heroes/faucon-nocturne.png',

    // Siege engine boost
    'Incinerator': '/heroes/incineratrice.png',
    'Prima Donna': '/heroes/prima-donna.png',
    'Elementalist': '/heroes/elementaliste.png',

    // Trap / divers F2P
    'Bombin Goblin': '/heroes/gobelin-bombardier.png',
    'Scarlet Bolt': '/heroes/eclair-pourpre.png',
    'Sage of Storms': '/heroes/sage-tourmente.png',
    'Trickster': '/heroes/roublard.png',

    // F2P “bonus” non mis en avant sur la page IGG mais utiles en jeu
    'Shade': '/heroes/ombre.png',

    // ─────────────────────────
    // P2P HEROES
    // ─────────────────────────

    // Army boost
    'Storm Fox': '/heroes/renard-ouragan.png',
    'Berserker': '/heroes/berserker.png',
    // Sur la page FR : « Tisseuse du Destin »
    'Lore Weaver': '/heroes/tisseuse-du-destin.png',
    'Prince of Thieves': '/heroes/prince-des-voleurs.png',
    'Dream Witch': '/heroes/sorciere-du-reve.png',
    'Songstress of the Sea': '/heroes/sirene-puissante.png',

    // Infantry boost (P2P)
    'Twilight Priestess': '/heroes/pretresse-aurora.png',
    'Grim Wolf': '/heroes/loup-sinistre.png',
    'Femme Fatale': '/heroes/femme-fatale.png',
    'The Big Guy': '/heroes/le-costaud.png',
    'Cursed Hunter': '/heroes/chasseuse-maudite.png',

    // Ranged boost (P2P)
    'Grove Guardian': '/heroes/gardien-des-forets.png',
    'Mastercook': '/heroes/chef.png',
    'Ethereal Guide': '/heroes/guide-ethere.png',
    'Petite Devil': '/heroes/petite-succube.png',
    'Snail Princess': '/heroes/princesse-escargot.png',

    // Cavalry boost (P2P)
    'Steambot': '/heroes/robot-vap.png',
    'Vengeful Centaur': '/heroes/centaure-vengeur.png',
    'Barbarian': '/heroes/barbare.png',
    'Don Guapo': '/heroes/don-guapo.png',

    // Mixed army stats
    'Lightweaver': '/heroes/tisseuse-de-lumiere.png',
    'Shape Shifter': '/heroes/demone-funebre.png',
    'Dark Magister': '/heroes/sombre-mage.png',

    // Admin / éco P2P
    'Witch Doll': '/heroes/poupee-sorciere.png',
    'Dark Follower': '/heroes/sombre-devot.png',
};

// Mapping des noms de héros EN vers les noms FR
export const heroNamesFr: Record<string, string> = {
    // FREE HEROES (F2P)
    'Rose Knight': 'Chevalier Rose',
    'Watcher': 'Veilleur',
    'Chaos Dragon': 'Dragon du Chaos',
    'Demon Slayer': 'Tueur de Démons',
    'Sea Squire': 'Écuyer Marin',
    'Soul Forger': 'Forgeur d\'Âmes',
    'Oath Keeper': 'Le Loyal',
    'Tracker': 'Traqueuse',
    'Snow Queen': 'Reine des Neiges',
    'Black Crow': 'Oiseau Noir',
    'Death Archer': 'Archère Funeste',
    'Child of Light': 'Enfant de Lumière',
    'Death Knight': 'Chevalier Noir',
    'Night Raven': 'Faucon Nocturne',
    'Incinerator': 'Incinératrice',
    'Prima Donna': 'Prima Donna',
    'Elementalist': 'Élémentaliste',
    'Bombin Goblin': 'Gobelin Bombardier',
    'Scarlet Bolt': 'Éclair Pourpre',
    'Sage of Storms': 'Sage Tourmenté',
    'Trickster': 'Roublard',
    'Shade': 'Ombre',

    // P2P HEROES
    'Storm Fox': 'Renard Ouragan',
    'Berserker': 'Berserker',
    'Lore Weaver': 'Tisseuse du Destin',
    'Prince of Thieves': 'Prince des Voleurs',
    'Dream Witch': 'Sorcière du Rêve',
    'Songstress of the Sea': 'Sirène Puissante',
    'Twilight Priestess': 'Prêtresse Aurora',
    'Grim Wolf': 'Loup Sinistre',
    'Femme Fatale': 'Femme Fatale',
    'The Big Guy': 'Le Costaud',
    'Cursed Hunter': 'Chasseuse Maudite',
    'Grove Guardian': 'Gardien des Forêts',
    'Mastercook': 'Chef',
    'Ethereal Guide': 'Guide Éthéré',
    'Petite Devil': 'Petite Succube',
    'Snail Princess': 'Princesse Escargot',
    'Steambot': 'Robot Vap',
    'Vengeful Centaur': 'Centaure Vengeur',
    'Barbarian': 'Barbare',
    'Don Guapo': 'Don Guapo',
    'Lightweaver': 'Tisseuse de Lumière',
    'Shape Shifter': 'Démone Funèbre',
    'Dark Magister': 'Sombre Mage',
    'Witch Doll': 'Poupée Sorcière',
    'Dark Follower': 'Sombre Dévot',
};

// Helper pour obtenir l'image d'un héros (avec fallback)
export function getHeroImage(heroName: string): string {
    return heroImages[heroName] || '/heroes/default.png';
}

// Helper pour obtenir le nom français d'un héros
export function getHeroNameFr(heroNameEn: string): string {
    return heroNamesFr[heroNameEn] || heroNameEn;
}
