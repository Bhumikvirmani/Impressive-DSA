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
var preorderTraversal = function(root) {
    const result = []; // Initialize an array to store the traversal result

    // Helper function to recursively traverse the tree
    const traverse = (node) => {
        if (!node) return; // Base case: if the current node is null, stop

        result.push(node.val); // Step 1: Process the current node (root)

        traverse(node.left);  // Step 2: Recursively traverse the left subtree
        traverse(node.right); // Step 3: Recursively traverse the right subtree
    };

    traverse(root); // Start traversal from the root node
    return result;  // Return the final preorder list

};