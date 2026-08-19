class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {        if (t.length > s.length) {
            return "";
        }

        const need = new Map<string, number>();
        const window = new Map<string, number>();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let have = 0;
        const needCount = need.size;

        let left = 0;

        let resultStart = 0;
        let resultLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            window.set(char, (window.get(char) || 0) + 1);

            if (
                need.has(char) &&
                window.get(char) === need.get(char)
            ) {
                have++;
            }

            while (have === needCount) {
                const windowLength = right - left + 1;

                if (windowLength < resultLength) {
                    resultStart = left;
                    resultLength = windowLength;
                }

                const leftChar = s[left];

                window.set(
                    leftChar,
                    (window.get(leftChar) || 0) - 1
                );

                if (
                    need.has(leftChar) &&
                    window.get(leftChar)! < need.get(leftChar)!
                ) {
                    have--;
                }

                left++;
            }
        }

        return resultLength === Infinity
            ? ""
            : s.slice(resultStart, resultStart + resultLength);
    }
}