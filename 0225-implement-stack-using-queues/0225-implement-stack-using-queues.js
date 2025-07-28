
var MyStack = function() {
    this.queue = [];// Use an array to simulate a queue
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);// enqueue new element to back

    
    // Rotate the queue to move the new element to front
    let size = this.queue.length;

    while(--size){
        // dequeue from front and enqueue to back
        this.queue.push(this.queue.shift()); 
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift(); // dequeue from front = pop stack
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0];// front of queue = top of stack
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */