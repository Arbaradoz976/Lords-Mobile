import React from 'react';
import { getHeroImage, getHeroNameFr } from '@/data/heroes';
import { StageTable } from '@/components/StageTable';
import { eliteStages, challengeStages } from '@/data/heroStages';

type HeroChipProps = {
    name: string;
};

function HeroChip({ name }: HeroChipProps) {
    const nameFr = getHeroNameFr(name);

    return (
        <div className="flex items-center gap-1 rounded-xl border border-amber-300/60 bg-slate-900/90 px-2 py-1 shadow-md">
            <div className="h-9 w-9 overflow-hidden rounded-lg flex-shrink-0">
                <img
                    src={getHeroImage(name)}
                    alt={nameFr}
                    className="h-full w-full object-cover"
                />
            </div>
            <span className="text-[11px] font-medium text-slate-100">
                {nameFr}
            </span>
        </div>
    );
}

export function StagesHerosContent() {
    return (
        <article className="prose-lm">
            <h2>Stages de Héros (Goddess Trial)</h2>
            <p>
                Les <strong>stages de héros</strong> se jouent depuis la statue dorée au centre de ton territoire.
                C'est là que tu débloques les héros, leurs médailles et une grosse partie de l'XP dont ils ont besoin.
                Chaque chapitre comporte <strong>18 stages</strong>, et tous les 3 niveaux tu tombes sur un "gros" stage (le boss).
            </p>

            {/* Introduction */}
            <div className="my-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                <h3 className="mt-0 text-lg font-semibold text-amber-300">💡 Pourquoi c'est important ?</h3>
                <ul className="mt-2 space-y-1">
                    <li><strong>Déblocage gratuit</strong> de tous les héros F2P</li>
                    <li><strong>Médailles</strong> nécessaires pour monter en grade tes héros</li>
                    <li><strong>XP de héros</strong> en grande quantité</li>
                    <li><strong>Équipements</strong> et ressources diverses</li>
                </ul>
            </div>

            <h2>1. Les différents modes</h2>

            <h3>Mode Normal</h3>
            <ul>
                <li>Débloqué après le didacticiel, <strong>8 chapitres</strong>, 18 stages chacun.</li>
                <li>Coût : <strong>6 points d'endurance</strong> par entrée.</li>
                <li>Récompenses principales : <strong>XP de héros, médailles</strong> pour les premiers héros, équipements et ressources.</li>
                <li>C'est ici que tu avances pour débloquer les chapitres suivants et les modes Elite / Challenge.</li>
            </ul>

            <h3>Mode Elite</h3>
            <ul>
                <li>Les stages <strong>Elite</strong> correspondent aux <strong>stages boss</strong> (1-3, 1-6, 1-9… jusqu'à 8-18).</li>
                <li>Beaucoup plus difficile mais tu gagnes des <strong>médailles supplémentaires</strong> pour certains héros (Rose Knight, Child of Light, etc.).</li>
                <li>Pour chaque boss, il existe des compositions recommandées (voir tableaux ci-dessous).</li>
            </ul>

            <h3>Mode Challenge</h3>
            <ul>
                <li>Débloqué une fois le <strong>Chapitre 4 Elite</strong> terminé.</li>
                <li><strong>Pas de coût en endurance</strong> : tu peux recommencer autant de fois que tu veux, mais chaque challenge ne se valide qu'une seule fois.</li>
                <li>Il y a des <strong>restrictions</strong> (héros imposés ou interdits, limitations de morts, temps limité, etc.) et des <strong>gemmes</strong> en récompense.</li>
                <li>Les challenges sont <strong>beaucoup plus difficiles</strong> que Normal/Elite, même avec des héros P2P.</li>
            </ul>

            <div className="my-6 rounded-lg border-l-4 border-indigo-500 bg-slate-800 p-4">
                <p className="font-bold text-white">⚡ Fonction "Sweep" (Balayage)</p>
                <p className="text-slate-300">
                    À partir du <strong>niveau VIP 6</strong>, tu peux <strong>"balayer" (Sweep)</strong> les stages Normaux et Elite
                    déjà terminés en 3★ pour récupérer les récompenses instantanément. Pratique pour farmer les médailles et l'XP de héros !
                </p>
            </div>

            <h2>2. Composition d'équipe de base (F2P)</h2>
            <p>Avant de rentrer dans le détail des chapitres, retiens une règle simple :</p>

            <blockquote className="border-l-4 border-emerald-500 bg-emerald-500/10 p-4 not-italic">
                <p className="m-0 text-emerald-200 font-semibold text-lg">
                    1 tank + 1 soigneur + 3 DPS à distance / contrôle
                </p>
            </blockquote>

            <p>Voici une compo de base <strong>full F2P</strong>, très facile à obtenir dès le début :</p>

            <div className="rounded-lg bg-slate-800 p-4 my-4">
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-400 w-32">Tank :</span>
                        <HeroChip name="Child of Light" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-green-400 w-32">Healer :</span>
                        <HeroChip name="Prima Donna" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-red-400 w-32">DPS contrôle :</span>
                        <HeroChip name="Incinerator" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-red-400 w-32">DPS mono-cible :</span>
                        <HeroChip name="Tracker" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-red-400 w-32">DPS physique :</span>
                        <HeroChip name="Black Crow" />
                    </div>
                </div>
                <p className="mt-3 text-sm text-slate-400">
                    Tu peux déjà passer <strong>tous les chapitres 1 à 5</strong> et une bonne partie du 6
                    juste avec cette équipe si tes héros sont correctement montés (rang/grade/niveau).
                </p>
            </div>

            <h2>3. Héros à monter en priorité pour les stages</h2>
            <p>
                On retrouve toujours les mêmes "stars" F2P pour les stages.
                Si tu ne sais pas quels héros monter, concentre-toi d'abord sur ceux-là :
                ils servent <strong>en Stages, en Colisée et en Darknest</strong>.
            </p>

            <div className="grid gap-4 my-6 md:grid-cols-2">
                <div className="rounded-lg border border-green-500/40 bg-green-500/10 p-4">
                    <h4 className="mt-0 text-green-300">🛡️ Tanks / Supports</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <HeroChip name="Rose Knight" />
                            <span className="text-sm text-slate-300">Meilleur tank F2P</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Child of Light" />
                            <span className="text-sm text-slate-300">Tank + gros stun</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Death Knight" />
                            <span className="text-sm text-slate-300">Ressuscite une fois</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4">
                    <h4 className="mt-0 text-emerald-300">💚 Healer</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <HeroChip name="Prima Donna" />
                            <span className="text-sm text-slate-300">Unique vrai healer F2P - OBLIGATOIRE</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4">
                    <h4 className="mt-0 text-red-300">⚔️ DPS physique</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <HeroChip name="Tracker" />
                            <span className="text-sm text-slate-300">Énorme burst mono-cible</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Black Crow" />
                            <span className="text-sm text-slate-300">DPS arrière</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Night Raven" />
                            <span className="text-sm text-slate-300">Assassin backline</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Demon Slayer" />
                            <span className="text-sm text-slate-300">Assassin découpe</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg border border-purple-500/40 bg-purple-500/10 p-4">
                    <h4 className="mt-0 text-purple-300">🔮 Mages de contrôle</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <HeroChip name="Snow Queen" />
                            <span className="text-sm text-slate-300">Gel + stun</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HeroChip name="Incinerator" />
                            <span className="text-sm text-slate-300">Stun zone + dégâts</span>
                        </li>
                    </ul>
                </div>
            </div>

            <h2>4. Recommandations par chapitre (Elite 5–8)</h2>
            <p>
                Les compos tournent autour des mêmes héros,
                avec quelques variantes selon le boss. Voici des équipes "passe-partout" pour chaque chapitre Elite.
            </p>

            {/* Chapter 5 */}
            <div className="my-6 rounded-lg border border-slate-600 bg-slate-900/50 p-5">
                <h3 className="mt-0 flex items-center gap-2">
                    <span className="text-2xl">📖</span>
                    Chapitre 5 – <em>Dark Curse</em>
                </h3>
                <p className="text-slate-300">
                    Stages Elite : <strong>5-3, 5-6, 5-9, 5-12, 5-15, 5-18</strong>
                </p>

                <div className="mt-4 space-y-3">
                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-amber-300 mb-2">Équipe passe-partout :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Tracker" />
                            <HeroChip name="Demon Slayer" />
                            <HeroChip name="Child of Light" />
                            <HeroChip name="Prima Donna" />
                            <HeroChip name="Death Archer" />
                        </div>
                    </div>

                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-indigo-300 mb-2">Variante plus tanky :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Prima Donna" />
                            <HeroChip name="Child of Light" />
                            <HeroChip name="Death Knight" />
                            <HeroChip name="Snow Queen" />
                            <HeroChip name="Tracker" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapter 6 */}
            <div className="my-6 rounded-lg border border-slate-600 bg-slate-900/50 p-5">
                <h3 className="mt-0 flex items-center gap-2">
                    <span className="text-2xl">📖</span>
                    Chapitre 6 – <em>Dreamfall</em>
                </h3>
                <p className="text-slate-300">
                    On reste sur une base similaire pour la majorité des bosses.
                </p>

                <div className="mt-4 space-y-3">
                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-amber-300 mb-2">Équipe recommandée :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Prima Donna" />
                            <HeroChip name="Child of Light" />
                            <HeroChip name="Death Knight" />
                            <HeroChip name="Snow Queen" />
                            <HeroChip name="Tracker" />
                        </div>
                    </div>

                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-pink-300 mb-2">Stage 6-12 Elite (Rose Knight) :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Snow Queen" />
                            <HeroChip name="Scarlet Bolt" />
                            <HeroChip name="Oath Keeper" />
                            <HeroChip name="Night Raven" />
                            <HeroChip name="Prima Donna" />
                        </div>
                        <p className="text-sm text-slate-400 mt-2">Ce stage demande plus de contrôle / burst physique.</p>
                    </div>
                </div>
            </div>

            {/* Chapter 7 */}
            <div className="my-6 rounded-lg border border-slate-600 bg-slate-900/50 p-5">
                <h3 className="mt-0 flex items-center gap-2">
                    <span className="text-2xl">📖</span>
                    Chapitre 7 – <em>Way of Fire</em>
                </h3>
                <p className="text-slate-300">
                    Les guides récents recommandent énormément la combinaison Rose Knight + Child of Light + Prima Donna.
                </p>

                <div className="mt-4 space-y-3">
                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-amber-300 mb-2">Équipe polyvalente :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Prima Donna" />
                            <HeroChip name="Rose Knight" />
                            <HeroChip name="Child of Light" />
                            <HeroChip name="Snow Queen" />
                            <HeroChip name="Tracker" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapter 8 */}
            <div className="my-6 rounded-lg border border-slate-600 bg-slate-900/50 p-5">
                <h3 className="mt-0 flex items-center gap-2">
                    <span className="text-2xl">📖</span>
                    Chapitre 8 – <em>Goddess' Trial</em>
                </h3>
                <p className="text-slate-300">
                    Les compos tournent souvent autour du trio Prima Donna + Rose Knight + Tracker.
                </p>

                <div className="mt-4 space-y-3">
                    <div className="rounded-lg bg-slate-800 p-3">
                        <p className="font-semibold text-amber-300 mb-2">Équipe très utilisée :</p>
                        <div className="flex flex-wrap gap-2">
                            <HeroChip name="Prima Donna" />
                            <HeroChip name="Demon Slayer" />
                            <HeroChip name="Rose Knight" />
                            <HeroChip name="Snow Queen" />
                            <HeroChip name="Tracker" />
                        </div>
                    </div>
                </div>
            </div>

            <h2>5. Challenge Stages : principe & stratégies</h2>
            <p>
                Les <strong>Challenges</strong> réutilisent les mêmes chapitres (1 à 8) mais avec des contraintes spécifiques qui compliquent sérieusement la tâche.
            </p>

            <div className="my-6 rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <h3 className="mt-0 text-lg font-semibold text-orange-300">⚠️ Types de contraintes</h3>
                <ul className="mt-2 space-y-1">
                    <li>Héros <strong>imposés ou interdits</strong></li>
                    <li>Temps <strong>limité</strong></li>
                    <li>Nombre de <strong>morts maximum</strong></li>
                    <li>Héros d'un <strong>certain type uniquement</strong> (Inf / Cav / Dist)</li>
                    <li>Et bien d'autres combinaisons...</li>
                </ul>
            </div>

            <h3>Archétypes de compos F2P pour Challenges</h3>
            <p>Voici quelques équipes de base à adapter selon les restrictions du challenge :</p>

            <div className="grid gap-4 my-6">
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4">
                    <h4 className="mt-0 text-red-300">⚡ Team "Burst Boss"</h4>
                    <p className="text-sm text-slate-300 mb-3">Pour tuer le boss rapidement</p>
                    <div className="flex flex-wrap gap-2">
                        <HeroChip name="Child of Light" />
                        <HeroChip name="Prima Donna" />
                        <HeroChip name="Tracker" />
                        <HeroChip name="Black Crow" />
                        <HeroChip name="Incinerator" />
                    </div>
                </div>

                <div className="rounded-lg border border-purple-500/40 bg-purple-500/10 p-4">
                    <h4 className="mt-0 text-purple-300">🔮 Team "Magique Contrôle"</h4>
                    <p className="text-sm text-slate-300 mb-3">Pour contrôler le terrain avec magie</p>
                    <div className="flex flex-wrap gap-2">
                        <HeroChip name="Rose Knight" />
                        <HeroChip name="Death Knight" />
                        <HeroChip name="Prima Donna" />
                        <HeroChip name="Incinerator" />
                        <HeroChip name="Snow Queen" />
                    </div>
                </div>

                <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
                    <h4 className="mt-0 text-amber-300">🗡️ Team "Assassins"</h4>
                    <p className="text-sm text-slate-300 mb-3">Pour découper le backline très vite</p>
                    <div className="flex flex-wrap gap-2">
                        <HeroChip name="Rose Knight" />
                        <HeroChip name="Prima Donna" />
                        <HeroChip name="Demon Slayer" />
                        <HeroChip name="Night Raven" />
                        <HeroChip name="Tracker" />
                    </div>
                </div>
            </div>

            <blockquote className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4 not-italic">
                <p className="m-0 text-yellow-200">
                    <strong>Astuce clé :</strong> Gérer le contrôle (stuns / gels), protéger Prima Donna et
                    <strong> focus le boss</strong> dès que possible sont les piliers de la réussite en Challenge.
                </p>
            </blockquote>

            <h2>6. Tableaux de compositions par mode</h2>
            <p>
                Pour chaque stage spécifique, tu peux consulter les tableaux détaillés ci-dessous.
                Ils montrent les compositions optimales par stage avec l'ordre de placement des héros.
            </p>

            {/* Elite Mode Chapters */}
            <h3 className="mt-8">Mode Elite (Boss Stages)</h3>
            <p className="text-slate-400 text-sm mb-4">
                6 boss stages par chapitre : 3, 6, 9, 12, 15, 18
            </p>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((chapter) => (
                    <StageTable
                        key={`elite-${chapter}`}
                        chapterNumber={chapter}
                        stages={eliteStages[chapter]}
                        mode="elite"
                    />
                ))}
            </div>

            {/* Challenge Mode Chapters */}
            <h3 className="mt-8">Mode Challenge (Tous les stages)</h3>
            <p className="text-slate-400 text-sm mb-4">
                18 stages par chapitre avec contraintes spécifiques
            </p>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((chapter) => (
                    <StageTable
                        key={`challenge-${chapter}`}
                        chapterNumber={chapter}
                        stages={challengeStages[chapter]}
                        mode="challenge"
                    />
                ))}
            </div>

            <h2>7. Astuces générales pour réussir</h2>
            <div className="space-y-4 my-6">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mt-0 flex items-center gap-2">
                        <span>🎯</span>
                        <span>Ne pas tout mettre en auto-battle</span>
                    </h4>
                    <p className="text-slate-300 text-sm">
                        Sur les stages difficiles, désactive l'auto et utilise manuellement tes compétences de héros
                        au bon moment (surtout les stuns et les soins).
                    </p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mt-0 flex items-center gap-2">
                        <span>💥</span>
                        <span>Focus le boss en premier</span>
                    </h4>
                    <p className="text-slate-300 text-sm">
                        Dans beaucoup de stages, éliminer le boss rapidement est la clé.
                        Utilise tes DPS mono-cible (Tracker, Night Raven) pour le burst down.
                    </p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mt-0 flex items-center gap-2">
                        <span>⚡</span>
                        <span>Timing des stuns</span>
                    </h4>
                    <p className="text-slate-300 text-sm">
                        Un bon stun au bon moment peut sauver ton équipe.
                        Apprends à anticiper les ultimates ennemis et stun juste avant.
                    </p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mt-0 flex items-center gap-2">
                        <span>📈</span>
                        <span>Monte tes héros progressivement</span>
                    </h4>
                    <p className="text-slate-300 text-sm">
                        Si tu bloques sur un stage, c'est souvent que tes héros manquent de niveau,
                        de grade ou d'équipement. Farm les stages précédents pour monter tes stats.
                    </p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mt-0 flex items-center gap-2">
                        <span>🛡️</span>
                        <span>Protège Prima Donna</span>
                    </h4>
                    <p className="text-slate-300 text-sm">
                        Ta survie dépend de ton healer. Place toujours Prima Donna en position arrière
                        et utilise des tanks solides devant pour encaisser les dégâts.
                    </p>
                </div>
            </div>

            <div className="my-8 rounded-lg border border-amber-500/40 bg-amber-500/10 p-5">
                <h3 className="mt-0 text-amber-300">🎉 Bon courage !</h3>
                <p className="text-slate-200">
                    Les stages de héros demandent de la patience et de la stratégie, mais les récompenses en valent
                    largement la peine. N'hésite pas à expérimenter avec différentes compositions et à remplir
                    les tableaux ci-dessus au fur et à mesure de tes découvertes.
                </p>
                <p className="text-slate-200 mb-0">
                    Concentre-toi d'abord sur <strong>monter tes héros F2P prioritaires</strong> (Rose Knight,
                    Prima Donna, Tracker, Snow Queen, Child of Light) et tu pourras passer tous les modes !
                </p>
            </div>
        </article>
    );
}
