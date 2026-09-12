class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ""
        max_len = 0

        for i in range(len(s)):
            # 홀수 길이 palindrome
            left = i
            right = i

            while (
                left >= 0
                and right < len(s)
                and s[left] == s[right]
            ):
                if right - left + 1 > max_len:
                    result = s[left:right + 1]
                    max_len = right - left + 1

                left -= 1
                right += 1

            # 짝수 길이 palindrome
            left = i
            right = i + 1

            while (
                left >= 0
                and right < len(s)
                and s[left] == s[right]
            ):
                if right - left + 1 > max_len:
                    result = s[left:right + 1]
                    max_len = right - left + 1

                left -= 1
                right += 1

        return result