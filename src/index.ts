import {portfolio} from './data.js'
import {
    marketVal,
    calculatePNL,
    calculateWeight,
    positionAnalysis
} from "./portfolio.js"

const marketValue = portfolio.map(marketVal);
const totalVal = marketValue.reduce((sum , val) =>  sum + val, 0);

console.log(marketValue) ;
console.log(totalVal);

const PNL = portfolio.map(calculatePNL)
const weights = portfolio.map((position) => calculateWeight(position, totalVal))

console.log(weights)
console.log(PNL)

const positionReport = portfolio.map((position) => positionAnalysis(position, totalVal))
console.table(positionReport)

const largestPosition = positionReport.reduce((largest, current) => {
    if (current.marketValue > largest.marketValue) {
        return current;
    } 
    return largest;
});


console.log("Largest position:", largestPosition.ticker);
console.log("Market value:", largestPosition.marketValue);

//total unrealized PNL
const totalPNL = positionReport.reduce((sum, current) => {
    return sum + current.pnl; 
}, 0);

console.log("Total unrealized PNL:", totalPNL);

//calculate total initial portfolio investment 

const initialInvestment = portfolio.reduce((sum, current) => {
    return sum + current.shares * current.averagePurchasePrice;
}, 0)

console.log("Initial Investment:", initialInvestment);

//calculate total percentage return 
const totalYield = (totalPNL / initialInvestment) * 100;
console.log("Portfolio return:", `${totalYield.toFixed(2)}%`);

//append individual stock yield 

//find best performing stock 

const bestPerformer = positionReport.reduce((best, current) => {
    if (current.returnPercentage > best.returnPercentage) { 
        return current;
    }
    return best;
});

console.log("Best performer is:", bestPerformer.ticker);
console.log("Return:", `${bestPerformer.returnPercentage.toFixed(2)}%`)