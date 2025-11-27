// components/MonsterPanel.tsx
import Image from 'next/image';

type Hero = {
    name: string;
    image: string; // chemin depuis /public, ex: "/heroes/tueur-de-demons.png"
};

type Props = {
    name: string;
    description: string;
    monsterImage: string; // ex: "/monsters/reine-des-abeilles.png"
    heroes: Hero[];
};

export function MonsterPanel({ name, description, monsterImage, heroes }: Props) {
    return (
        <section className="mt-6 rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-4 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Monstre */}
                <div className="relative mx-auto h-40 w-40 flex-shrink-0 md:mx-0">
                    <div className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-500/20 blur-2xl" />
                    <Image
                        src={monsterImage}
                        alt={name}
                        fill
                        className="object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.9)]"
                    />
                </div>

                {/* Texte + héros */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-300 mb-1">{name}</h3>
                    <p className="text-sm text-slate-200 mb-3">{description}</p>

                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                        Héros F2P conseillés
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {heroes.map((hero) => (
                            <div
                                key={hero.name}
                                className="flex items-center gap-1 rounded-xl border border-amber-300/60 bg-slate-900/90 px-2 py-1 shadow-md"
                            >
                                <div className="h-9 w-9 overflow-hidden rounded-lg">
                                    <Image
                                        src={hero.image}
                                        alt={hero.name}
                                        width={36}
                                        height={36}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <span className="text-[11px] font-medium text-slate-100">
                                    {hero.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
