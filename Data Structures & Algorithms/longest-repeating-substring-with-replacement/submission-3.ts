class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>();

        let left = 0;
        let maxFreq = 0;
        let result = 0;
        for ( let right =0; right<s.length; right++){
            const char = s[right];

            count.set(char, (count.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(char) || 0);

            while((right - left + 1) - maxFreq > k){
                count.set(s[left], (count.get(s[left])||0) -1);
                left++;
            }
            result = Math.max(result, right - left +1);
        }

        return result;
       
    }
}
