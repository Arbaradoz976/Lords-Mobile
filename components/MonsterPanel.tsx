// components/MonsterPanel.tsx
import Image from 'next/image';
import type { MonsterHunt } from '@/data/monsterHunt';
import { getHeroImage, getHeroNameFr } from '@/data/heroes';

type HeroChipProps = {
    name: string;
};

function HeroChip({ name }: HeroChipProps) {
    const nameFr = getHeroNameFr(name);

    return (
        <div className="flex items-center gap-1 rounded-xl border border-amber-300/60 bg-slate-900/90 px-2 py-1 shadow-md">
            <div className="h-9 w-9 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                    src={getHeroImage(name)}
                    alt={nameFr}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                />
            </div>
            <span className="text-[11px] font-medium text-slate-100">
                {nameFr}
            </span>
        </div>
    );
}

type Props = {
    monster: MonsterHunt;
    imageSrc: string;
    description?: string;
};

export function MonsterPanel({ monster, imageSrc, description }: Props) {
    return (
        <section className="mt-6 rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-4 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Monstre */}
                <div className="relative mx-auto h-40 w-40 flex-shrink-0 md:mx-0">
                    <div className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-500/20 blur-2xl" />
                    <Image
                        src={imageSrc}
                        alt={monster.nameFr}
                        fill
                        className="object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.9)]"
                    />
                </div>

                {/* Texte + compos */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-300 mb-1">
                        {monster.nameFr}
                    </h3>
                    {description && (
                        <p className="text-sm text-slate-200 mb-3">{description}</p>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                        {/* F2P */}
                        <div>
                            <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-1">
                                Composition F2P
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {monster.f2p.map((h) => (
                                    <HeroChip key={h} name={h} />
                                ))}
                            </div>
                        </div>

                        {/* P2P (si dispo) */}
                        {monster.p2p && (
                            <div>
                                <p className="text-xs font-semibold text-pink-300 uppercase tracking-wide mb-1">
                                    Composition P2P
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {monster.p2p.map((h) => (
                                        <HeroChip key={h} name={h} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
