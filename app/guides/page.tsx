// app/guides/page.tsx
import Link from 'next/link';

export default function GuidesHomePage() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-50">
                    Guides Lords Mobile
                </h1>
                <p className="text-slate-300 text-sm">
                    Tutos pour progresser étape par étape, et guides d&apos;événements
                    pour ne plus rater de récompenses.
                </p>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
                <Link
                    href="/guides/tuto"
                    className="rounded-2xl border border-white/5 bg-slate-900/70 p-5 hover:bg-slate-900 transition-colors"
                >
                    <h2 className="text-xl font-semibold text-slate-50 mb-2">
                        Guides Tuto
                    </h2>
                    <p className="text-sm text-slate-300 mb-3">
                        Bases du jeu, chasse, héros, stuff, familiers, rally… tout ce qu&apos;il
                        faut pour construire un compte solide.
                    </p>
                    <span className="text-sm font-medium text-indigo-400">
                        Voir les tutos →
                    </span>
                </Link>

                <Link
                    href="/guides/evenements"
                    className="rounded-2xl border border-white/5 bg-slate-900/70 p-5 hover:bg-slate-900 transition-colors"
                >
                    <h2 className="text-xl font-semibold text-slate-50 mb-2">
                        Guides Événements
                    </h2>
                    <p className="text-sm text-slate-300 mb-3">
                        Guild Fest, Arène Dragon, KvK, Épreuve de guilde… comment préparer
                        ta guilde et maximiser les récompenses.
                    </p>
                    <span className="text-sm font-medium text-indigo-400">
                        Voir les événements →
                    </span>
                </Link>
            </section>
        </main>
    );
}
