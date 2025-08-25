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
var verticalTraversal = function(root) {
    // If the tree is empty, there’s nothing to list.
    if (!root) return [];

    // This will store little "notes" about every node we see:
    // each note is [x, level, val].
    const notes = [];

    // Our BFS queue. Each item is [node, level, x].
    // Start with the root at level = 0 and x = 0.
    const queue = [[root, 0, 0]];

    // 1) BFS: visit nodes level by level (like reading a book line by line).
    while (queue.length) {
        // Take the first item in the line (queue).
        const [node, level, x] = queue.shift();

        // Write down this node’s "address" on our graph paper: (x, level) and its value.
        notes.push([x, level, node.val]);

        // If there is a left child, it lives one level down and one x to the left.
        if (node.left) {
        queue.push([node.left, level + 1, x - 1]);
        }

        // If there is a right child, it lives one level down and one x to the right.
        if (node.right) {
        queue.push([node.right, level + 1, x + 1]);
        }
    }

    // 2) Sort the notes so they appear in the exact order we want to read them:
    // - First by x (left streets first),
    // - If x is the same, by level (higher floors first),
    // - If x and level are the same, by value (smaller number first).
    notes.sort((a, b) =>
        // Compare x: smaller x (more left) should come first.
        a[0] - b[0] ||
        // If x is the same, compare level: smaller level (closer to top) should come first.
        a[1] - b[1] ||
        // If x and level are the same, compare the values: smaller value first.
        a[2] - b[2]
    );

    // 3) Group values by x so each inner list is one vertical line on the paper.
    const result = [];

    // If there are no notes (shouldn't happen because root exists), return empty.
    if (notes.length === 0) return result;

    // We start a new group for the first x we see.
    let currentX = notes[0][0]; // the x of the first note
    let group = [];             // a basket to hold all values that share this x

    // Walk through all the notes in sorted order.
    for (const [x, /* level (unused here) */, val] of notes) {
        // If we moved to a new x (a new vertical line),
        // we should finish the old group and start a fresh one.
        if (x !== currentX) {
        result.push(group);   // save the completed group
        group = [];           // empty the basket
        currentX = x;         // remember the new street (x)
        }
        // Put this value into the current basket for this x.
        group.push(val);
    }

    // After the loop ends, we still have one last basket to save.
    result.push(group);

    // The result is like reading buildings column by column from left to right.
    return result;

};