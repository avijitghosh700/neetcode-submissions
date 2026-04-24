class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            let sortedString = Array.from(str).sort().join('');

            if (sortedString in map) {
                map[sortedString].push(str);
            } else {
                map[sortedString] = [str];
            }

        }

        return Object.values(map);
    }
}
