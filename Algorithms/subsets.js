var subsets = function (nums) {
  res = [];
  getSubsets([], nums);
  return res;
};

var getSubsets = function (unprocessed, processed) {
  if (processed.length == 0) {
    res.push(unprocessed);
    return;
  }

  el = processed[0];

  getSubsets([...unprocessed, el], processed.slice(1));
  getSubsets([...unprocessed], processed.slice(1));
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
