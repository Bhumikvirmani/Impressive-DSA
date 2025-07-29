
var MinStack = function() {
    // mainStack stores all the values as usual for a stack
    this.mainStack = [];
    // minStack stores the minimum value at each level
    this.minStack = [];
};

/**
 * Pushes the element onto the stack
 * @param {number} val
 */
MinStack.prototype.push = function(val) {
    // Push onto mainStack normally
    this.mainStack.push(val);

    // For minStack:
    // If minStack is empty, or val is smaller than or equal to top of minStack, push val
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    } else {
        // Else, push the current top again (keeping track of the current min at every level)
        this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
};

/**
 * Pops the element from the stack
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Pop from both stacks to keep them aligned
    this.mainStack.pop();
    this.minStack.pop();
};

/**
 * Gets the top element of the stack without removing it
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length - 1];
};

/**
 * Retrieves the minimum element in the stack
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */