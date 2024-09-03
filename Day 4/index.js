function countBeautifulPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] % 3 === 0 && nums[j] % 5 === 0) {
        // it will print arrays of beautiful pairs
        // console.log([nums[i], nums[j]])
        count++;
      }
    }
  }
  return count;
}

// Example test cases
console.log(countBeautifulPairs([3, 5, 9, 10])); // Output: 4
console.log(countBeautifulPairs([3, 9])); // Output: 0
