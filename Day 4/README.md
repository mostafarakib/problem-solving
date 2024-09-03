# Divisibility Beautiful Pairs

You are given an integer array nums. Your task is to find the number of beautiful pairs in this array.

A pair (𝑖,𝑗) is considered beautiful if:

1. The first number of the pair (𝑛𝑢𝑚𝑠[𝑖]) is divisible by 3.
2. The second number of the pair (𝑛𝑢𝑚𝑠[𝑗]) is divisible by 5.
3. 𝑖≠𝑗.
   If there are no such pairs, return 0.

Note: Pairs (i, j) and (j, i) will be considered identical.

## Example 1:

Input: nums = [3, 5, 9, 10]
Output: 4
Explanation:
(3, 5) where 3 is divisible by 3 and 5 is divisible by 5.
(3, 10) where 3 is divisible by 3 and 10 is divisible by 5.
(9, 5) where 9 is divisible by 3 and 5 is divisible by 5.
(9, 10) where 9 is divisible by 3 and 10 is divisible by 5.

Therefore, the total number of beautiful pairs is 4.

## Example 2:

Input: nums = [3, 9]
Output: 0
Explanation: There are no beautiful pairs.
