/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // throgh the reduce function as it reduce the value into final single value 
    return prices.reduce((acc, curr,idx)=> acc + (curr > prices[idx - 1] ? curr - prices[idx -1]: 0), 0);
    // brute force without using in built function
    // let profit = 0;
    // for(let i = 1; i < prices.length; i++){
    //     if(prices[i] > prices[i-1]){
    //         profit += prices[i] - prices[i - 1] ;
    //     }
    // }
    // return prices;
};