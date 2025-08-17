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
 * @return {number}
 */
var maxDepth = function(root) {
    // Base case: if the current node is null, we've reached beyond a leaf node
    // So we return 0 as there's no depth to add
    if (root == null) return 0;

    // Recursively compute the depth of the left subtree
    // This is a DFS call that goes as deep as possible down the left child
    let lh = maxDepth(root.left);

    // Recursively compute the depth of the right subtree
    // Another DFS call that explores the right child fully
    let rh = maxDepth(root.right);

    // Once both left and right depths are known, take the maximum of the two
    // and add 1 to account for the current node's level
    return 1 + Math.max(lh, rh);

};