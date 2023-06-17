/**
 * Leetcode-744
 * Find Smallest Letter Greater Than Target
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * #BinarySearch
 */

var nextGreatestLetter = function (letters, target) {
    low = 0;
    high = letters.length - 1;

    if (target >= letters[high]) {
        return letters[0];
    }

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);

        if (target < letters[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
};


console.log(nextGreatestLetter(["c", "f", "j"], "a"))
console.log(nextGreatestLetter(["c", "f", "j"], "c"))
console.log(nextGreatestLetter(["c", "f", "j"], "d"))
console.log(nextGreatestLetter(["c", "f", "j"], "l"))
console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"))




