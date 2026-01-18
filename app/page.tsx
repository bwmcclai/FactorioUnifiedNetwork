'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FactorioPanel } from '@/components/ui/factorio-panel';
import { ProgressBar } from '@/components/ui/progress-bar';
import { OperationCard, Operation } from '@/components/ui/operation-card';
import { OperationModal } from '@/components/ui/operation-modal';

const OPERATIONS: Operation[] = [
    {
        id: 'iron-rain',
        title: "OPERATION IRON RAIN",
        description: "Mass production initiative for iron plate stockpiling required for orbital expansion.",
        longDescription: "Intelligence suggests a supply shortage of basic construction materials. Central Command has authorized a double-credit incentive for all iron plate exports. We must establish a steady orbital flow to the space platform before the next launch window.",
        priority: "CRITICAL",
        timeRemaining: "48h 23m",
        progress: 67500000,
        maxProgress: 100000000,
        goal: "Goal: 100M Iron Plates",
        status: "active",
        planet: "Nauvis",
        requirements: ["100,000,000x Iron Plate", "Stability in Logistic Network", "Active Launch Pad"],
        rewards: ["500,000 Network Credits", "Nauvis Sector Rep +100", "Access to Bulk Loading Gantry"]
    },
    {
        id: 'molten-core',
        title: "OPERATION MOLTEN CORE",
        description: "Establish tungsten carbide production from lava processing in volcanic regions.",
        longDescription: "The extreme temperatures of Vulcanus provide a unique opportunity for heavy metal synthesis. By tapping into primary lava flows, we can extract rare earth elements and fuse them into high-density tungsten carbide for next-gen drills.",
        priority: "HIGH",
        timeRemaining: "72h 15m",
        progress: 2800000,
        maxProgress: 5000000,
        goal: "Goal: 5M Tungsten Carbide",
        status: "active",
        planet: "Vulcanus",
        requirements: ["Lava Processing Matrix", "5,000,000x Tungsten Carbide", "Heat-Resistant Logistic Units"],
        rewards: ["High-Temperature Tech Unlock", "Vulcanus Mining Rights", "1,000,000 Credits"]
    },
    {
        id: 'green-harvest',
        title: "OPERATION GREEN HARVEST",
        description: "Agricultural science expansion for bioflux derivatives and organic catalysts.",
        longDescription: "The swamp ecosystems of Gleba are teeming with specialized fungal life. We need to cultivate several million cubic meters of agricultural sludge to refine into organic catalysts, speeding up our chemical processing network globally.",
        priority: "MEDIUM",
        timeRemaining: "96h 00m",
        progress: 0,
        maxProgress: 10000000,
        goal: "Goal: 10M Agricultural Science",
        status: "upcoming",
        planet: "Gleba",
        requirements: ["Biolab Tier 2", "Organic Waste Treatment", "10,000,000x Agricultural Science Pack"],
        rewards: ["Bio-Catalyst Tech Pack", "Gleba Sector Rep +50", "Nutrient Paste Patent"]
    },
    {
        id: 'static-storm',
        title: "OPERATION STATIC STORM",
        description: "Electromagnetic scrap processing and holmium extraction from Fulgora thunderheads.",
        longDescription: "The lightning-ravaged plains of Fulgora contain immense amounts of ancient machinery scrap. By deploying EMP shielding and lightning rods, we can harvest holmium from the wreckage to propel our electronic circuit manufacturing into the next tier.",
        priority: "MEDIUM",
        timeRemaining: "120h 30m",
        progress: 0,
        maxProgress: 8000000,
        goal: "Goal: 8M Holmium Plates",
        status: "upcoming",
        planet: "Fulgora",
        requirements: ["Lightning Attenuator Network", "EM Shielding Mk3", "8,000,000x Holmium Plate"],
        rewards: ["Superconductor Blueprint", "Fulgora Scavenger Badge", "750,000 Credits"]
    }
];

export default function MissionControl() {
    const [selectedOp, setSelectedOp] = useState<Operation | null>(null);

    return (
        <div className="min-h-screen pb-24">
            <Header />

            {/* Main Dashboard */}
            <main className="container mx-auto px-4 py-8">
                {/* Major Operations Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8 border-b-2 border-factorio-orange pb-2">
                        <h2 className="text-2xl font-header text-yellow-beige flex items-center gap-3">
                            <span className="text-factorio-orange drop-shadow-[0_0_8px_rgba(207,124,0,0.5)]">⚡</span>
                            THEATER OF OPERATIONS
                        </h2>
                        <div className="text-[10px] font-mono text-off-white/40 uppercase tracking-widest">
                            Security Clearance: LEVEL 4 Verified
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {OPERATIONS.map((op) => (
                            <OperationCard
                                key={op.id}
                                operation={op}
                                onClick={setSelectedOp}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Production Overview */}
                    <FactorioPanel variant="raised">
                        <h3 className="text-lg font-header mb-6 border-b border-factorio-orange/30 pb-2">
                            📡 GLOBAL PRODUCTION TELEMETRY
                        </h3>
                        <div className="space-y-6">
                            <ProgressBar value={45000} max={50000} label="Iron Ore/min" />
                            <ProgressBar value={28000} max={35000} label="Copper Ore/min" />
                            <ProgressBar value={12000} max={15000} label="Coal/min" />
                            <ProgressBar value={8500} max={10000} label="Stone/min" />
                        </div>
                    </FactorioPanel>

                    <div className="space-y-8">
                        {/* Network Status */}
                        <FactorioPanel variant="raised">
                            <h3 className="text-lg font-header mb-4 border-b border-factorio-orange/30 pb-2 uppercase">
                                Network Metrics
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-inset-grey p-3 border border-bevel-dark">
                                    <span className="font-header text-yellow-beige text-xs uppercase opacity-60">Nodes</span>
                                    <div className="font-mono text-logic-green text-xl mt-1">1,247</div>
                                </div>
                                <div className="bg-inset-grey p-3 border border-bevel-dark">
                                    <span className="font-header text-yellow-beige text-xs uppercase opacity-60">Engineers</span>
                                    <div className="font-mono text-off-white text-xl mt-1">45,892</div>
                                </div>
                                <div className="bg-inset-grey p-3 border border-bevel-dark">
                                    <span className="font-header text-yellow-beige text-xs uppercase opacity-60">Daily Volume</span>
                                    <div className="font-mono text-factorio-orange text-xl mt-1">2.4B</div>
                                </div>
                                <div className="bg-inset-grey p-3 border border-bevel-dark">
                                    <span className="font-header text-yellow-beige text-xs uppercase opacity-60">Uptime</span>
                                    <div className="font-mono text-logic-green text-xl mt-1">99.9%</div>
                                </div>
                            </div>
                        </FactorioPanel>

                        {/* Recent Activity */}
                        <FactorioPanel variant="raised">
                            <h3 className="text-lg font-header mb-4 border-b border-factorio-orange/30 pb-2 uppercase">
                                System Journal
                            </h3>
                            <div className="bg-inset-grey p-3 font-mono text-[10px] space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar">
                                <div className="text-logic-green">[15:14:22] NODE-4521: EXPORT 5000x Iron Plates (+625 CR)</div>
                                <div className="text-yellow-beige">[15:14:18] NODE-1337: IMPORT 2000x Copper Wire (-160 CR)</div>
                                <div className="text-logic-green">[15:14:09] NODE-8842: EXPORT 150x Advanced Circuits (+1875 CR)</div>
                                <div className="text-off-white/40">[15:13:55] SYSTEM: Major Order progress synchronizing...</div>
                                <div className="text-logic-green">[15:13:47] NODE-2219: EXPORT 1000x Steel Plates (+4530 CR)</div>
                                <div className="text-yellow-beige">[15:13:32] NODE-7654: IMPORT 8000x Iron Ore (-1000 CR)</div>
                                <div className="text-danger-red border-l-2 border-danger-red pl-2 my-2 py-1 bg-danger-red/10 animate-pulse">
                                    [15:13:28] ALERT: Copper market volatility HIGH in Gleba Sector
                                </div>
                                <div className="text-logic-green">[15:13:15] NODE-3341: EXPORT 300x Green Science (+6750 CR)</div>
                            </div>
                        </FactorioPanel>
                    </div>
                </div>
            </main>

            {/* Operation Detail Modal */}
            <OperationModal
                operation={selectedOp}
                onClose={() => setSelectedOp(null)}
            />

            <Footer />
        </div>
    );
}
