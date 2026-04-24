class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let index = 0; index < nums.length; index++) {
            let remainValue = target - nums[index];
            let index2 = nums.indexOf(remainValue);

            if (index2 !== -1 && index !== index2) {
                return [index, index2];
            }
        }
    }
}
