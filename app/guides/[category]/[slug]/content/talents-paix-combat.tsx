// app/guides/[category]/[slug]/content/talents-paix-combat.tsx
import { TalentSetPanel } from '@/components/TalentSetPanel';
import { talentBuilds } from '@/data/talents';

export function TalentsPaixCombatContent() {
    const economyBuild = talentBuilds.find(b => b.type === 'economy');
    const warBuilds = talentBuilds.filter(b => b.type === 'war');

    return (
        <article className="prose-lm">
            <h2>Comment fonctionnent les talents ?</h2>
            <p>
                Les talents sont des bonus permanents (économie ou combat) que tu débloques
                avec tes niveaux de joueur. Voici les points essentiels à retenir :
            </p>

            <ul>
                <li>
                    Au <strong>niveau 60</strong> tu disposes de <strong>278 points</strong> à
                    placer dans différentes branches de talents.
                </li>
                <li>
                    Tu peux gagner <strong>10 points supplémentaires</strong> avec la recherche{' '}
                    <em>Hidden Talent</em> (Military Command).
                </li>
                <li>
                    Les talents de <strong>combat</strong> ne s&apos;appliquent que si ton héros
                    est <strong>dans la bataille</strong> (pas abrité, pas capturé).
                </li>
                <li>
                    La recherche <strong>Innate Talent</strong> te permet de sauvegarder
                    plusieurs sets pré-enregistrés pour switcher rapidement entre économie et
                    guerre.
                </li>
            </ul>

            <h2>Principes généraux pour les builds guerre</h2>
            <p>
                Avant de détailler chaque build, voici les règles communes à tous les sets
                de combat :
            </p>

            <h3>1. Priorité des stats</h3>
            <p className="text-amber-200 font-semibold">
                ATK &gt; HP &gt; DEF
            </p>
            <p>
                Maxe d&apos;abord l&apos;attaque de ton type principal, puis la vie
                d&apos;armée (<em>Squad Health</em> I & II), et seulement ensuite la défense
                si tu as des points en rab.
            </p>

            <h3>2. Talents à éviter</h3>
            <ul>
                <li>
                    <strong>Trap Building / Trap Offense / Siege Engine Offense</strong> →
                    quasiment aucun intérêt en jeu de guerre moderne.
                </li>
                <li>
                    Sur la branche éco : ne pousse <strong>Food Production</strong> et les
                    autres productions que si c&apos;est vraiment ton focus (compte farm).
                </li>
            </ul>

            <h3>3. Progression dans l&apos;arbre</h3>
            <p>
                Les talents du bas de l&apos;arbre (niveau III) donnent le{' '}
                <strong>meilleur ratio bonus/points</strong>. Par exemple,{' '}
                <em>Infantry Offense III</em> peut donner jusqu&apos;à ~53% d&apos;ATK quand
                il est maxé.
            </p>
            <p>
                Tu es obligé de mettre quelques points dans les talents I et II pour y
                accéder → mets le strict minimum sauf si c&apos;est ton type principal.
            </p>

            <h2>Set Économie</h2>
            <p>
                Ce set est conçu pour optimiser ta croissance hors combat : construction,
                recherche et production de ressources.
            </p>

            {economyBuild && <TalentSetPanel build={economyBuild} />}

            <h2>Sets Guerre</h2>
            <p>
                Voici 4 builds de combat spécialisés. Chaque build vise environ{' '}
                <strong>+70% ATK</strong> sur le type principal, <strong>+5% Army ATK</strong>{' '}
                et <strong>+100% HP/DEF d&apos;armée</strong> uniquement via les talents.
            </p>

            {warBuilds.map((build) => (
                <TalentSetPanel key={build.id} build={build} />
            ))}

            <h2>À retenir</h2>
            <ul>
                <li>
                    Utilise <strong>Innate Talent</strong> pour sauvegarder plusieurs sets et
                    switcher rapidement.
                </li>
                <li>
                    Adapte tes builds selon ton niveau de héros, ton équipement et ta stratégie
                    de jeu.
                </li>
                <li>
                    Pour les blasts : privilégie toujours <strong>ATK &gt; HP &gt; DEF</strong>.
                </li>
                <li>
                    N&apos;oublie pas de mettre quelques points dans{' '}
                    <strong>Training Speed II</strong> pour économiser des accélérations de soins.
                </li>
            </ul>
        </article>
    );
}
