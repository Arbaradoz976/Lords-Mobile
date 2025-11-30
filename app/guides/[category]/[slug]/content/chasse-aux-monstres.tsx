// app/guides/[category]/[slug]/content/chasse-aux-monstres.tsx
import Image from 'next/image';
import { MonsterPanel } from '@/components/MonsterPanel';

// Helper pour créer les objets héros
const H = (name: string, file: string) => ({
    name,
    image: `/heroes/${file}`,
});

export function ChasseAuxMonstresContent() {
    return (
        <article className="prose-lm">
            <h2>Pourquoi chasser les monstres ?</h2>
            <p>
                La chasse aux monstres est l&apos;une des meilleures sources régulières de
                ressources, de coffres d&apos;équipement, d&apos;accelerateurs et de divers
                objets utiles. Bien chasser, c&apos;est booster ton compte sans passer ta
                vie dans la boutique.
            </p>

            <ul>
                <li>Ressources pour tes futurs stuffs.</li>
                <li>Accélérateurs, coffres, gemmes et objets divers.</li>
                <li>Points pour certains événements (Guild Fest, Épreuves, etc.).</li>
            </ul>

            <h2>Les bases de la chasse</h2>

            <h3>Recherche</h3>
            <p>
                Avant de te focaliser sur des compositions de héros, assure-toi de
                développer ta base :
            </p>
            <ul>
                <li>
                    Monter les recherches liées à la chasse pour réduire le coût en énergie et
                    augmenter les dégâts.
                </li>
                <li>
                    Prévoir un préréglage d'équipement de chasseur (attaque de héros,
                    énergie max, etc.) que tu actives uniquement quand tu vas chasser.
                </li>
            </ul>

            <h3>Équipement de chasseur</h3>
            <p>
                Forge un <strong>set de chasseur</strong> dédié (équipement orienté dégâts
                de chasse, énergie max et vitesse de marche) et pense à l&apos;équiper sur
                ton chef <em>avant</em> d&apos;envoyer tes héros. Sinon, les bonus ne
                s&apos;appliquent pas.
            </p>

            <h3>Niveaux de monstres &amp; énergie</h3>
            <ul>
                <li>
                    Monstre niveau 1–2 : idéal pour les comptes débutants, faible énergie,
                    bonne rentabilité.
                </li>
                <li>
                    Monstre niveau 3–4 : demande des héros mieux montés (rang, niveau,
                    équipements).
                </li>
                <li>
                    Monstre niveau 5 : réservé aux comptes bien avancés ou à la chasse de
                    guilde très organisée.
                </li>
            </ul>

            <p>
                L&apos;idée est simple : mieux vaut <strong>toucher souvent</strong> les
                monstres que gaspiller ton énergie sur des cibles que tu ne tueras pas.
            </p>

            <h2>Héros F2P recommandés pour la chasse</h2>
            <p>
                Le jeu recommande un noyau de héros gratuits très efficaces pour la chasse
                aux monstres. Ils combinent bons dégâts, utilitaires et soins.
            </p>

            <ul>
                <li>
                    <strong>Tueur de Démons</strong> : gros dégâts de contact, excellentes
                    stats offensives.
                </li>
                <li>
                    <strong>Traqueuse</strong> : dégâts élevés et critiques puissants sur une
                    seule cible.
                </li>
                <li>
                    <strong>Prima Donna</strong> : ton soin principal pour garder toute
                    l&apos;équipe en vie.
                </li>
                <li>
                    <strong>Le Roublard</strong> : bon DPS, utile et facile à monter.
                </li>
                <li>
                    <strong>L&apos;Éclair Pourpre</strong> : désarme les ennemis physiques et
                    inflige de gros dégâts.
                </li>
                <li>
                    <strong>Oiseau Noir</strong> : excellent DPS distance, très utile en
                    chasse.
                </li>
                <li>
                    <strong>Incinératrice</strong> : forte attaque magique, parfait contre
                    les monstres sensibles à la magie.
                </li>
                <li>
                    <strong>Élémentaliste</strong> : bons dégâts magiques et réduction de
                    défense magique adverse.
                </li>
                <li>
                    <strong>Archère Funeste</strong> : dégâts physiques orientés mono-cible.
                </li>
                <li>
                    <strong>Reine des Neiges</strong> : dégâts magiques et contrôle.
                </li>
                <li>
                    <strong>Gobelin Bombardier</strong> : dégâts physiques en zone.
                </li>
            </ul>

            <p className="text-sm text-slate-400">
                💡 Rappel important : ce guide propose des compositions en temps qu'exemples.
                Adapte toujours en fonction de ton niveau de héros (rang, grade, niveau
                d&apos;équipement).
            </p>

            <h2>Compositions F2P conseillées par monstre</h2>
            <p>
                Voici les compositions officielles du guide IGG "Chasse du monstre" pour les
                niveaux 4–5 (ou 1–5 quand précisé). Ces compos F2P sont optimisées selon
                les résistances de chaque monstre.
            </p>

            <MonsterPanel
                name="Reine des Abeilles"
                description="Fort contre la magie."
                monsterImage="/monsters/reine-abeille.png"
                heroes={[
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Traqueuse', 'traqueuse.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Femme Fatale', 'femme-fatale.png'),
                ]}
            />

            <MonsterPanel
                name="Sabrecroc"
                description="Fort contre le physique. "
                monsterImage="/monsters/sabrecroc.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Renard Ouragan', 'renard-ouragan.png'),
                ]}
            />

            <MonsterPanel
                name="Griffon"
                description="Fort contre la magie et le physique."
                monsterImage="/monsters/griffon.png"
                heroes={[
                    H('Femme Fatale', 'femme-fatale.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                ]}
            />

            <MonsterPanel
                name="Mécha Troyen"
                description="Fort contre le physique. Composition IGG pour tous les niveaux (1–5)."
                monsterImage="/monsters/mecha-troyen.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Renard Ouragan', 'renard-ouragan.png'),
                ]}
            />

            <MonsterPanel
                name="Wyrm de Jade"
                description="Fort contre le physique."
                monsterImage="/monsters/wyrm-de-jade.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Enfant de Lumière', 'enfant-de-lumiere.png'),
                ]}
            />

            <MonsterPanel
                name="Morfalange"
                description="Fort contre la magie."
                monsterImage="/monsters/morfalange.png"
                heroes={[
                    H('Traqueuse', 'traqueuse.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Femme Fatale', 'femme-fatale.png'),
                ]}
            />

            <MonsterPanel
                name="Gargantua"
                description="Fort contre le physique."
                monsterImage="/monsters/gargantua.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Enfant de Lumière', 'enfant-de-lumiere.png'),
                ]}
            />

            <MonsterPanel
                name="Ailes-de-givre"
                description="Fort contre la magie."
                monsterImage="/monsters/ailes-de-givre.png"
                heroes={[
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                    H('Femme Fatale', 'femme-fatale.png'),
                ]}
            />

            <MonsterPanel
                name="Drider de l'Enfer"
                description="Fort contre la magie et le physique."
                monsterImage="/monsters/drider-enfer.png"
                heroes={[
                    H('Archère Funeste', 'archere-funeste.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Femme Fatale', 'femme-fatale.png'),
                ]}
            />

            <MonsterPanel
                name="Bête des Neiges"
                description="Fort contre la magie."
                monsterImage="/monsters/bete-des-neiges.png"
                heroes={[
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Femme Fatale', 'femme-fatale.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                ]}
            />

            <MonsterPanel
                name="Titan des Marais"
                description="Fort contre le physique."
                monsterImage="/monsters/titan-des-marais.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Reine des Neiges', 'reine-des-neiges.png'),
                    H('Prima Donna', 'prima-donna.png'),
                    H('Renard Ouragan', 'renard-ouragan.png'),
                ]}
            />

            <MonsterPanel
                name="Épinator"
                description="Fort contre la magie. Composition IGG pour les niveaux 1–5."
                monsterImage="/monsters/epinator.png"
                heroes={[
                    H('Traqueuse', 'traqueuse.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                ]}
            />

            <MonsterPanel
                name="Nocéros"
                description="Fort contre le physique."
                monsterImage="/monsters/noceros.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Prêtresse Aurora', 'pretresse-aurora.png'),
                ]}
            />

            <MonsterPanel
                name="Méga-larve"
                description="Fort contre le physique. Composition IGG valable pour tous les niveaux."
                monsterImage="/monsters/mega-larve.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Renard Ouragan', 'renard-ouragan.png'),
                ]}
            />

            <MonsterPanel
                name="Ailes Noires"
                description="Fort contre la magie."
                monsterImage="/monsters/ailes-noires.png"
                heroes={[
                    H('Chevalier Rose', 'chevalier-rose.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                ]}
            />

            <MonsterPanel
                name="La Faucheuse"
                description="Fort contre la magie."
                monsterImage="/monsters/la-faucheuse.png"
                heroes={[
                    H('Chevalier Rose', 'chevalier-rose.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Éclair Pourpre', 'eclair-pourpre.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Archère Funeste', 'archere-funeste.png'),
                ]}
            />

            <MonsterPanel
                name="Golem Antique"
                description="Fort contre le physique."
                monsterImage="/monsters/golem-antique.png"
                heroes={[
                    H('Incinératrice', 'incineratrice.png'),
                    H('Élémentaliste', 'elementaliste.png'),
                    H('Sorcière du Rêve', 'sorciere-du-reve.png'),
                    H('Petite Succube', 'petite-succube.png'),
                    H('Prêtresse Aurora', 'pretresse-aurora.png'),
                ]}
            />

            <MonsterPanel
                name="Chaman Vaudou"
                description="Fort contre la magie."
                monsterImage="/monsters/chaman-vaudou.png"
                heroes={[
                    H('Traqueuse', 'traqueuse.png'),
                    H('Tueur de Démons', 'tueur-de-demons.png'),
                    H('Guide Éthéré', 'guide-ethere.png'),
                    H('Oiseau Noir', 'oiseau-noir.png'),
                    H('Chef', 'chef.png'),
                ]}
            />

            <p className="mt-3 text-xs text-slate-400">
                Ces compositions sont des exemples F2P. Tu peux remplacer un héros par un
                autre du même type (physique/magique) si tu l&apos;as mieux monté.
            </p>

            <h2>À retenir</h2>
            <ul>
                <li>
                    Investis dans les recherches de chasse, un set de chasseur dédié et des
                    talents adaptés.
                </li>
                <li>
                    Utilise un noyau de héros F2P solides (Tueur de Démons, Traqueuse,
                    Incinératrice, Élémentaliste, etc.) et adapte selon leurs niveaux.
                </li>
                <li>
                    Choisis tes cibles en fonction du type d&apos;équipement que tu veux
                    farmer.
                </li>
            </ul>

            <p className="text-sm text-slate-400">
                Ce guide sera complété au fur et à mesure avec des exemples d&apos;énergie,
                de dégâts et des compositions alternatives. Tu peux déjà l&apos;utiliser
                comme base pour documenter les choix de ton équipe ou de ta guilde.
            </p>
        </article>
    );
}
