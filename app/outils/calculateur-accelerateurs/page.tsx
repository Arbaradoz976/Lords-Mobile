'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type SpeedupDuration = '1m' | '5m' | '10m' | '15m' | '30m' | '60m' | '3h' | '8h' | '15h' | '24h' | '3d' | '7d' | '30d';

const DURATION_VALUES: Record<SpeedupDuration, number> = {
    '1m': 1,
    '5m': 5,
    '10m': 10,
    '15m': 15,
    '30m': 30,
    '60m': 60,
    '3h': 180,
    '8h': 480,
    '15h': 900,
    '24h': 1440,
    '3d': 4320,
    '7d': 10080,
    '30d': 43200,
};

const DURATION_LABELS: Record<SpeedupDuration, string> = {
    '1m': '1 min',
    '5m': '5 min',
    '10m': '10 min',
    '15m': '15 min',
    '30m': '30 min',
    '60m': '60 min',
    '3h': '3 h',
    '8h': '8 h',
    '15h': '15 h',
    '24h': '24 h',
    '3d': '3 j',
    '7d': '7 j',
    '30d': '30 j',
};

// Group durations for better UI layout
const GROUPS = {
    'Minutes': ['1m', '5m', '10m', '15m', '30m', '60m'] as SpeedupDuration[],
    'Heures': ['3h', '8h', '15h', '24h'] as SpeedupDuration[],
    'Jours': ['3d', '7d', '30d'] as SpeedupDuration[],
};

export default function AcceleratorCalculator() {
    const [stock, setStock] = useState<Record<SpeedupDuration, number>>({
        '1m': 0, '5m': 0, '10m': 0, '15m': 0, '30m': 0, '60m': 0,
        '3h': 0, '8h': 0, '15h': 0, '24h': 0,
        '3d': 0, '7d': 0, '30d': 0,
    });

    const handleChange = (duration: SpeedupDuration, value: string) => {
        const numValue = Math.max(0, parseInt(value) || 0);
        setStock(prev => ({ ...prev, [duration]: numValue }));
    };

    const calculateTotalMinutes = () => {
        return Object.entries(stock).reduce((total, [duration, quantity]) => {
            return total + (quantity * DURATION_VALUES[duration as SpeedupDuration]);
        }, 0);
    };

    const formatTotalTime = (totalMinutes: number) => {
        if (totalMinutes === 0) return '0 min';

        const days = Math.floor(totalMinutes / 1440);
        const hours = Math.floor((totalMinutes % 1440) / 60);
        const minutes = totalMinutes % 60;

        const parts = [];
        if (days > 0) parts.push(`${days}j`);
        if (hours > 0) parts.push(`${hours}h`);
        if (minutes > 0) parts.push(`${minutes}m`);

        return parts.join(' ');
    };

    const reset = () => {
        setStock({
            '1m': 0, '5m': 0, '10m': 0, '15m': 0, '30m': 0, '60m': 0,
            '3h': 0, '8h': 0, '15h': 0, '24h': 0,
            '3d': 0, '7d': 0, '30d': 0,
        });
    };

    const totalMinutes = calculateTotalMinutes();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Calculateur d'Accélérateurs</h1>
                <p className="text-gray-400">
                    Entrez la quantité de chaque accélérateur pour connaître le temps total disponible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Input Section */}
                <div className="lg:col-span-2 space-y-8">
                    {Object.entries(GROUPS).map(([groupName, durations]) => (
                        <div key={groupName} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                            <h3 className="text-lg font-medium text-indigo-400 mb-4">{groupName}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {durations.map((duration) => (
                                    <div key={duration}>
                                        <label className="block text-sm text-gray-400 mb-1">
                                            {DURATION_LABELS[duration]}
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={stock[duration] || ''}
                                            onChange={(e) => handleChange(duration, e.target.value)}
                                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end">
                        <Button variant="outline" onClick={reset}>
                            Réinitialiser
                        </Button>
                    </div>
                </div>

                {/* Result Section */}
                <div className="lg:col-span-1">
                    <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-4">Total</h3>
                        <div className="text-4xl font-extrabold text-indigo-400 mb-2">
                            {formatTotalTime(totalMinutes)}
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            soit {totalMinutes.toLocaleString()} minutes
                        </p>

                        <div className="space-y-2 text-sm text-gray-300 border-t border-indigo-500/30 pt-4">
                            <div className="flex justify-between">
                                <span>Jours :</span>
                                <span className="font-mono">{(totalMinutes / 1440).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Heures :</span>
                                <span className="font-mono">{(totalMinutes / 60).toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
