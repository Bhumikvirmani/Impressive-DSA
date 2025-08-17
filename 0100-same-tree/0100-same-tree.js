/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Base case: if either node is null
    // Return true only if both are null (i.e., both trees end here)
    if (p == null || q == null) {
        return (p == q); // true if both null, false if only one is null
    }

    // Check current node values and recursively check left and right subtrees
    return (
        p.val == q.val &&                     // current node values match
        isSameTree(p.left, q.left) &&        // left subtrees match
        isSameTree(p.right, q.right)         // right subtrees match
    );
};