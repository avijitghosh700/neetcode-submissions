class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let index = 0; index < nums.length; index++) {
            let remainValue = target - nums[index];

            if (nums.indexOf(remainValue) !== -1 && index !== nums.indexOf(remainValue)) {
                const index2 = nums.indexOf(remainValue);
                return [index, index2];
            }
        }
    }
}
