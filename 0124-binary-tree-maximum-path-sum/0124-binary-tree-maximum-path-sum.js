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
var maxPathSum = function(root) {
    let maxi = -Infinity;
    function height(node){
        if(node == null)return 0;
        // Recursively get left and right max path sums
        let lh = Math.max(0, height(node.left));  // Ignore negative paths
        let rh = Math.max(0, height(node.right)); // Ignore negative paths

        // Update global maximum if current path is better
        maxi = Math.max(maxi, lh + rh + node.val);

        // Return max path sum including current node and one subtree
        return node.val + Math.max(lh, rh);

    }
    height(root);
    return maxi;
};