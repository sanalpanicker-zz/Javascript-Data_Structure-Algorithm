const AppleStockPrices = [10, 7, 5, 8, 11, 9];


const findmaxProfit = (stockPrices) => {

    let maxProfit = 0;
    let minPrice = stockPrices[0];
    let maxPrice = stockPrices[0];
    for (let i = 1; i < stockPrices.length; i++) {
        currentPrice = stockPrices[i];

        if (currentPrice < minPrice) {
            minPrice = maxPrice = currentPrice;
        } else {
            maxPrice = currentPrice
        }

        maxProfit = Math.max((maxPrice - minprice), maxProfit);

    }
    return maxProfit;
}

console.log(findmaxProfit(AppleStockPrices));