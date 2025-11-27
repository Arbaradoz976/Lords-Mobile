import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                                LM Guides
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Accueil
                                </Link>
                                <Link href="/guides" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Guides
                                </Link>
                                <Link href="/outils" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Outils
                                </Link>
                                <Link href="/a-propos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    À propos
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </nav>
    );
};
