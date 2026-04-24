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

    const sorted = Object.keys(records).sort((a, b) => records[b] - records[a]);
    const output = [];

    for (const key of sorted) {
      if (output.length === k) break;
      output.push(Number(key));
    }

    return output;
  }
}
