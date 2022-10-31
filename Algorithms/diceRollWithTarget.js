getDiceRollCombinations = function (p, up) {
    if (up == 0) {
        res.push(p.toString())
        return
    }
    for (let i = 1; i <= 6; i++) {
        if (up >= i) {
            getDiceRollCombinations(p + i, up - i)
        }
    }
}

var diceRoll = function (target) {
    res = []
    getDiceRollCombinations("", target);
    return res;
};

console.log(diceRoll(4))