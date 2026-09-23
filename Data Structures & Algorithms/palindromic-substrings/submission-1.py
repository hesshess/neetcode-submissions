class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0

        def expand(left, right):
            nonlocal count

            while (
                left >= 0
                and right < len(s)
                and s[left] == s[right]
            ):
                count += 1
                left -= 1
                right += 1

        for i in range(len(s)):
            expand(i, i)       # 홀수 길이
            expand(i, i + 1)   # 짝수 길이

        return count
        