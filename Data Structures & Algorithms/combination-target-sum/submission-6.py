class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        result = []

        def dfsasdf(index, current, total):
            if total == target:
                result.append(current.copy())
                return

            if total > target or index >= len(nums):
                return
            
            current.append(nums[index])
            dfsasdf(index, current, total + nums[index])
            current.pop()

            dfsasdf(index+1, current, total)
        
        dfsasdf(0,[],0)

        return result