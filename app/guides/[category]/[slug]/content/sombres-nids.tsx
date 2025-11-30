import React from 'react';
import Image from 'next/image';

export function SombresNidsContent() {
    return (
        <article className="prose-lm">
            <h2>Sombres nids : le meilleur entraînement ralliement</h2>
            <p>
                Les sombres nids sont <strong>des forts PvE attaquables uniquement en ralliement</strong> (au moins 2 joueurs).
                Ils donnent des <strong>Essences Noires</strong> (Niv. 1 à 25, qualité blanche → or), utilisées pour le laboratoire.
            </p>

            <div className="my-6 rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-4">
                <h3 className="mt-0 text-lg font-semibold text-indigo-300">👉 Pourquoi commencer par là ?</h3>
                <ul className="mt-2 space-y-1">
                    <li>Espionner / attaquer un sombre nid <strong>ne casse pas ton bouclier</strong> et <strong>n'active pas la fureur</strong>.</li>
                    <li><strong>Tu ne perds pas de troupes</strong> : seulement ~1% part à l'infirmerie, le reste rentre au château.</li>
                    <li>C'est parfait pour apprendre les <strong>ralliements de guerre</strong> sans risque.</li>
                </ul>
            </div>

            <h2>1. Lire le rapport d'espionnage</h2>
            <ol>
                <li><strong>Espionne toujours</strong> le nid avant de lancer.</li>
                <li>
                    Regarde :
                    <ul className="mt-1 list-disc pl-5">
                        <li><strong>Niveau d'Essence Noire</strong> → détermine la vraie difficulté (plus important que le nombre de troupes).</li>
                        <li><strong>Type(s) de troupes</strong> présentes.</li>
                        <li>Les <strong>leaders</strong> (héros de défense) : ils indiquent le <strong>type de troupes principal</strong> du nid.</li>
                    </ul>
                </li>
            </ol>
            <p>
                L'idée : identifier <strong>le type dominant</strong> et envoyer <strong>ce qui le contre</strong>.
            </p>

            {/* Spy Report Screenshot */}
            <div className="my-6 flex justify-center">
                <div className="relative w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50">
                    <Image
                        src="/nids/rapport-espionnage-nid.png"
                        alt="Exemple de rapport d'espionnage d'un sombre nid"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <h2>2. Rappel des contres</h2>
            <p>Schéma simple :</p>
            <ul className="list-none space-y-2 pl-0">
                <li className="flex items-center gap-2">
                    <span className="font-bold text-red-400">Infanterie</span>
                    <span>&gt;</span>
                    <span className="text-green-400">Distance</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="font-bold text-green-400">Distance</span>
                    <span>&gt;</span>
                    <span className="text-blue-400">Cavalerie</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="font-bold text-blue-400">Cavalerie</span>
                    <span>&gt;</span>
                    <span className="text-red-400">Infanterie</span>
                </li>
            </ul>

            {/* Troop Counters Diagram */}
            <div className="my-6 flex justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50">
                    <Image
                        src="/nids/troop-counters.png"
                        alt="Diagramme des contres de troupes : Infanterie > Distance > Cavalerie > Infanterie"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <p>Les engins de siège ne servent quasiment à rien sur les sombres nids : oublie-les.</p>

            <h2>3. Choisir la bonne phalange</h2>
            <p>Tu dois <strong>adapter ta phalange</strong> à la composition que tu envoie sur le sombre nid :</p>
            <ul>
                <li>Si le nid est en majorité <strong>Infanterie</strong> → tu veux frapper avec <strong>Cavalerie</strong>.</li>
                <li>S'il est en majorité <strong>Cavalerie</strong> → tu veux frapper avec <strong>Distance</strong>.</li>
                <li>S'il est en majorité <strong>Distance</strong> → tu veux frapper avec <strong>Infanterie</strong>.</li>
            </ul>
            <blockquote className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4 not-italic">
                <p className="m-0 text-yellow-200">
                    Ne te contente pas d'envoyer le bon type de troupes : <strong>mets aussi la phalange correspondante</strong> dans ta formation d'armée.
                </p>
            </blockquote>

            <h2>4. Quel type de troupes envoyer ?</h2>

            <h3>a) Nids avec <strong>1 seul type de troupe</strong> (rare)</h3>
            <p>Facile : <strong>full contre</strong>.</p>
            <ul>
                <li>Nid full Infanterie → tu envoies <strong>full Cavalerie</strong>.</li>
                <li>Nid full Cavalerie → <strong>full Distance</strong>.</li>
                <li>Nid full Distance → <strong>full Infanterie</strong>.</li>
            </ul>
            <p>Toujours avec <strong>4–5 héros</strong> qui boostent ce type de troupes et <strong>0 siège</strong>.</p>

            <h3>b) Nids avec <strong>2 types de troupes</strong></h3>
            <p>Objectif : <strong>choisir un type qui a un avantage mais aucun gros désavantage</strong>.</p>
            <ul>
                <li>
                    Nid <strong>Infanterie + Cavalerie</strong> → tu envoies <strong>Cavalerie</strong><br />
                    <span className="text-sm text-slate-400">(Cav &gt; Inf, et Cav n'est pas faible contre Cav).</span>
                </li>
                <li>
                    Nid <strong>Infanterie + Distance</strong> → tu envoies <strong>Infanterie</strong><br />
                    <span className="text-sm text-slate-400">(Inf &gt; Dist, et Inf n'est pas faible contre Inf).</span>
                </li>
                <li>
                    Nid <strong>Cavalerie + Distance</strong> → tu envoies <strong>Distance</strong><br />
                    <span className="text-sm text-slate-400">(Dist &gt; Cav, et Dist n'est pas faible contre Dist).</span>
                </li>
            </ul>
            <p>Tu restes <strong>sur un seul type principal</strong> + un peu d'une autre troupe pour les héros (voir plus bas).</p>

            <h3>c) Nids avec <strong>3 types de troupes</strong></h3>
            <p>Envoyer les <strong>3 types</strong> est une fausse bonne idée.</p>
            <p>
                Pourquoi ? Les combats se jouent au <strong>moral</strong> : le premier à tomber à 0 perd. En général, ton <strong>premier front</strong> tombe au moral avant d'être complètement détruit, donc <strong>ta 2ᵉ ligne ne sert presque jamais</strong>.
            </p>
            <p>Donc :</p>
            <ul>
                <li>En <strong>Phalange Infanterie</strong> : → ton front est <strong>Infanterie</strong>, la Cavalerie derrière ne sert quasi pas.</li>
                <li>En <strong>Phalange Cavalerie</strong> : → ton front est <strong>Cavalerie</strong>, l'Infanterie derrière ne sert quasi pas.</li>
            </ul>
            <p>Par contre, les <strong>archers / distance</strong> tirent <strong>par-dessus</strong> et restent utiles, même en 2ᵉ ligne.</p>

            <div className="rounded-lg bg-slate-800 p-4">
                <p className="font-semibold text-white">👉 Deux options efficaces :</p>
                <ul className="mt-2">
                    <li><strong>Phalange Infanterie</strong> → compo <strong>Infanterie + Distance</strong></li>
                    <li><strong>Phalange Cavalerie</strong> → compo <strong>Cavalerie + Distance</strong></li>
                </ul>
                <p className="mt-2 text-sm text-slate-400">Toujours <strong>sans siège</strong>, sauf cas particulier demandé par la guilde.</p>
            </div>

            <h2>5. Héros pour les sombres nids</h2>

            <h3>5.1 Règles importantes</h3>
            <ul>
                <li>Ton <strong>héros principal (leader)</strong> doit être envoyé à chaque ralliement, sinon <strong>aucun de tes bonus d'équipement et de talents n'est appliqué</strong>.</li>
                <li><strong>5 héros du même type</strong> : → seulement <strong>4</strong> sont réellement considérés comme deployés niveau boost.</li>
                <li>Un héros <strong>sans troupes correspondantes</strong> (ex : héros cavalerie mais tu n'envoies pas de cav) est <strong>considéré comme non déployé</strong> → son boost ne s'applique pas.</li>
                <li>Chaque héros <strong>rang 8</strong> augmente ta capacité d'envoi de <strong>10 000 troupes</strong> → 200k de base + 5×10k = <strong>250k max</strong>.</li>
            </ul>

            <h3>5.2 Héros à choisir</h3>
            <p>Tu adaptes ton set de héros au <strong>type principal envoyé</strong> :</p>
            <ul>
                <li>Pour un ralliement <strong>Infanterie</strong> → 3–4 héros infanterie + 1–2 autres.</li>
                <li>Pour un ralliement <strong>Cavalerie</strong> → 3–4 héros cavalerie + 1–2 autres.</li>
                <li>Pour un ralliement <strong>Distance</strong> → 3–4 héros distance + 1–2 autres.</li>
            </ul>

            <div className="my-6 rounded-lg border-l-4 border-indigo-500 bg-slate-800 p-4">
                <p className="font-bold text-white">Exemple de héros à choisir en plus de ton type principal</p>
                <p className="font-bold text-white">Le Gobelin</p>
                <p className="text-slate-300">
                    Il donne un <strong>boost d'ATT armée</strong>. Il doit être dans quasiment toutes les compositions.
                </p>
                <div className="mt-2 flex items-center gap-2 text-yellow-400">
                    <span>⚠️</span>
                    <span className="text-sm">
                        Pour l'activer, il faut <strong>au moins quelques troupes de distance</strong> : <strong>envoie ~50 archers</strong>, pas 50 000, juste de quoi déclencher son bonus.
                    </span>
                </div>
            </div>

            <h2>6. Talents & équipement avant de lancer</h2>
            <p>Avant tout ralliement sombre nid :</p>
            <ol>
                <li><strong>Équipe ton set d'attaque</strong> (voir ta page Équipement).</li>
                <li>
                    Mets tes <strong>talents militaires</strong> (voir page Talents) en priorité sur l'<strong>armée</strong> :
                    <ul className="mt-1 list-disc pl-5">
                        <li>Attaque armée I : 5/5</li>
                        <li>PV armée I : 15/15</li>
                        <li>PV armée II : 50/50</li>
                    </ul>
                </li>
            </ol>
            <p>Le reste → sur ta <strong>spécialité principale</strong> (Inf / Cav / Dist selon ton compte).</p>

            <h2>7. Lancer un ralliement sombre nid (leader)</h2>
            <p>Le lanceur doit :</p>
            <ol>
                <li>
                    Choisir :
                    <ul className="mt-1 list-disc pl-5">
                        <li><strong>Phalange / rangée</strong> adaptée au nid.</li>
                        <li><strong>Type de troupes principal</strong> (Inf / Cav / Dist).</li>
                        <li><strong>2ᵉ type éventuel</strong> (souvent Distance).</li>
                    </ul>
                </li>
                <li>
                    Mettre :
                    <ul className="mt-1 list-disc pl-5">
                        <li><strong>3–4 héros</strong> dédiés au type principal.</li>
                        <li><strong>1–2 héros</strong> "armée" (ex : Gobelin).</li>
                    </ul>
                </li>
                <li>
                    Composer son armée :
                    <ul className="mt-1 list-disc pl-5">
                        <li>1 ou 2 types de troupes max.</li>
                        <li><strong>Toujours 50 troupes</strong> des 2 autres types pour activer les héros / phalange.</li>
                        <li><strong>Pas de siège</strong> (sauf demande spécifique).</li>
                    </ul>
                </li>
            </ol>

            <div className="my-4 rounded-md bg-slate-900 p-4 font-mono text-sm text-green-400">
                <p className="mb-2 font-bold text-slate-400">// Exemple d'annonce guilde :</p>
                <p>Si le leader tape : <strong>Nid 4 – Essence 14 – FULL CAVALERIE</strong></p>
                <p>Il faut composer une compo avec <strong>que des distances</strong> + quelques troupes pour activer les héros.</p>
            </div>

            <h2>8. Rejoindre un ralliement (participants)</h2>
            <p>Quand tu rejoins :</p>
            <ul>
                <li>
                    <strong>Respecte la demande du lanceur</strong> :
                    <ul className="mt-1 list-disc pl-5">
                        <li>Si c'est "FULL CAVALERIE", tu envoies <strong>que de la cavalerie</strong> (avec quelques troupes pour héros si besoin).</li>
                    </ul>
                </li>
                <li><strong>Pas de siège</strong> si ce n'est pas demandé, ça dilue les bonus.</li>
            </ul>
            <p>L'objectif est d'avoir un <strong>ralliement homogène</strong> : tout le monde dans la même logique.</p>

            <h2>9. Rappels Phalanges & Rangées</h2>

            <h3>Phalanges (1 vague principale)</h3>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded border border-slate-700 bg-slate-800 p-3">
                    <h4 className="mt-0 text-center text-red-400">Phalange Infanterie</h4>
                    <ol className="list-decimal pl-4 text-sm">
                        <li>Infanterie</li>
                        <li>Cavalerie</li>
                        <li>Distance → puis siège</li>
                    </ol>
                </div>
                <div className="rounded border border-slate-700 bg-slate-800 p-3">
                    <h4 className="mt-0 text-center text-blue-400">Phalange Cavalerie</h4>
                    <ol className="list-decimal pl-4 text-sm">
                        <li>Cavalerie</li>
                        <li>Distance</li>
                        <li>Infanterie → puis siège</li>
                    </ol>
                </div>
                <div className="rounded border border-slate-700 bg-slate-800 p-3">
                    <h4 className="mt-0 text-center text-green-400">Phalange Distance</h4>
                    <ol className="list-decimal pl-4 text-sm">
                        <li>Distance</li>
                        <li>Infanterie</li>
                        <li>Cavalerie → puis siège</li>
                    </ol>
                </div>
            </div>

            <h3>Rangées (attaque en 2 vagues, plus safe)</h3>
            <ul>
                <li><strong>Rangée Infanterie</strong> : Infanterie → Distance → Cavalerie</li>
                <li><strong>Rangée Distance</strong> : Distance → Cavalerie → Infanterie</li>
                <li><strong>Rangée Cavalerie</strong> : Cavalerie → Infanterie → Distance</li>
            </ul>
            <p>
                Les rangées offrent souvent <strong>moins de pertes</strong> et plus de dégâts sur le long combat,
                mais pour les sombres nids, on utilise surtout les <strong>phalanges</strong> pour simplifier.
            </p>

            {/* Phalanx & Row Formations Diagram */}
            <div className="my-6 flex justify-center">
                <div className="relative w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50">
                    <Image
                        src="/nids/formations-phalanges.png"
                        alt="Diagramme des formations : Phalanges et Rangées"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </article>
    );
}
