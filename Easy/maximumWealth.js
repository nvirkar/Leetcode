/**
 * Leetcode-1672
 * Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth/
 */

var maximumWealth = function (accounts) {
    maxWealth = 0
    for (let i = 0; i < accounts.length; i++) {
        wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j]
        }
        if (wealth > maxWealth) {
            maxWealth = wealth
        }
    }
    return maxWealth
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))
