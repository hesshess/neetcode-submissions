class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from(
            {length: nums.length+1},
            ()=>[]
        );

        for (const num of nums){
            count.set(num, (count.get(num) || 0)+1);
        }

        for (const [num, frequency] of count){
            freq[frequency].push(num);
        }
        console.log(freq)
        const result = [];

        for(let i = freq.length -1; i>0; i--){
            for(const num of freq[i]){
                result.push(num);

                if (result.length === k){
                    return result;
                }


            }
        }
        return result;
    }
}
