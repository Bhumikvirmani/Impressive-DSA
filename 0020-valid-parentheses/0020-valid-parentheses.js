/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // Think of this like a pile of plates

    // Each closing bracket must match its opening friend
    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Look at each bracket one at a time
    for (let char of s) {
        // If it's an opening bracket, stack (add) it
        if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
        } else {
        // If it's a closing bracket, see if it matches the last one
        if (stack.length === 0) {
            // No plates to take, so it's not valid
            return false;
        }
        let last = stack.pop(); // Take off the top plate
        if (last !== pairs[char]) {
            // The plates/brackets don't match
            return false;
        }
        }
    }

    // At the end, everything should be matched up
    return stack.length === 0;   
};