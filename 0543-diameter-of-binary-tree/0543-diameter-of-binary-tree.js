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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function height(node){
        // DFS PostOrder Triversal 
        // Recursively get height of left and right subtrees
        if(node == null) return 0;
        let left = height(node.left);
        let right = height(node.right);

        // Update maxDiameter if the path through this node is longer
        maxDiameter = Math.max(maxDiameter, left + right);

        // Return height of current node
        return 1 + Math.max(left, right);
    }
    height(root);
    return maxDiameter;
};