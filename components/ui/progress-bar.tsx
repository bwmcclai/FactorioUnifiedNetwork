import React from 'react';

interface ProgressBarProps {
    value: number;
    max: number;
    label?: string;
    showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    max,
    label,
    showPercentage = true
}) => {
    const percentage = Math.min((value / max) * 100, 100);

    return (
        <div className="w-full">
            {label && (
                <div className="flex justify-between mb-2">
                    <span className="text-yellow-beige font-header text-sm">{label}</span>
                    {showPercentage && (
                        <span className="text-off-white font-mono text-sm">
                            {percentage.toFixed(1)}%
                        </span>
                    )}
                </div>
            )}
            <div className="bg-bevel-dark border-2 border-inset-grey h-8 relative overflow-hidden">
                <div
                    className="striped-green h-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-yellow-beige font-mono font-bold text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {value.toLocaleString()} / {max.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};
