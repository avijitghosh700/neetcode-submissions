class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const records = {};

    if (nums.length === k) {
      return nums;
    }

    // Build frequency map
    for (const num of nums) {
      records[num] = (records[num] || 0) + 1;
    }

    // Sort entries by frequency (descending), take top k
    return Object.entries(records)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(([num]) => Number(num));
  }
}
