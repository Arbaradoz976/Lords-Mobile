import { Card } from '@/components/ui/Card';
import { GUIDES } from '@/data/guides';

export default function EventGuidesPage() {
    const guides = GUIDES.filter(g => g.category === 'evenements');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-white mb-4">Guides Événements</h1>
                <p className="text-gray-400">
                    Optimisez vos scores et récompenses lors des événements majeurs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide) => (
                    <Card
                        key={guide.slug}
                        title={guide.title}
                        description={guide.summary}
                        imageUrl={guide.imageUrl}
                        category="Événement"
                        level={guide.level}
                        href={`/guides/evenements/${guide.slug}`}
                        footer={
                            <span className="text-sm text-gray-500">⏱️ {guide.readTime}</span>
                        }
                    />
                ))}
            </div>
        </div>
    );
}
