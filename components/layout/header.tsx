import React from 'react';
import Link from 'next/link';
import { Factory, LineChart, Package } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-panel-grey border-b-4 border-factorio-orange">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Factory size={40} className="text-factorio-orange" strokeWidth={2.5} />
                        <div>
                            <h1 className="text-2xl font-header font-bold text-yellow-beige leading-none">
                                F.U.N.
                            </h1>
                            <p className="text-xs text-off-white font-mono">
                                FACTORIO UNIFIED NETWORK
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-off-white hover:text-factorio-orange transition-colors font-header"
                        >
                            <Factory size={20} strokeWidth={2} />
                            MISSION CONTROL
                        </Link>
                        <Link
                            href="/market"
                            className="flex items-center gap-2 text-off-white hover:text-factorio-orange transition-colors font-header"
                        >
                            <LineChart size={20} strokeWidth={2} />
                            EXCHANGE
                        </Link>
                        <Link
                            href="/inventory"
                            className="flex items-center gap-2 text-off-white hover:text-factorio-orange transition-colors font-header"
                        >
                            <Package size={20} strokeWidth={2} />
                            LOGISTICS
                        </Link>
                    </nav>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 bg-inset-grey px-4 py-2 border-2 border-bevel-dark">
                        <div className="text-right">
                            <p className="text-yellow-beige font-header text-sm">ENGINEER #1337</p>
                            <p className="text-logic-green font-mono text-xs">125,450 CR</p>
                        </div>
                        <div className="w-2 h-2 bg-logic-green rounded-full animate-blink" />
                    </div>
                </div>

                {/* System Status */}
                <div className="mt-3 flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-logic-green rounded-full animate-blink" />
                    <span className="text-logic-green font-mono">SYSTEM STATUS: ONLINE</span>
                </div>
            </div>
        </header>
    );
};
