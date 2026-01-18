export interface Item {
    id: string;
    name: string;
    icon: string;
    category: 'raw' | 'intermediate' | 'science' | 'ammo';
    quality: 'normal' | 'uncommon' | 'rare' | 'legendary';
}

export interface PriceData {
    timestamp: number;
    price: number;
    volume: number;
}

export interface OrderBookEntry {
    price: number;
    quantity: number;
}

export interface Transaction {
    timestamp: string;
    type: 'EXPORT' | 'IMPORT';
    item: string;
    quantity: number;
    credits: number;
}

export const ITEMS: Item[] = [
    { id: 'iron-plate', name: 'Iron Plate', icon: '🔩', category: 'raw', quality: 'normal' },
    { id: 'copper-plate', name: 'Copper Plate', icon: '🟠', category: 'raw', quality: 'normal' },
    { id: 'steel-plate', name: 'Steel Plate', icon: '⚙️', category: 'intermediate', quality: 'normal' },
    { id: 'circuit', name: 'Electronic Circuit', icon: '🔌', category: 'intermediate', quality: 'normal' },
    { id: 'advanced-circuit', name: 'Advanced Circuit', icon: '💾', category: 'intermediate', quality: 'uncommon' },
    { id: 'science-red', name: 'Automation Science', icon: '🔴', category: 'science', quality: 'normal' },
    { id: 'science-green', name: 'Logistic Science', icon: '🟢', category: 'science', quality: 'normal' },
    { id: 'ammo', name: 'Firearm Magazine', icon: '🔫', category: 'ammo', quality: 'normal' },
];

export const TICKER_ITEMS = [
    { name: 'IRON', price: 12.5, change: 0.5 },
    { name: 'COPPER', price: 8.2, change: -1.2 },
    { name: 'STEEL', price: 45.3, change: 2.1 },
    { name: 'CIRCUIT', price: 28.7, change: 0.8 },
    { name: 'ADV-CIRCUIT', price: 125.4, change: -0.3 },
    { name: 'SCI-RED', price: 15.0, change: 0.0 },
    { name: 'SCI-GREEN', price: 22.5, change: 1.5 },
];

export const PRICE_HISTORY: PriceData[] = Array.from({ length: 24 }, (_, i) => ({
    timestamp: Date.now() - (23 - i) * 3600000,
    price: 12 + Math.sin(i / 3) * 2 + Math.random(),
    volume: Math.floor(Math.random() * 10000) + 5000,
}));

export const BID_ORDERS: OrderBookEntry[] = [
    { price: 12.4, quantity: 1500 },
    { price: 12.3, quantity: 2300 },
    { price: 12.2, quantity: 1800 },
    { price: 12.1, quantity: 3200 },
    { price: 12.0, quantity: 5000 },
];

export const ASK_ORDERS: OrderBookEntry[] = [
    { price: 12.6, quantity: 1200 },
    { price: 12.7, quantity: 1900 },
    { price: 12.8, quantity: 2400 },
    { price: 12.9, quantity: 1600 },
    { price: 13.0, quantity: 4500 },
];

export const TRANSACTIONS: Transaction[] = [
    { timestamp: '14:02', type: 'EXPORT', item: 'Advanced Circuits', quantity: 500, credits: 5000 },
    { timestamp: '13:47', type: 'IMPORT', item: 'Iron Plates', quantity: 10000, credits: -1250 },
    { timestamp: '13:22', type: 'EXPORT', item: 'Steel Plates', quantity: 800, credits: 3600 },
    { timestamp: '12:55', type: 'IMPORT', item: 'Copper Wire', quantity: 5000, credits: -400 },
    { timestamp: '12:33', type: 'EXPORT', item: 'Green Science', quantity: 200, credits: 4500 },
];
