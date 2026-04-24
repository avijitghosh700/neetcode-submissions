class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        let output = [];

        for (const str of strs) {
            let sortedString = Array.from(str).sort().join('');

            if (sortedString in map) {
                map[sortedString].push(str);
            } else {
                map[sortedString] = [str];
            }

        }

        for (const key in map) {
            output.push(map[key]);
        }

        return output;
    }
}
