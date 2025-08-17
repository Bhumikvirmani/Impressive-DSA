/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Solution 1: DFS + Early Exit(PostOrder Triversal)
    // Helper function to compute height and check balance
    function checkHeight(node) {
        // Base case: null node has height 0
        if (node === null) return 0;

        // Recursively get height of left subtree
        let left = checkHeight(node.left);
        if (left === -1) return -1; // Left subtree is unbalanced

        // Recursively get height of right subtree
        let right = checkHeight(node.right);
        if (right === -1) return -1; // Right subtree is unbalanced

        // If height difference is more than 1, tree is unbalanced
        if (Math.abs(left - right) > 1) return -1;

        // Return height of current node
        return 1 + Math.max(left, right);
    }

    // Final result: if checkHeight returns -1, tree is unbalanced
    return checkHeight(root) !== -1;
};