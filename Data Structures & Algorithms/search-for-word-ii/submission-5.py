class Solution:
    def findWords(self, board, words):
        root = {}

        # 1. Trie 만들기
        for word in words:
            node = root

            for char in word:
                if char not in node:
                    node[char] = {}

                node = node[char]

            node["#"] = word

        rows = len(board)
        cols = len(board[0])
        result = []

        # 2. DFS + Backtracking
        def dfs(r, c, node):
            char = board[r][c]

            if char not in node:
                return

            next_node = node[char]

            # 단어를 찾은 경우
            if "#" in next_node:
                result.append(next_node["#"])
                del next_node["#"]

            # 방문 처리
            board[r][c] = "#"

            directions = [
                (1, 0),
                (-1, 0),
                (0, 1),
                (0, -1)
            ]

            for dr, dc in directions:
                nr = r + dr
                nc = c + dc

                if (
                    0 <= nr < rows
                    and 0 <= nc < cols
                    and board[nr][nc] != "#"
                ):
                    dfs(nr, nc, next_node)

            # 원상 복구
            board[r][c] = char

        # 3. 모든 칸에서 시작
        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)

        return result