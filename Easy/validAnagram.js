/**
 * Leetcode-242
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * #Hashtable
 */

var isAnagram = function (s, t) {
  sArray = s.split("");
  sLength = sArray.length;
  tArray = t.split("");
  tLength = tArray.length;
  dict = {};
  if (sLength != tLength) {
    return false;
  }
  for (let i = 0; i < sLength; i++) {
    if (sArray[i] in dict) {
      dict[sArray[i]] = dict[sArray[i]] + 1;
    } else {
      dict[sArray[i]] = 1;
    }
  }

  for (let i = 0; i < tLength; i++) {
    if (tArray[i] in dict) {
      if (dict[tArray[i]] == 1) {
        delete dict[tArray[i]];
      } else {
        dict[tArray[i]] = dict[tArray[i]] - 1;
      }
    } else {
      return false;
    }
  }
  return Object.keys(dict).length === 0;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
