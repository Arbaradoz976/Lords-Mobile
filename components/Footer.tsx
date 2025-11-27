export const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Lords Mobile Guides & Outils.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Site non-officiel créé par un fan. Lords Mobile est une marque déposée de IGG.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Mentions légales
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
