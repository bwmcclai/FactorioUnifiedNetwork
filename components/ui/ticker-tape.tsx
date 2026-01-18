import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PriceItem {
    name: string;
    price: number;
    change: number;
}

interface TickerTapeProps {
    items: PriceItem[];
}

export const TickerTape: React.FC<TickerTapeProps> = ({ items }) => {
    // Duplicate items for seamless loop
    const doubledItems = [...items, ...items];

    return (
        <div className="bg-inset-grey border-y-2 border-bevel-dark overflow-hidden py-2">
            <div className="flex animate-marquee whitespace-nowrap">
                {doubledItems.map((item, index) => (
                    <div key={index} className="inline-flex items-center mx-6">
                        <span className="text-yellow-beige font-header font-bold mr-2">
                            {item.name}:
                        </span>
                        <span className="text-off-white font-mono mr-2">
                            {item.price.toFixed(1)}c
                        </span>
                        <span className={`flex items-center font-mono text-sm ${item.change >= 0 ? 'text-logic-green' : 'text-danger-red'
                            }`}>
                            {item.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            {item.change >= 0 ? '+' : ''}{item.change.toFixed(1)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
