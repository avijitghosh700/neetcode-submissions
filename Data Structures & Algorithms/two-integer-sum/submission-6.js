class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let index = 0; index < nums.length; index++) {
            let remainValue = target - nums[index];
            
            if (remainValue in map) {
                return [index, map[remainValue]]
            }

            map[nums[index]] = index;
        }
    }
}
