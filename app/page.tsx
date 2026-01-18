import { Header } from '@/components/layout/header';
import { FactorioPanel } from '@/components/ui/factorio-panel';
import { ProgressBar } from '@/components/ui/progress-bar';
import { TickerTape } from '@/components/ui/ticker-tape';
import { TICKER_ITEMS } from '@/lib/mock-data';
import { AlertTriangle } from 'lucide-react';

export default function MissionControl() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Major Order Banner */}
            <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 border-y-4 border-bevel-dark py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <AlertTriangle size={32} className="text-bevel-dark" strokeWidth={3} />
                        <div>
                            <h2 className="text-3xl font-header font-bold text-bevel-dark">
                                MAJOR ORDER: OPERATION IRON RAIN
                            </h2>
                            <p className="text-sm text-bevel-dark font-mono font-bold">
                                Priority: CRITICAL | Time Remaining: 48h 23m
                            </p>
                        </div>
                    </div>

                    <ProgressBar
                        value={67500000}
                        max={100000000}
                        label="Goal: 100M Iron Plates"
                    />
                </div>
            </div>

            {/* Ticker Tape */}
            <TickerTape items={TICKER_ITEMS} />

            {/* Main Dashboard */}
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Production Overview */}
                    <FactorioPanel variant="raised">
                        <h3 className="text-xl font-header mb-4 border-b-2 border-factorio-orange pb-2">
                            PRODUCTION OVERVIEW
                        </h3>
                        <div className="space-y-4">
                            <ProgressBar value={45000} max={50000} label="Iron Ore/min" />
                            <ProgressBar value={28000} max={35000} label="Copper Ore/min" />
                            <ProgressBar value={12000} max={15000} label="Coal/min" />
                            <ProgressBar value={8500} max={10000} label="Stone/min" />
                        </div>
                    </FactorioPanel>

                    {/* Network Status */}
                    <FactorioPanel variant="raised">
                        <h3 className="text-xl font-header mb-4 border-b-2 border-factorio-orange pb-2">
                            NETWORK STATUS
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-inset-grey p-3">
                                <span className="font-header text-yellow-beige">Active Nodes</span>
                                <span className="font-mono text-logic-green text-lg">1,247</span>
                            </div>
                            <div className="flex justify-between items-center bg-inset-grey p-3">
                                <span className="font-header text-yellow-beige">Total Engineers</span>
                                <span className="font-mono text-off-white text-lg">45,892</span>
                            </div>
                            <div className="flex justify-between items-center bg-inset-grey p-3">
                                <span className="font-header text-yellow-beige">Daily Volume</span>
                                <span className="font-mono text-factorio-orange text-lg">2.4B CR</span>
                            </div>
                            <div className="flex justify-between items-center bg-inset-grey p-3">
                                <span className="font-header text-yellow-beige">System Uptime</span>
                                <span className="font-mono text-logic-green text-lg">99.97%</span>
                            </div>
                        </div>
                    </FactorioPanel>

                    {/* Recent Activity */}
                    <FactorioPanel variant="raised" className="md:col-span-2">
                        <h3 className="text-xl font-header mb-4 border-b-2 border-factorio-orange pb-2">
                            RECENT NETWORK ACTIVITY
                        </h3>
                        <div className="bg-inset-grey p-4 font-mono text-sm space-y-1 max-h-64 overflow-y-auto">
                            <div className="text-logic-green">[15:14:22] NODE-4521: EXPORT 5000x Iron Plates (+625 CR)</div>
                            <div className="text-yellow-beige">[15:14:18] NODE-1337: IMPORT 2000x Copper Wire (-160 CR)</div>
                            <div className="text-logic-green">[15:14:09] NODE-8842: EXPORT 150x Advanced Circuits (+1875 CR)</div>
                            <div className="text-off-white">[15:13:55] SYSTEM: Major Order progress +0.5%</div>
                            <div className="text-logic-green">[15:13:47] NODE-2219: EXPORT 1000x Steel Plates (+4530 CR)</div>
                            <div className="text-yellow-beige">[15:13:32] NODE-7654: IMPORT 8000x Iron Ore (-1000 CR)</div>
                            <div className="text-danger-red">[15:13:28] WARNING: Copper market volatility detected</div>
                            <div className="text-logic-green">[15:13:15] NODE-3341: EXPORT 300x Green Science (+6750 CR)</div>
                        </div>
                    </FactorioPanel>
                </div>
            </main>
        </div>
    );
}
