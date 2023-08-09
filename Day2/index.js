// const asteric = "*";

// function diamond(length, i = 0) {
//   let dmd;
//   if (i <= length) {
//     i++;
//     dmd = asteric * i;
//     diamond(length - i);
//   }
// }
// diamond(7);

var topKFrequent = function (nums, k) {
  const frequencyMap = {};
  let topNums = [];
  nums.map((num) => {
    frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
  });
  const sortedEntries = Object.entries(frequencyMap).sort(
    (a, b) => b[1] - a[1]
  );
  topNums = sortedEntries.slice(0, k).map((entry) => entry[0]);
  console.log(frequencyMap);

  return topNums;
};
// console.log(topKFrequent([2, 2, 3, 2, 2, 1, 1, 1], 1));

function countStr(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  return obj;
}

const isAnagram = function (s, t) {
  const obj1 = countStr(s);
  const obj2 = countStr(t);

  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  for (let i = 0; i < objKeys1.length; i++) {
    if (objKeys1.length !== objKeys2.length) {
      return false;
    }
    if (!objKeys2.includes(objKeys1[i])) {
      return false;
    }
    if (
      objKeys2.includes(objKeys1[i]) &&
      obj2[objKeys1[i]] !== obj1[objKeys1[i]]
    ) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("rat", "car"));
