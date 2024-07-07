/**
 * Leetcode-771
 * Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/
 * #Hashtable
 */

var numJewelsInStones = function (jewels, stones) {
  let dict = {};
  let counter = 0;
  let jewelsLength = jewels.length;
  let stoneLength = stones.length;
  for (let i = 0; i < jewelsLength; i++) {
    if (!dict[jewels[i]]) {
      dict[jewels[i]] = 1;
    }
  }

  for (let i = 0; i < stoneLength; i++) {
    if (dict[stones[i]]) {
      counter++;
    }
  }

  return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
