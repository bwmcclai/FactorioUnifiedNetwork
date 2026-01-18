'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FactorioPanel } from '@/components/ui/factorio-panel';
import { IndustrialButton } from '@/components/ui/industrial-button';
import { ITEMS, PRICE_HISTORY, BID_ORDERS, ASK_ORDERS } from '@/lib/mock-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Market() {
    const [selectedItem, setSelectedItem] = useState(ITEMS[0]);
    const [quality, setQuality] = useState<'normal' | 'uncommon' | 'rare' | 'legendary'>('normal');
    const [quantity, setQuantity] = useState('');
    const [limitPrice, setLimitPrice] = useState('');

    const filteredItems = ITEMS;

    return (
        <div className="min-h-screen pb-16">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-header mb-6 text-yellow-beige">
                    GRAND EXCHANGE
                </h1>

                <div className="grid grid-cols-12 gap-6">
                    {/* Item Picker Sidebar */}
                    <div className="col-span-12 lg:col-span-3">
                        <FactorioPanel variant="raised">
                            <h3 className="text-lg font-header mb-4 border-b-2 border-factorio-orange pb-2">
                                COMMODITIES
                            </h3>

                            {/* Quality Selector */}
                            <div className="mb-4">
                                <label className="block text-yellow-beige font-header text-sm mb-2">
                                    QUALITY TIER
                                </label>
                                <select
                                    value={quality}
                                    onChange={(e) => setQuality(e.target.value as any)}
                                    className="w-full bg-inset-grey border-2 border-bevel-dark p-2 text-off-white font-mono"
                                >
                                    <option value="normal">Normal</option>
                                    <option value="uncommon">Uncommon</option>
                                    <option value="rare">Rare</option>
                                    <option value="legendary">Legendary</option>
                                </select>
                            </div>

                            {/* Item Grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {filteredItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setSelectedItem(item)}
                                        className={`
                      p-4 text-3xl border-2 transition-all
                      ${selectedItem.id === item.id
                                                ? 'bg-factorio-orange border-yellow-beige'
                                                : 'bg-inset-grey border-bevel-dark hover:border-bevel-light'}
                    `}
                                    >
                                        {item.icon}
                                    </button>
                                ))}
                            </div>
                        </FactorioPanel>
                    </div>

                    {/* Price Chart */}
                    <div className="col-span-12 lg:col-span-6">
                        <FactorioPanel variant="raised" innerWell>
                            <h3 className="text-lg font-header mb-4 text-yellow-beige">
                                {selectedItem.name.toUpperCase()} - PRICE CHART
                            </h3>

                            <div className="bg-black p-4 border-2 border-logic-green">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={PRICE_HISTORY}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                                        <XAxis
                                            dataKey="timestamp"
                                            tickFormatter={(ts) => new Date(ts).toLocaleTimeString([], { hour: '2-digit' })}
                                            stroke="#5dbb63"
                                            style={{ fontSize: '12px', fontFamily: 'Share Tech Mono' }}
                                        />
                                        <YAxis
                                            stroke="#5dbb63"
                                            style={{ fontSize: '12px', fontFamily: 'Share Tech Mono' }}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1e1e1e',
                                                border: '2px solid #5dbb63',
                                                fontFamily: 'Share Tech Mono'
                                            }}
                                            labelStyle={{ color: '#ffe6c0' }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="price"
                                            stroke="#5dbb63"
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Trade Controls */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-yellow-beige font-header text-sm mb-2">
                                        QUANTITY
                                    </label>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="0"
                                        className="w-full bg-inset-grey border-2 border-bevel-dark p-3 text-off-white font-mono text-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-yellow-beige font-header text-sm mb-2">
                                        LIMIT PRICE (CR)
                                    </label>
                                    <input
                                        type="number"
                                        value={limitPrice}
                                        onChange={(e) => setLimitPrice(e.target.value)}
                                        placeholder="0.00"
                                        step="0.1"
                                        className="w-full bg-inset-grey border-2 border-bevel-dark p-3 text-off-white font-mono text-lg"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <IndustrialButton variant="success" className="w-full py-4 text-lg">
                                    BUY
                                </IndustrialButton>
                                <IndustrialButton variant="danger" className="w-full py-4 text-lg">
                                    SELL
                                </IndustrialButton>
                            </div>
                        </FactorioPanel>
                    </div>

                    {/* Order Book */}
                    <div className="col-span-12 lg:col-span-3">
                        <FactorioPanel variant="raised">
                            <h3 className="text-lg font-header mb-4 border-b-2 border-factorio-orange pb-2">
                                ORDER BOOK
                            </h3>

                            {/* Asks */}
                            <div className="mb-4">
                                <h4 className="text-danger-red font-header text-sm mb-2">SELL ORDERS</h4>
                                <div className="bg-inset-grey p-2 space-y-1 font-mono text-xs">
                                    {ASK_ORDERS.map((order, i) => (
                                        <div key={i} className="flex justify-between text-danger-red">
                                            <span>{order.price.toFixed(1)}</span>
                                            <span>{order.quantity.toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bids */}
                            <div>
                                <h4 className="text-logic-green font-header text-sm mb-2">BUY ORDERS</h4>
                                <div className="bg-inset-grey p-2 space-y-1 font-mono text-xs">
                                    {BID_ORDERS.map((order, i) => (
                                        <div key={i} className="flex justify-between text-logic-green">
                                            <span>{order.price.toFixed(1)}</span>
                                            <span>{order.quantity.toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FactorioPanel>
                    </div>
                </div>
            </main>
        </div>
    );
}
