import { Hero } from '@/components/Hero';
import { GuideCard } from '@/components/GuideCard';
import { Button } from '@/components/ui/Button';
import { guides } from '@/data/guides';
import { TOOLS } from '@/data/tools';
import { Card } from '@/components/ui/Card';

export default function Home() {
  // Select a few guides for the homepage
  const tutoGuides = guides.filter(g => g.category === 'tuto').slice(0, 3);
  const eventGuides = guides.filter(g => g.category === 'evenements').slice(0, 3);
  const featuredTools = TOOLS.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />

      {/* Guides Tuto Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Guides Tutoriels</h2>
            <p className="mt-2 text-gray-400">Maîtrisez les bases et perfectionnez votre jeu.</p>
          </div>
          <Button href="/guides/tuto" variant="outline" className="hidden sm:inline-flex">
            Voir tous les tutos
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutoGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="/guides/tuto" variant="outline" className="w-full">
            Voir tous les tutos
          </Button>
        </div>
      </section>

      {/* Guides Events Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Guides Événements</h2>
            <p className="mt-2 text-gray-400">Préparez-vous pour les événements majeurs.</p>
          </div>
          <Button href="/guides/evenements" variant="outline" className="hidden sm:inline-flex">
            Voir tous les événements
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="/guides/evenements" variant="outline" className="w-full">
            Voir tous les événements
          </Button>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Outils Pratiques</h2>
            <p className="mt-2 text-gray-400">Calculateurs et simulateurs pour optimiser votre progression.</p>
          </div>
          <Button href="/outils" variant="outline" className="hidden sm:inline-flex">
            Voir tous les outils
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Card
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/outils/${tool.slug}`}
              className="bg-gray-800"
              footer={
                <div className="flex items-center text-indigo-400">
                  <span className="mr-2 text-xl">{tool.icon}</span>
                  <span className="text-sm font-medium">Accéder à l'outil</span>
                </div>
              }
            />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="/outils" variant="outline" className="w-full">
            Voir tous les outils
          </Button>
        </div>
      </section>
    </div>
  );
}

