import type {Position, PositionAnalysis} from './types.js'

export function marketVal(position: Position) { 
    return position.shares * position.currentPrice 
};

export function calculatePNL(position: Position): number { 
    return (position.currentPrice - position.averagePurchasePrice) * position.shares
};

export function calculateWeight(position: Position, PortfolioVal: number): number { 
    return marketVal(position)/ PortfolioVal
};

export function calculateReturnPercentage(position: Position) { 
    return (position.currentPrice - position.averagePurchasePrice) / position.averagePurchasePrice * 100
}

export function positionAnalysis(position: Position, totalVal: number): PositionAnalysis{
    return {ticker: position.ticker, marketValue: marketVal(position), 
        pnl: calculatePNL(position), weight: calculateWeight(position, totalVal),
        returnPercentage: calculateReturnPercentage(position)}
};