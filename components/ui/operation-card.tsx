import React from 'react';
import { ProgressBar } from './progress-bar';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';

export interface Operation {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    timeRemaining: string;
    progress: number;
    maxProgress: number;
    goal: string;
    status: 'active' | 'upcoming';
    planet: 'Vulcanus' | 'Gleba' | 'Fulgora' | 'Aquilo' | 'Nauvis';
    requirements?: string[];
    rewards?: string[];
}

interface OperationCardProps {
    operation: Operation;
    onClick: (op: Operation) => void;
}

const priorityGradients = {
    CRITICAL: 'from-yellow-600 to-yellow-700',
    HIGH: 'from-orange-600 to-orange-700',
    MEDIUM: 'from-blue-600 to-blue-700',
    LOW: 'from-gray-600 to-gray-700',
};

const planetColors = {
    Vulcanus: 'text-orange-900',
    Gleba: 'text-green-900',
    Fulgora: 'text-blue-900',
    Aquilo: 'text-cyan-900',
    Nauvis: 'text-yellow-900',
};

export const OperationCard: React.FC<OperationCardProps> = ({ operation, onClick }) => {
    const { title, description, priority, timeRemaining, progress, maxProgress, goal, status, planet } = operation;
    const isActive = status === 'active';

    return (
        <button
            onClick={() => onClick(operation)}
            className={`
        w-full text-left transition-all duration-150
        border-2 
        ${isActive
                    ? `bg-gradient-to-br ${priorityGradients[priority]} border-t-bevel-light border-l-bevel-light border-b-bevel-dark border-r-bevel-dark shadow-raised hover:brightness-110 active:shadow-sunken active:translate-y-[1px]`
                    : 'bg-inset-grey border-bevel-dark opacity-80 hover:opacity-100 hover:border-bevel-light'}
        p-3 relative group
      `}
        >
            {/* Status Tab */}
            <div className={`
        absolute top-0 right-3 px-2 py-0.5 text-[10px] font-header font-bold shadow-sm
        ${isActive ? 'bg-logic-green text-bevel-dark' : 'bg-bevel-dark text-gray-500'}
      `}>
                {isActive ? '● LIVE' : 'STAGED'}
            </div>

            <div className="flex items-start gap-2 mb-2">
                <div className={`mt-0.5 ${isActive ? 'text-bevel-dark' : 'text-factorio-orange'}`}>
                    <AlertTriangle size={20} strokeWidth={isActive ? 3 : 2} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-header font-bold leading-tight truncate ${isActive ? 'text-bevel-dark' : 'text-yellow-beige'}`}>
                        {title}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                        <MapPin size={10} className={isActive ? 'text-bevel-dark' : 'text-off-white'} />
                        <span className={`text-[10px] font-header uppercase tracking-wider ${isActive ? 'font-bold text-bevel-dark/80' : 'text-off-white/60'}`}>
                            {planet}
                        </span>
                    </div>
                </div>
            </div>

            <p className={`text-xs font-mono line-clamp-2 mb-3 leading-relaxed ${isActive ? 'text-bevel-dark/90 font-bold' : 'text-off-white/80'}`}>
                {description}
            </p>

            <div className={`flex items-center justify-between gap-2 text-[10px] font-mono ${isActive ? 'text-bevel-dark/80 font-bold' : 'text-gray-500'}`}>
                <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{timeRemaining}</span>
                </div>
                <div className="uppercase tracking-tighter">
                    PRIORITY: {priority}
                </div>
            </div>

            {isActive && (
                <div className="mt-3">
                    <div className="bg-bevel-dark h-5 relative overflow-hidden border border-bevel-light/20">
                        <div
                            className="striped-green h-full transition-all duration-500 ease-out"
                            style={{ width: `${Math.min((progress / maxProgress) * 100, 100)}%` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-yellow-beige text-[9px] font-mono font-bold drop-shadow-md">
                                {goal}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </button>
    );
};
