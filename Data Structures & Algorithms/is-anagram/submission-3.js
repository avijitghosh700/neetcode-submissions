class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const recordS = {};
        const recordT = {};

        if (s.length !== t.length) return false;

        for (let index = 0; index < s.length; index++) {
            let itemS = s[index];
            let itemT = t[index];

            recordS[itemS] = recordS[itemS] ? (recordS[itemS] + 1) : 1;
            recordT[itemT] = recordT[itemT] ? (recordT[itemT] + 1) : 1;
        }

        for (const prop in recordS) {
            if (recordS[prop] !== recordT[prop] || !recordT.hasOwnProperty(prop)) return false;
        }

        return true;
    }
}
