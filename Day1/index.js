"use strict";

const arr = [2, 6, 15, 3, 6, 30, 4, 7, 5, 3];
const str = "Singham ko harana mushkil hi nehi,na munkeen hai";
const numArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
  62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100,
];
const obj = { one: 1, two: 2, three: 3, four: 4 };

// problem 1 :

function pairs(arr, givenNum) {
  const pairsIntegers = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] === givenNum) {
        pairsIntegers.push([arr[i], arr[j]]);
      }
    }
  }

  return pairsIntegers;
}
// console.log(pairs(arr, 10));

// problem 2:

function smallestAndLargest(arr) {
  sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  const smallestElement = sortedArr[0];
  const largestElement = sortedArr[sortedArr.length - 1];

  return { Smallest: smallestElement, Largest: largestElement };
}
// console.log(smallestAndLargest(arr));

// problem 3:

function VowelsAndConsonentsCounter(string) {
  string = string.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i <= string.length; i++) {
    let char = string[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      consonantCount++;
    }
  }
  return { Vowels: vowelCount, Consonants: consonantCount };
}
// console.log(
//   VowelsAndConsonentsCounter(str)
// );

// problem 4:

function getKeyByValue(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null;
}
// console.log(getKeyByValue(obj, 3));

// problem 5:

function findMissingInteger(arr) {
  const missingNums = [];
  const arrOfOneToHundred = Array.from(Array(100), (_, i) => i + 1);
  for (let integer in arrOfOneToHundred) {
    if (!arr.includes(arrOfOneToHundred[integer])) {
      missingNums.push(arrOfOneToHundred[integer]);
    }
  }
  return missingNums;
}
// console.log(findMissingInteger(numArray));

// problem 6 :

function findDuplicate(arr) {
  const duplicateNums = [];
  const NonduplicateNums = [];

  for (let i = 0; i <= arr.length; i++) {
    if (NonduplicateNums.includes(arr[i])) {
      duplicateNums.push(arr[i]);
    } else {
      NonduplicateNums.push(arr[i]);
    }
  }
  return duplicateNums;
}
// console.log(findDuplicate(arr));

// problem 7:

function countOccurenceOfChar(str, char) {
  const lowerCaseStr = str.toLowerCase();
  let charCount = 0;
  for (let i = 0; i <= lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === char) {
      charCount++;
    }
  }
  return charCount;
}
// console.log(countOccurenceOfChar(str, "s"));

// problem 8:

function getValueByKey(obj, givenKey) {
  for (let key in obj) {
    if (key === givenKey) {
      return obj[key];
    }
  }
}
// console.log(getValueByKey(obj, "two"));
