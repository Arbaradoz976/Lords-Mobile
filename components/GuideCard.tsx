// components/GuideCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Guide } from '@/data/guides';

type Props = {
    guide: Guide;
};

export function GuideCard({ guide }: Props) {
    return (
        <Link
            href={`/guides/${guide.category}/${guide.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70 hover:bg-slate-900 transition-colors shadow-sm"
        >
            <div className="relative h-40 w-full overflow-hidden bg-gray-800">
                {/* Fallback for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <span className="text-4xl">🖼️</span>
                </div>
                {/* 
          Note: Since we don't have the actual images yet, I'm keeping the Image component 
          but adding a fallback background. When images are present, they will cover this.
        */}
                <Image
                    src={guide.illustration}
                    alt={guide.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100" // Hide image for now as they don't exist
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 pointer-events-none">
                    {/* Re-adding placeholder because the Image component will fail to load empty paths or non-existent files */}
                    <span className="text-4xl">🖼️</span>
                </div>

                <div className="absolute left-2 top-2 flex gap-2 text-xs z-10">
                    <span className="rounded-full bg-black/60 px-2 py-0.5 uppercase tracking-wide text-[10px] text-slate-100">
                        {guide.category === 'tuto' ? 'Tuto' : 'Événement'}
                    </span>
                    <span className="rounded-full bg-indigo-600/80 px-2 py-0.5 text-[10px] text-white">
                        {guide.niveau}
                    </span>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 p-3">
                <h3 className="text-sm font-semibold text-slate-50 line-clamp-2">
                    {guide.titre}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3">{guide.resume}</p>
                <span className="mt-auto pt-2 text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                    Voir le guide →
                </span>
            </div>
        </Link>
    );
}
