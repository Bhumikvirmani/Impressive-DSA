/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            let profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};