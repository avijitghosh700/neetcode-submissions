class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const records = {};

    for (const num of nums) {
      records[num] = (records[num] || 0) + 1;
    }

    return Object.keys(records)
      .sort((a, b) => records[b] - records[a])
      .slice(0, k)
      .map(Number);
  }
}
