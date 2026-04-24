class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const record = {};
        for (let index = 0; index <= nums.length - 1; index++) {
            let n = nums[index];
            
            if (n in record) return true;

            record[n] = 1;
        }

        return false;
    }
}
