import { Card } from '@/components/ui/Card';
import { TOOLS } from '@/data/tools';

export default function ToolsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Outils Lords Mobile</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Une suite d'outils pour optimiser votre gestion de compte, calculer vos besoins et planifier votre développement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TOOLS.map((tool) => (
                    <Card
                        key={tool.slug}
                        title={tool.title}
                        description={tool.description}
                        href={`/outils/${tool.slug}`}
                        className="bg-gray-800 border-gray-700 hover:border-indigo-500"
                        footer={
                            <div className="flex items-center justify-between text-indigo-400">
                                <span className="text-3xl">{tool.icon}</span>
                                <span className="text-sm font-bold uppercase tracking-wide">Ouvrir</span>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
}
