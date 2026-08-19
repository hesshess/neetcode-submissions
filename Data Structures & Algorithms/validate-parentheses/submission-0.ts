class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const pairs = new Map<string, string>([
            [")", "("],
            ["}", "{"],
            ["]","["],
        ]);

        for(const char of s){
            if (char === "(" || char === "{" || char === "["){
                stack.push(char);
            }else{
                const top = stack.pop();
                if (top !== pairs.get(char)){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
