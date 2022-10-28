/**
 * Get all permutations of string
 */

var getPermutations = function (p, up) {
    if (up == "") {
        // console.log(res)
        res.push(p)
        return;
    }

    let ch = up.charAt(0)

    for (let i = 0; i <= p.length; i++) {
        let f = p.substring(0, i)
        let s = p.substring(i, p.length)
        getPermutations(f + ch + s, up.substring(1))
    }
}

var permute = function (str) {
    res = [];
    getPermutations("", str)
    return res
};

console.log(permute("abc"))