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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    let queue = [root];       // Start with root in the queue
    let result = [];
    let flag = 0;             // 0 = left to right, 1 = right to left

    while (queue.length > 0) {
        let currentLength = queue.length;
        let level = [];       // Store nodes of current level

        for (let i = 0; i < currentLength; i++) {
            let currentNode = queue.shift();

            // Add node value based on flag
            if (flag === 0) {
                level.push(currentNode.val);        // Left to right
            } else {
                level.unshift(currentNode.val);     // Right to left
            }

            // Enqueue children
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result.push(level);   // Add current level to result
        flag = 1 - flag;      // Flip direction for next level
    }

    return result;
};