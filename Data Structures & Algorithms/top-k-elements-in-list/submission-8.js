class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const records = {};
    const buckets = new Array(nums.length + 1).fill(null).map(() => []);
    const output = [];

    for (const num of nums) {
      records[num] = (records[num] || 0) + 1;
    }

    for (const num in records) {
      buckets[records[num]].push(Number(num));
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
      for (const num of buckets[i]) {
        output.push(num);
        if (output.length === k) return output;
      }
    }

    return output;
  }
}
