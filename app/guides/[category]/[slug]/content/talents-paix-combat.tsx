import { TalentSetPanel } from '@/components/TalentSetPanel';
import { WarTalentsTabs } from '@/components/WarTalentsTabs';
import { talentBuilds } from '@/data/talents';

export function TalentsPaixCombatContent() {
    const economyBuild = talentBuilds.find(b => b.type === 'economy');
    const warBuilds = talentBuilds.filter(b => b.type === 'war');

    return (
        <article className="prose-lm">
            {/* Bloc 1 - Introduction */}
            <h2>Rappel rapide : comment fonctionnent les talents ?</h2>
            <ul>
                <li>
                    Les talents sont des bonus permanents (économie ou combat) que tu débloques
                    avec tes niveaux de joueur.
                </li>
                <li>
                    Au <strong>niveau 60</strong> tu as <strong>278 points</strong> à placer, et
                    tu peux même en gagner 10 de plus avec la recherche <em>Hidden Talent</em>{' '}
                    (Military Command).
                </li>
                <li>
                    Les talents de <strong>combat</strong> ne s&apos;appliquent que si ton héros
                    est <strong>dans la bataille</strong> (pas abrité, pas capturé).
                </li>
                <li>
                    Le but du jeu est d&apos;avoir plusieurs <em>sets</em> pré-enregistrés grâce
                    à la recherche <strong>Innate Talent</strong> pour pouvoir switcher très
                    vite entre économie et guerre.
                </li>
            </ul>

            <h2>Principes généraux (communs à tous les builds guerre)</h2>
            <ol>
                <li>
                    <strong>Priorité stats</strong> : ATK &gt; HP &gt; DEF. Tu maxes
                    d&apos;abord l&apos;attaque de ton type principal, puis la vie d&apos;armée
                    (<em>Squad Health</em> I & II), et seulement ensuite la défense si tu as des
                    points en rab.
                </li>
                <li>
                    <strong>Talents à éviter (sauf cas spéciaux)</strong> : Trap Building / Trap
                    Offense / Siege Engine Offense (quasiment aucun intérêt). Sur la branche éco, ne pousse <em>Food Production</em> que si
                    c&apos;est vraiment ton focus (farm).
                </li>
                <li>
                    <strong>Progression dans l&apos;arbre</strong> : Les talents du bas de
                    l&apos;arbre (III) donnent le meilleur ratio bonus / points. Mais tu es
                    obligé de mettre quelques points dans les talents I et II pour y arriver →
                    on met le strict minimum sauf si c&apos;est notre type principal.
                </li>
            </ol>

            {/* Bloc 2 - Talents Économie */}
            <h2>Set Paix (recherche / bâtiment / entrainement)</h2>
            <p>
                Objectif : accélérer <strong>construction + recherche</strong> et booster{' '}
                <strong>la vitesse d'entrainement</strong>.
            </p>
            {economyBuild && <TalentSetPanel build={economyBuild} />}

            {/* Bloc 3 - Talents Guerre */}
            <h2>Sets Guerre : disposition générale des points</h2>
            <p>
                Ici on part sur 4 presets de talents : <strong>Mix</strong> (défense),{' '}
                <strong>Inf</strong>, <strong>Cav</strong> et <strong>Dist</strong> (blasts).
            </p>
            <p>
                Les 3 blasts s&apos;ont des exemples : chaque set donne
                environ <strong>+70% ATK</strong> sur le type principal,{' '}
                <strong>+5% Army ATK</strong> et <strong>+100% HP/DEF d&apos;armée</strong>{' '}
                uniquement via talents.
            </p>

            <WarTalentsTabs builds={warBuilds} />

        </article>
    );
}

