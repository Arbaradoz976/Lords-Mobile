import { Button } from '@/components/ui/Button';

export default function TrainingCalculator() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <span className="text-6xl mb-4 block">⚔️</span>
            <h1 className="text-3xl font-bold text-white mb-4">Calculateur d'Entraînement</h1>
            <p className="text-xl text-gray-400 mb-8">
                Cet outil est en cours de développement. Il vous permettra bientôt de calculer le coût en ressources et en temps pour entraîner vos troupes.
            </p>
            <Button href="/outils" variant="outline">
                Retour aux outils
            </Button>
        </div>
    );
}
