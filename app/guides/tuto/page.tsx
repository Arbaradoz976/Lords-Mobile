// app/guides/tuto/page.tsx
import { guides } from '@/data/guides';
import { GuideCard } from '@/components/GuideCard';

export default function GuidesTutoPage() {
    const tutos = guides.filter((g) => g.category === 'tuto');

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-50 mb-2">
                    Guides Tuto
                </h1>
                <p className="text-sm text-slate-300">
                    Les bases de Lords Mobile : chasse, talents, stuff, familiers, rally…
                </p>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tutos.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                ))}
            </section>
        </main>
    );
}
