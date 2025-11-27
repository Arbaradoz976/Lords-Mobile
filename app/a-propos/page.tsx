export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800">
                <h1 className="text-3xl font-extrabold text-white mb-6">À propos</h1>

                <div className="prose prose-invert prose-lg">
                    <p>
                        Bienvenue sur <strong>Lords Mobile Guides & Outils</strong>, une ressource communautaire dédiée à aider les joueurs francophones à progresser dans le jeu.
                    </p>

                    <h3>Pourquoi ce site ?</h3>
                    <p>
                        Lords Mobile est un jeu complexe avec de nombreuses mécaniques. Il est parfois difficile de s'y retrouver entre les talents, les équipements, les événements et la gestion des ressources. Ce site a pour but de centraliser les informations essentielles et de fournir des outils pratiques pour faciliter la vie des joueurs.
                    </p>

                    <h3>Contenu</h3>
                    <ul>
                        <li><strong>Guides Tuto :</strong> Pour apprendre les bases et les subtilités du jeu.</li>
                        <li><strong>Guides Événements :</strong> Pour maximiser vos récompenses lors des événements temporaires.</li>
                        <li><strong>Outils :</strong> Des calculateurs et simulateurs pour optimiser votre compte.</li>
                    </ul>

                    <h3>Avertissement</h3>
                    <p className="text-sm text-gray-400">
                        Ce site est un projet fan-made et n'est pas affilié, sponsorisé ou approuvé par IGG. Toutes les images et noms de jeu sont la propriété de leurs détenteurs respectifs.
                    </p>

                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <p>
                            Vous avez une suggestion, une correction ou vous souhaitez contribuer ? N'hésitez pas à nous contacter (lien à venir).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
