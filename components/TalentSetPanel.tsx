// components/TalentSetPanel.tsx
import Image from 'next/image';
import type { TalentBuild } from '@/data/talents';

type Props = {
    build: TalentBuild;
};

export function TalentSetPanel({ build }: Props) {
    const isEconomy = build.type === 'economy';
    const borderColor = isEconomy ? 'border-blue-500/40' : 'border-red-500/40';
    const glowColor = isEconomy ? 'bg-blue-500/20' : 'bg-red-500/20';
    const titleColor = isEconomy ? 'text-blue-300' : 'text-red-300';
    const labelColor = isEconomy ? 'text-blue-400' : 'text-orange-400';

    return (
        <section className={`mt-6 rounded-2xl border ${borderColor} bg-slate-950/80 p-5 shadow-xl`}>
            <div className="flex flex-col gap-4 lg:flex-row">
                {/* Image du talent set */}
                <div className="relative mx-auto h-96 w-80 flex-shrink-0 lg:mx-0">
                    <div className={`pointer-events-none absolute -inset-4 rounded-2xl ${glowColor} blur-2xl`} />
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-700/50">
                        <Image
                            src={build.imagePath}
                            alt={build.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>
                        {build.name}
                    </h3>

                    <p className="text-slate-200 mb-4">
                        {build.description}
                    </p>

                    {build.targetStats && (
                        <div className="mb-4 rounded-lg bg-slate-900/60 p-3 border border-slate-700/50">
                            <p className="text-sm font-semibold text-amber-300">
                                Stats cibles : {build.targetStats}
                            </p>
                        </div>
                    )}

                    {/* Priorités */}
                    <div className="mb-4">
                        <h4 className={`text-sm font-bold ${labelColor} uppercase tracking-wide mb-2`}>
                            Priorité des talents
                        </h4>
                        <ul className="space-y-1">
                            {build.priorities.map((priority, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                                    <span>{priority}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quand utiliser */}
                    <div className="rounded-lg bg-slate-900/40 p-3 border border-slate-700/30">
                        <h4 className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-1">
                            Quand l'utiliser
                        </h4>
                        <p className="text-sm text-slate-300">
                            {build.whenToUse}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
