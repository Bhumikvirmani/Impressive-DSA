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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = []; // This array will hold the final traversal result

    // Define a helper function to perform recursive traversal
    const traversel = (node) => {
        if (!node) return;       // Base case: if the node is null, there's nothing to do

        traversel(node.left);    // Step 1: Recursively visit the left subtree
        traversel(node.right);   // Step 2: Recursively visit the right subtree
        result.push(node.val);   // Step 3: After children, process the current node (postorder!)
    };

    traversel(root);             // Kick off the traversal starting from the root
    return result;               // Return the collected values in postorder sequence
};
