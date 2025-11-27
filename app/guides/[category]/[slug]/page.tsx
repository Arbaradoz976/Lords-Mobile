// app/guides/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { GuideCategory } from '@/data/guides';
import { guides } from '@/data/guides';
import { ChasseAuxMonstresContent } from './content/chasse-aux-monstres';

type Params = {
    category: GuideCategory;
    slug: string;
};

export function generateStaticParams() {
    return guides.map((g) => ({
        category: g.category,
        slug: g.slug,
    }));
}

export default async function GuideDetailPage({ params }: { params: Promise<Params> }) {
    const { category, slug } = await params;

    const guide = guides.find(
        (g) => g.category === category && g.slug === slug,
    );

    if (!guide) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl px-4 py-8 space-y-6">
            <header className="space-y-3">
                <div className="inline-flex gap-2 text-xs">
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-200">
                        {guide.category === 'tuto' ? 'Tuto' : 'Événement'}
                    </span>
                    <span className="rounded-full bg-indigo-600/80 px-2 py-0.5 text-slate-50">
                        {guide.niveau}
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-slate-50">
                    {guide.titre}
                </h1>
                <p className="text-sm text-slate-300">{guide.resume}</p>
            </header>

            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60">
                {/* Placeholder for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <span className="text-6xl">🖼️</span>
                </div>
                <Image
                    src={guide.illustration}
                    alt={guide.titre}
                    fill
                    className="object-cover opacity-0"
                />
            </div>

            {/* Guide Content - Conditional rendering based on slug */}
            {guide.slug === 'chasse-aux-monstres' ? (
                <ChasseAuxMonstresContent />
            ) : (
                <article className="prose prose-invert max-w-none prose-headings:text-slate-50 prose-p:text-slate-200 prose-li:text-slate-200">
                    <h2>Introduction</h2>
                    <p>
                        Ce guide est actuellement en version brouillon. Le texte détaillé
                        sera remplacé plus tard par le contenu fourni par l&apos;auteur du
                        site.
                    </p>

                    <h2>Résumé des points abordés</h2>
                    <ul>
                        <li>Concepts clés liés au thème du guide.</li>
                        <li>Conseils pratiques pour les joueurs de Lords Mobile.</li>
                        <li>Erreurs courantes à éviter.</li>
                    </ul>

                    <h2>Contenu à venir</h2>
                    <p>
                        Tu pourras ici structurer ton guide avec des sections (H2/H3), des
                        listes, des tableaux (ex : comparatif d&apos;équipements, de héros,
                        etc.). Pour l&apos;instant, cette page sert de squelette pour mettre
                        en place la navigation.
                    </p>
                </article>
            )}
        </main>
    );
}
