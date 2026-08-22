/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(subRoot === null){
    return true;
    }

    if(root === null){
        return false;
    }

    if(this.isSameTree(root, subRoot)){
        return true
    }

    return(
        this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    )
}
private isSameTree(
    p:TreeNode |null,
    q:TreeNode | null
):boolean{
    if(p===null && q===null){
        return true
    }
    if (p === null || q ===null){
        return false
    }
    if(p.val !== q.val){
        return false
    }
    return (
        this.isSameTree(p.left, q.left)&&this.isSameTree(p.right, q.right)
    )
}
}
