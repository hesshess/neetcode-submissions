class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const chars = new Set<string>();
        let left = 0;
        let longest = 0;

        for (let right = 0; right< s.length; right++){
            while(chars.has(s[right])){
                chars.delete(s[left]);
                left++;
            }

            chars.add(s[right]);

            longest = Math.max(
                longest,
                right - left +1
            );
        }

        return longest;
    }
}
