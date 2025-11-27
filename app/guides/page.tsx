import Link from 'next/link';

export default function GuidesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                    Guides Lords Mobile
                </h1>
                <p className="mt-4 text-xl text-gray-400">
                    Choisissez une catégorie pour commencer votre apprentissage.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link href="/guides/tuto" className="group relative block h-64 sm:h-80 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-6xl mb-4">📚</span>
                        <h2 className="text-3xl font-bold text-white mb-2">Guides Tuto</h2>
                        <p className="text-indigo-100">
                            Développement, héros, équipement, et mécaniques de jeu.
                        </p>
                    </div>
                </Link>

                <Link href="/guides/evenements" className="group relative block h-64 sm:h-80 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-700 mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-6xl mb-4">🏆</span>
                        <h2 className="text-3xl font-bold text-white mb-2">Guides Événements</h2>
                        <p className="text-purple-100">
                            Stratégies pour le KvK, l'Arène du Dragon, et le Guild Fest.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
