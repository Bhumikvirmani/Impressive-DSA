# 26. Remove Duplicates from Sorted Array

**Difficulty:** Easy  
**Link:** [LeetCode - Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---

## 🧩 Problem Statement

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.  
The relative order of the elements should be kept the same.  
Since it's in-place, you must use O(1) extra memory.

Return the count of unique elements and update `nums` in-place such that the first `k` elements are the unique values.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

---

## 🧪 Examples

### Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

### Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

---

---

## 🛑 Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.

---

## 💡 Approach

- Use the **two-pointer technique**.
- Pointer `i` keeps track of unique elements.
- Pointer `j` scans the array:
- If `nums[j] !== nums[i]`, we increment `i` and update `nums[i]`.
- return `i + 1`, give count of all unique elements

---

## 🔍 Notes

- This must be done without using extra space.
- LeetCode will verify the modified array in-place up to the first `k` elements.
