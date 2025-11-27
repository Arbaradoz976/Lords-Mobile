// components/GuideCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Guide } from '@/data/guides';

type Props = { guide: Guide };

export function GuideCard({ guide }: Props) {
    return (
        <Link
            href={`/guides/${guide.category}/${guide.slug}`}
            className="group lm-card"
        >
            <div className="lm-card-header">
                <div className="lm-card-header-glow absolute inset-0" />
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 bg-slate-900/50">
                    <span className="text-4xl">🖼️</span>
                </div>
                <Image
                    src={guide.illustration}
                    alt={guide.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-0"
                />
                <div className="lm-badges">
                    <span className="lm-badge">
                        {guide.category === 'tuto' ? 'Tuto' : 'Événement'}
                    </span>
                    <span className="lm-badge lm-badge-primary">{guide.niveau}</span>
                </div>
            </div>

            <div className="lm-card-body">
                <h3 className="text-sm font-semibold text-slate-50 line-clamp-2">
                    {guide.titre}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3">
                    {guide.resume}
                </p>
                <span className="mt-2 text-xs font-semibold text-amber-300 group-hover:text-amber-200">
                    Voir le guide →
                </span>
            </div>
        </Link>
    );
}
