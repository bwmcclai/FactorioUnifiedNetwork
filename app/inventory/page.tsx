import { Header } from '@/components/layout/header';
import { FactorioPanel } from '@/components/ui/factorio-panel';
import { IndustrialButton } from '@/components/ui/industrial-button';
import { ITEMS, TRANSACTIONS } from '@/lib/mock-data';
import { Package } from 'lucide-react';

export default function Inventory() {
    // Mock inventory items
    const inventoryItems = [
        { item: ITEMS[0], quantity: 45000 },
        { item: ITEMS[1], quantity: 32000 },
        { item: ITEMS[2], quantity: 8500 },
        { item: ITEMS[3], quantity: 12000 },
        { item: ITEMS[4], quantity: 3200 },
        { item: ITEMS[5], quantity: 1800 },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-header mb-6 text-yellow-beige flex items-center gap-3">
                    <Package size={32} className="text-factorio-orange" strokeWidth={2.5} />
                    MY LOGISTICS
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cloud Storage Grid */}
                    <div className="lg:col-span-2">
                        <FactorioPanel variant="raised">
                            <h3 className="text-xl font-header mb-4 border-b-2 border-factorio-orange pb-2">
                                CLOUD STORAGE
                            </h3>

                            <div className="grid grid-cols-6 gap-2 mb-4">
                                {inventoryItems.map((inv, i) => (
                                    <button
                                        key={i}
                                        className="aspect-square bg-inset-grey border-2 border-bevel-dark hover:border-factorio-orange transition-all relative group"
                                    >
                                        <div className="text-4xl">{inv.item.icon}</div>
                                        <div className="absolute bottom-1 right-1 bg-bevel-dark px-1 text-xs font-mono text-yellow-beige">
                                            {(inv.quantity / 1000).toFixed(0)}K
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                                            <div className="bg-panel-grey border-2 border-factorio-orange p-2 whitespace-nowrap">
                                                <p className="font-header text-yellow-beige text-sm">{inv.item.name}</p>
                                                <p className="font-mono text-off-white text-xs">Qty: {inv.quantity.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}

                                {/* Empty slots */}
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <div
                                        key={`empty-${i}`}
                                        className="aspect-square bg-inset-grey border-2 border-bevel-dark opacity-50"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between bg-inset-grey p-4">
                                <span className="font-header text-yellow-beige">Storage Capacity</span>
                                <span className="font-mono text-off-white">6 / 36 slots used</span>
                            </div>
                        </FactorioPanel>

                        {/* Quick Actions */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <IndustrialButton variant="primary" className="w-full">
                                REQUEST SHIPMENT
                            </IndustrialButton>
                            <IndustrialButton variant="success" className="w-full">
                                SEND TO PAD
                            </IndustrialButton>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="lg:col-span-1">
                        <FactorioPanel variant="raised">
                            <h3 className="text-xl font-header mb-4 border-b-2 border-factorio-orange pb-2">
                                TRANSACTION LOG
                            </h3>

                            <div className="bg-inset-grey p-3 font-mono text-xs space-y-2 max-h-96 overflow-y-auto">
                                {TRANSACTIONS.map((tx, i) => (
                                    <div
                                        key={i}
                                        className={`border-l-4 pl-2 py-1 ${tx.type === 'EXPORT'
                                                ? 'border-logic-green text-logic-green'
                                                : 'border-yellow-beige text-yellow-beige'
                                            }`}
                                    >
                                        <div className="text-off-white text-[10px]">[{tx.timestamp}]</div>
                                        <div className="font-bold">{tx.type}</div>
                                        <div className="text-off-white">
                                            {tx.quantity}x {tx.item}
                                        </div>
                                        <div className={tx.credits > 0 ? 'text-logic-green' : 'text-danger-red'}>
                                            {tx.credits > 0 ? '+' : ''}{tx.credits} CR
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FactorioPanel>

                        {/* Stats Panel */}
                        <FactorioPanel variant="raised" className="mt-6">
                            <h3 className="text-lg font-header mb-3 border-b-2 border-factorio-orange pb-2">
                                TODAY'S STATS
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-inset-grey p-2">
                                    <span className="font-header text-yellow-beige text-sm">Exports</span>
                                    <span className="font-mono text-logic-green">+19,230 CR</span>
                                </div>
                                <div className="flex justify-between items-center bg-inset-grey p-2">
                                    <span className="font-header text-yellow-beige text-sm">Imports</span>
                                    <span className="font-mono text-danger-red">-2,810 CR</span>
                                </div>
                                <div className="flex justify-between items-center bg-inset-grey p-2">
                                    <span className="font-header text-yellow-beige text-sm">Net Profit</span>
                                    <span className="font-mono text-factorio-orange text-lg font-bold">+16,420 CR</span>
                                </div>
                            </div>
                        </FactorioPanel>
                    </div>
                </div>
            </main>
        </div>
    );
}
