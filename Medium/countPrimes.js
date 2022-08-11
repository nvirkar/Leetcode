/**
 * Leetcode-204
 * Count Primes
 */


var countPrimes = function (n) {
    nums = []
    count = 0;
    for (i = 0; i < n; i++) {
        nums[i] = true
    }

    for (i = 2; i * i < n; i++) {
        if (nums[i] == true) {
            for (j = 2; i * j < n; j++) {
                nums[i * j] = false
            }
        }
    }

    for (i = 2; i < n; i++) {
        if (nums[i]) {
            count++
        }
    }

    return count
};



console.log(countPrimes(10))
console.log(countPrimes(956150))
console.log(countPrimes(5000000))
console.log(countPrimes(0))
console.log(countPrimes(1))
