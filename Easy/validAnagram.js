/**
 * Leetcode-242
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * #Hashtable
 */

var isAnagram = function (s, t) {
  let dict = {};
  let sLength = s.length;
  let tLength = t.length;
  if (sLength != tLength) {
    return false;
  }

  for (let i = 0; i < sLength; i++) {
    if (!dict[s[i]]) {
      dict[s[i]] = 1;
    } else {
      dict[s[i]] = dict[s[i]] + 1;
    }
  }

  for (let i = 0; i < tLength; i++) {
    if (!dict[t[i]]) {
      return false;
    } else if (dict[t[i]] == 1) {
      delete dict[t[i]];
    } else {
      dict[t[i]] = dict[t[i]] - 1;
    }
  }

  return Object.keys(dict).length == 0;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
