/**
 * Leetcode-3074
 * Apple Redistribution into Boxes
 * https://leetcode.com/problems/apple-redistribution-into-boxes/description/
 * #Array
 */
var minimumBoxes = function (apple, capacity) {
  appleQuantity = 0;
  appleLength = apple.length;
  for (let i = 0; i < appleLength; i++) {
    appleQuantity = appleQuantity + apple[i];
  }
  newCapacity = capacity.sort((a, b) => b - a);
  boxes = 0;
  i = 0;
  while (appleQuantity > 0) {
    appleQuantity = appleQuantity - capacity[i];
    i++;
    boxes++;
  }
  return boxes;
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]));

console.log(minimumBoxes([6, 9, 8, 5, 2], [4, 10, 6, 1, 10, 6, 4, 7, 7, 9]));
