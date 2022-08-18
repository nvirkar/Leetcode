/**
 * Leetcode-744
 * Find Smallest Letter Greater Than Target
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */

var nextGreatestLetter = function (letters, target) {
    targetNum = target.charCodeAt(0) - 97
    numArr = letters.map((el) => el.charCodeAt(0) - 97)

    low = 0;
    high = numArr.length - 1;

    if (targetNum >= numArr[high]) {
        return letters[0]
    }

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (targetNum == numArr[mid]) {
            j = mid;
            while (targetNum == numArr[j]) {
                j++
            }
            return letters[j]
        }
        else if (targetNum > numArr[mid]) {
            low = mid + 1
        } else if (targetNum < numArr[mid]) {
            high = mid - 1
        }
    }
    return letters[low]
};


console.log(nextGreatestLetter(["c", "f", "j"], "a"))
console.log(nextGreatestLetter(["c", "f", "j"], "c"))
console.log(nextGreatestLetter(["c", "f", "j"], "d"))
console.log(nextGreatestLetter(["c", "f", "j"], "l"))
console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"))




