import React from 'react';
import Link from 'next/link';
import { Factory, LineChart, Package, Hexagon } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-b from-panel-grey to-bg-dark border-b-4 border-factorio-orange shadow-raised">
            <div className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo - Enhanced */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <Hexagon size={48} className="text-factorio-orange" strokeWidth={3} fill="#cf7c00" />
                            <Factory size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bevel-dark" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-header font-bold text-yellow-beige leading-none group-hover:text-factorio-orange transition-colors">
                                F.U.N.
                            </h1>
                            <p className="text-[10px] text-off-white font-mono tracking-wider mt-1">
                                FACTORIO UNIFIED NETWORK
                            </p>
                        </div>
                    </Link>

                    {/* Navigation - Enhanced */}
                    <nav className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-4 py-2 bg-inset-grey border-2 border-bevel-dark hover:border-factorio-orange text-off-white hover:text-factorio-orange transition-all font-header text-sm"
                        >
                            <Factory size={18} strokeWidth={2} />
                            MISSION CONTROL
                        </Link>
                        <Link
                            href="/market"
                            className="flex items-center gap-2 px-4 py-2 bg-inset-grey border-2 border-bevel-dark hover:border-factorio-orange text-off-white hover:text-factorio-orange transition-all font-header text-sm"
                        >
                            <LineChart size={18} strokeWidth={2} />
                            EXCHANGE
                        </Link>
                        <Link
                            href="/inventory"
                            className="flex items-center gap-2 px-4 py-2 bg-inset-grey border-2 border-bevel-dark hover:border-factorio-orange text-off-white hover:text-factorio-orange transition-all font-header text-sm"
                        >
                            <Package size={18} strokeWidth={2} />
                            LOGISTICS
                        </Link>
                    </nav>

                    {/* User Profile - Enhanced */}
                    <div className="flex items-center gap-4 bg-inset-grey px-5 py-3 border-2 border-t-bevel-light border-l-bevel-light border-b-bevel-dark border-r-bevel-dark shadow-raised">
                        <div className="text-right">
                            <p className="text-yellow-beige font-header text-base font-bold">ENGINEER #1337</p>
                            <p className="text-logic-green font-mono text-sm">125,450 CR</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-3 h-3 bg-logic-green animate-blink" />
                            <div className="w-3 h-3 bg-logic-green opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
