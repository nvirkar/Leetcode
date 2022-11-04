/**
 * Leetcode-1346
 * Check If N and Its Double Exist
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 */

var checkIfExist = function (arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        for (j = 0; j < n; j++) {
            if ((i != j) && ((arr[j] == 2 * num) || (arr[j] == num / 2))) {
                return true
            }
        }
    }
    return false
};


console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([-20, 8, -6, -14, 0, -19, 14, 4]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
console.log(checkIfExist([0, 0]));



