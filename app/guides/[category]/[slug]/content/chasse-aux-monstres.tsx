// app/guides/[category]/[slug]/content/chasse-aux-monstres.tsx
import Image from 'next/image';
import { MonsterPanel } from '@/components/MonsterPanel';
import { monsterHunts } from '@/data/monsterHunt';

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
                💡 Rappel important : ce guide propose des compositions en temps qu&apos;exemples.
                Adapte toujours en fonction de ton niveau de héros (rang, grade, niveau
                d&apos;équipement).
            </p>

            <h2>Compositions conseillées par monstre</h2>
            <p>
                Voici les compositions  pour chaque monstre. 
                Chaque monstre dispose d&apos;une composition F2P (gratuite) et
                souvent d&apos;une composition P2P optimisée.
            </p>

            {monsterHunts.map((monster) => {
                const resistanceText =
                    monster.resistance === 'physical' ? 'Fort contre le physique.' :
                        monster.resistance === 'magic' ? 'Fort contre la magie.' :
                            'Fort contre la magie et le physique.';

                return (
                    <MonsterPanel
                        key={monster.id}
                        monster={monster}
                        imageSrc={`/monsters/${monster.slug}.png`}
                        description={resistanceText}
                    />
                );
            })}

            <p className="mt-3 text-xs text-slate-400">
                Ces compositions F2P/P2P sont des exemples. Adapte selon tes héros disponibles.
            </p>

            <h2>À retenir</h2>
            <ul>
                <li>
                    Investis dans les recherches de chasse, un set de chasseur dédié.
                </li>
                <li>
                    Utilise une base de héros F2P solides (Tueur de Démons, Traqueuse,
                    Incinératrice, Élémentaliste, etc.) et adapte selon leurs niveaux.
                </li>
                <li>
                    Choisis tes cibles en fonction du type d&apos;équipement que tu veux
                    farmer.
                </li>
            </ul>
        </article>
    );
}
