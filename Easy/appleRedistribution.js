/**
 * Leetcode-3074
 * Apple Redistribution into Boxes
 * https://leetcode.com/problems/apple-redistribution-into-boxes/description/
 * #Array
 */

var minimumBoxes = function (apple, capacity) {
  let appleQuant = 0;
  let appleLength = apple.length;
  for (let i = 0; i < appleLength; i++) {
    appleQuant += apple[i];
  }
  let newCap = capacity.sort((a, b) => b - a);
  let boxes = 0;
  let newCapLength = newCap.length;
  for (let i = 0; i < newCapLength; i++) {
    appleQuant = appleQuant - newCap[i];
    boxes = boxes + 1;
    if (appleQuant <= 0) {
      return boxes;
    }
  }
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]));

console.log(minimumBoxes([6, 9, 8, 5, 2], [4, 10, 6, 1, 10, 6, 4, 7, 7, 9]));
