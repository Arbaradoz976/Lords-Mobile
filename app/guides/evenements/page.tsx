// app/guides/evenements/page.tsx
import { guides } from '@/data/guides';
import { GuideCard } from '@/components/GuideCard';

export default function GuidesEvenementsPage() {
    const events = guides.filter((g) => g.category === 'evenements');

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-50 mb-2">
                    Guides Événements
                </h1>
                <p className="text-sm text-slate-300">
                    Guild Fest, KvK, Arène Dragon, Épreuve de guilde : bien préparer ta
                    guilde pour chaque événement.
                </p>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                ))}
            </section>
        </main>
    );
}
