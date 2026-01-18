import React from 'react';
import { TickerTape } from '@/components/ui/ticker-tape';
import { TICKER_ITEMS } from '@/lib/mock-data';

export const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50">
            <TickerTape items={TICKER_ITEMS} />
        </footer>
    );
};
