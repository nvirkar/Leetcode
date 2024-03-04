/**
 * Leetcode-412
 * Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 * #Math
 */

var fizzBuzz = function (n) {
  let res = [];
  let ans = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      ans = "FizzBuzz";
    } else if (i % 3 == 0) {
      ans = "Fizz";
    } else if (i % 5 == 0) {
      ans = "Buzz";
    } else {
      ans = "" + i;
    }
    res.push(ans);
  }
  return res;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
