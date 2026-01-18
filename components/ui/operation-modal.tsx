import React from 'react';
import { FactorioPanel } from './factorio-panel';
import { IndustrialButton } from './industrial-button';
import { ProgressBar } from './progress-bar';
import { X, MapPin, Clock, AlertTriangle, ChevronRight, Package, Trophy } from 'lucide-react';
import { Operation } from './operation-card';

interface OperationModalProps {
    operation: Operation | null;
    onClose: () => void;
}

export const OperationModal: React.FC<OperationModalProps> = ({ operation, onClose }) => {
    if (!operation) return null;

    const {
        title, description, longDescription, priority, status,
        planet, timeRemaining, progress, maxProgress, goal,
        requirements = [], rewards = []
    } = operation;

    const isActive = status === 'active';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl animate-in zoom-in-95 duration-200">
                <FactorioPanel variant="raised" className="relative !p-0 overflow-hidden border-4 border-factorio-orange">
                    {/* Header */}
                    <div className="bg-panel-grey border-b-2 border-bevel-dark p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-factorio-orange p-2 border-2 border-bevel-light shadow-raised">
                                <AlertTriangle size={24} className="text-bevel-dark" strokeWidth={3} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-header text-yellow-beige leading-none uppercase">
                                    {title}
                                </h2>
                                <div className="flex items-center gap-4 mt-1">
                                    <span className="text-logic-green font-mono text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-logic-green rounded-full animate-blink" />
                                        STATUS: {status.toUpperCase()}
                                    </span>
                                    <span className="text-off-white/60 font-mono text-xs flex items-center gap-1">
                                        <MapPin size={12} />
                                        PLANET: {planet.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-bevel-dark text-off-white transition-colors border-2 border-transparent hover:border-bevel-light"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Description */}
                        <div className="bg-inset-grey p-4 border-2 border-bevel-dark shadow-sunken">
                            <h4 className="text-factorio-orange font-header text-sm mb-2 uppercase flex items-center gap-2">
                                <ChevronRight size={16} /> Mission Intelligence
                            </h4>
                            <p className="text-off-white font-mono text-sm leading-relaxed italic">
                                "{longDescription || description}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Requirements */}
                            <div className="space-y-3">
                                <h4 className="text-yellow-beige font-header text-sm uppercase flex items-center gap-2">
                                    <Package size={16} /> Required Resources
                                </h4>
                                <div className="space-y-2">
                                    {(requirements.length > 0 ? requirements : ["Loading specialized logic...", "Awaiting logistics network update..."]).map((req, i) => (
                                        <div key={i} className="flex items-center justify-between bg-bevel-dark/40 p-2 border border-bevel-light/10">
                                            <span className="text-xs font-mono text-off-white">{req}</span>
                                            <div className="w-2 h-2 bg-yellow-600" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rewards */}
                            <div className="space-y-3">
                                <h4 className="text-logic-green font-header text-sm uppercase flex items-center gap-2">
                                    <Trophy size={16} /> Projected Rewards
                                </h4>
                                <div className="space-y-2">
                                    {(rewards.length > 0 ? rewards : ["25,000 Credits", "Reputation +50", "Unlock Technical Schematic"]).map((reward, i) => (
                                        <div key={i} className="flex items-center justify-between bg-bevel-dark/40 p-2 border border-bevel-light/10">
                                            <span className="text-xs font-mono text-logic-green">{reward}</span>
                                            <div className="w-2 h-2 bg-logic-green" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Progress Section */}
                        {isActive && (
                            <div className="bg-panel-grey border-2 border-bevel-dark p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-yellow-beige font-header text-sm uppercase">Stockpile Status</span>
                                    <span className="text-off-white font-mono text-xs">{timeRemaining} REMAINING</span>
                                </div>
                                <ProgressBar
                                    value={progress}
                                    max={maxProgress}
                                    label={goal}
                                />
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-panel-grey border-t-2 border-bevel-dark p-4 flex justify-end gap-3">
                        <IndustrialButton
                            variant="primary"
                            className="!py-2 !px-6"
                            onClick={onClose}
                        >
                            CLOSE LOG
                        </IndustrialButton>
                        {isActive && (
                            <IndustrialButton
                                variant="success"
                                className="!py-2 !px-6"
                                onClick={() => alert('Contribution logged to network.')}
                            >
                                CONTRIBUTE DATA
                            </IndustrialButton>
                        )}
                    </div>
                </FactorioPanel>
            </div>
        </div>
    );
};
