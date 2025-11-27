import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    href: string;
    category?: string;
    level?: string;
    footer?: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    href,
    category,
    level,
    footer,
    className = '',
}) => {
    return (
        <Link href={href} className={`block group h-full ${className}`}>
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-500 transition-colors duration-200 h-full flex flex-col">
                {imageUrl && (
                    <div className="relative h-48 w-full bg-gray-800">
                        {/* Placeholder for real image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            {/* If we had real images we would use next/image here */}
                            <span className="text-4xl">🖼️</span>
                        </div>
                    </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        {category && (
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                                {category}
                            </span>
                        )}
                        {level && (
                            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                                {level}
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-400 text-sm mb-4 flex-1">
                            {description}
                        </p>
                    )}
                    {footer && (
                        <div className="mt-auto pt-4 border-t border-gray-800">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};
