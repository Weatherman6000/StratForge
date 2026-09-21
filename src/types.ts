export interface Position { 
    ticker: string,
    shares: number,
    currentPrice: number,
    averagePurchasePrice: number,
};

export interface PositionAnalysis{
    ticker: string;
    marketValue: number;
    pnl: number;
    weight: number;
    returnPercentage: number;
};