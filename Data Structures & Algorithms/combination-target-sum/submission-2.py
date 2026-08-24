class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:        
        result = []
        def dfs(index, current, total):
            if total == target:
                result.append(current.copy())
                return

            if total > target or index >= len(nums):
                return

            # 현재 숫자 선택
            current.append(nums[index])
            dfs(index, current, total + nums[index])
            current.pop()

            # 현재 숫자 선택 안 하고 다음 숫자로 이동
            dfs(index + 1, current, total)

        dfs(0, [], 0)

        return result