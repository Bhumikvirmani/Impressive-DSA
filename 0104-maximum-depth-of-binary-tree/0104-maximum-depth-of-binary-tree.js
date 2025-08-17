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
    // Solution 1: DFS PostOrder Triversal Approch
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


    //Solution 2: BFS Approch 
    // Edge case: if the tree is empty, depth is 0
    // if (root == null) return 0;

    // // Initialize a queue for level-order traversal
    // let queue = [root];
    // let depth = 0;

    // // While there are nodes to process
    // while (queue.length > 0) {
    //     // Number of nodes at the current level
    //     let levelSize = queue.length;

    //     // Process all nodes at this level
    //     for (let i = 0; i < levelSize; i++) {
    //         let current = queue.shift(); // Dequeue the front node

    //         // Enqueue left and right children if they exist
    //         if (current.left) queue.push(current.left);
    //         if (current.right) queue.push(current.right);
    //     }

    //     // After processing one full level, increment depth
    //     depth++;
    // }

    // // Final depth after all levels are processed
    // return depth;


};