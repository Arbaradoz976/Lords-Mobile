'use client';

import { useState } from 'react';
import { TalentBuild } from '@/data/talents';
import Image from 'next/image';

interface WarTalentsTabsProps {
    builds: TalentBuild[];
}

export function WarTalentsTabs({ builds }: WarTalentsTabsProps) {
    const [activeTabId, setActiveTabId] = useState<string>(builds[0]?.id || '');

    const activeBuild = builds.find((b) => b.id === activeTabId);

    if (!activeBuild) return null;

    return (
        <div className="my-8 bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex flex-wrap border-b border-slate-700/50">
                {builds.map((build) => (
                    <button
                        key={build.id}
                        onClick={() => setActiveTabId(build.id)}
                        className={`
              flex-1 px-4 py-3 text-sm font-medium transition-colors
              hover:bg-slate-800/50 focus:outline-none
              ${activeTabId === build.id
                                ? 'bg-slate-800 text-amber-400 border-b-2 border-amber-400'
                                : 'text-slate-400 hover:text-slate-200'
                            }
            `}
                    >
                        {build.name}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Image & Stats */}
                    <div className="space-y-6">
                        <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-xl">
                            {/* Placeholder for user screenshot */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900">
                                <span className="text-xs text-center px-4">
                                    Capture {activeBuild.name}<br />
                                    (Placez {activeBuild.imagePath} ici)
                                </span>
                            </div>
                            <Image
                                src={activeBuild.imagePath}
                                alt={`Talents ${activeBuild.name}`}
                                fill
                                className="object-cover"
                            />

                        </div>

                        {activeBuild.targetStats && (
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                                <h4 className="text-amber-400 text-sm font-bold uppercase mb-2">
                                    Stats Cibles
                                </h4>
                                <p className="text-sm text-slate-300">
                                    {activeBuild.targetStats}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Details */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {activeBuild.name}
                            </h3>
                            <p className="text-slate-300 italic">
                                {activeBuild.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-amber-400 text-sm font-bold uppercase mb-3">
                                Priorité des points
                            </h4>
                            <ul className="space-y-2">
                                {activeBuild.priorities.map((priority, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-slate-800 text-amber-500 text-xs font-bold border border-slate-700">
                                            {index + 1}
                                        </span>
                                        <span>{priority}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-700/50">
                            <h4 className="text-amber-400 text-sm font-bold uppercase mb-2">
                                Quand l&apos;utiliser ?
                            </h4>
                            <p className="text-sm text-slate-300">
                                {activeBuild.whenToUse}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
