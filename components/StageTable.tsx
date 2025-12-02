// components/StageTable.tsx
import Image from 'next/image';
import { getHeroImage, getHeroNameFr } from '@/data/heroes';
import type { StageComposition } from '@/data/heroStages';

type StageTableProps = {
    chapterNumber: number;
    stages: StageComposition[];
    mode: 'normal' | 'elite' | 'challenge';
};

const modeColors = {
    normal: {
        bg: 'bg-emerald-900/30',
        border: 'border-emerald-600/40',
        header: 'bg-emerald-800',
        text: 'text-emerald-300',
    },
    elite: {
        bg: 'bg-blue-900/30',
        border: 'border-blue-600/40',
        header: 'bg-blue-800',
        text: 'text-blue-300',
    },
    challenge: {
        bg: 'bg-purple-900/30',
        border: 'border-purple-600/40',
        header: 'bg-purple-800',
        text: 'text-purple-300',
    },
};

const modeLabels = {
    normal: 'Normal',
    elite: 'Elite',
    challenge: 'Challenge',
};

export function StageTable({ chapterNumber, stages, mode }: StageTableProps) {
    const colors = modeColors[mode];
    const label = modeLabels[mode];

    return (
        <div className={`my-6 rounded-lg border ${colors.border} ${colors.bg} p-4`}>
            <h3 className={`mt-0 mb-4 text-center font-bold ${colors.text}`}>
                Chapitre {chapterNumber} – {label}
            </h3>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-center text-sm">
                    <thead>
                        <tr className={`${colors.header} text-white`}>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Stage</th>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Héros 1</th>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Héros 2</th>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Héros 3</th>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Héros 4</th>
                            <th className="border border-slate-600 px-3 py-2 font-semibold">Héros 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stages.map((stageData) => (
                            <tr key={stageData.stage} data-stage={stageData.stage} className="hover:bg-slate-700/30 transition-colors">
                                <td className="border border-slate-600 px-3 py-2 font-semibold text-slate-200">
                                    {stageData.stage}
                                </td>
                                {Array.from({ length: 5 }).map((_, heroIndex) => {
                                    const heroName = stageData.heroes[heroIndex];

                                    return (
                                        <td key={heroIndex} className="border border-slate-600 px-2 py-2">
                                            {heroName ? (
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-amber-400/50 bg-slate-800">
                                                        <Image
                                                            src={getHeroImage(heroName)}
                                                            alt={getHeroNameFr(heroName)}
                                                            width={40}
                                                            height={40}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-[10px] text-slate-400 leading-tight text-center max-w-[60px]">
                                                        {getHeroNameFr(heroName)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="h-10 w-10 mx-auto rounded-lg border border-dashed border-slate-600 bg-slate-900/50" />
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
