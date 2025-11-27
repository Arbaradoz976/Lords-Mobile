import { notFound } from 'next/navigation';
import { GUIDES } from '@/data/guides';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export default async function GuideDetailPage({ params }: PageProps) {
    const { category, slug } = await params;
    const guide = GUIDES.find((g) => g.slug === slug && g.category === category);

    if (!guide) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <Link href={`/guides/${category}`} className="text-indigo-400 hover:text-indigo-300 mb-4 inline-block">
                    ← Retour aux guides {category === 'tuto' ? 'tuto' : 'événements'}
                </Link>
                <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-900 text-indigo-200 text-sm font-medium uppercase">
                        {guide.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">
                        {guide.level}
                    </span>
                    <span className="text-gray-500 text-sm">
                        ⏱️ {guide.readTime}
                    </span>
                </div>
                <h1 className="text-4xl font-extrabold text-white mb-6">{guide.title}</h1>
            </div>

            {/* Placeholder for Main Image */}
            <div className="w-full h-64 bg-gray-800 rounded-xl mb-12 flex items-center justify-center text-gray-600 text-5xl">
                🖼️
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="lead text-xl text-gray-300 mb-8">
                    {guide.summary}
                </p>

                {/* Mock Content Structure */}
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Table des matières</h2>
                    <ul className="space-y-2">
                        <li><a href="#introduction" className="text-indigo-400 hover:text-indigo-300">1. Introduction</a></li>
                        <li><a href="#basics" className="text-indigo-400 hover:text-indigo-300">2. Les bases</a></li>
                        <li><a href="#strategy" className="text-indigo-400 hover:text-indigo-300">3. Stratégie avancée</a></li>
                        <li><a href="#conclusion" className="text-indigo-400 hover:text-indigo-300">4. Conclusion</a></li>
                    </ul>
                </div>

                <h2 id="introduction" className="text-2xl font-bold text-white mt-12 mb-4">1. Introduction</h2>
                <p className="text-gray-400 mb-6">
                    [PLACEHOLDER] Ceci est une introduction générique pour le guide "{guide.title}".
                    Ici, nous expliquerons pourquoi ce sujet est important pour votre progression dans Lords Mobile.
                </p>

                <h2 id="basics" className="text-2xl font-bold text-white mt-12 mb-4">2. Les bases</h2>
                <p className="text-gray-400 mb-6">
                    [PLACEHOLDER] Explication des concepts fondamentaux.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-6">
                    <li>Point important numéro 1</li>
                    <li>Point important numéro 2</li>
                    <li>Point important numéro 3</li>
                </ul>

                <h2 id="strategy" className="text-2xl font-bold text-white mt-12 mb-4">3. Stratégie avancée</h2>
                <p className="text-gray-400 mb-6">
                    [PLACEHOLDER] Détails techniques et astuces pour les joueurs expérimentés.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden mb-6">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Option</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Avantage</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Inconvénient</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Choix A</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">Rapide</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">Coûteux</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Choix B</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">Économique</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">Lent</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 id="conclusion" className="text-2xl font-bold text-white mt-12 mb-4">4. Conclusion</h2>
                <p className="text-gray-400 mb-6">
                    [PLACEHOLDER] Résumé des points clés à retenir. N'oubliez pas de mettre en pratique ces conseils !
                </p>
            </div>
        </div>
    );
}
