/** Node: node for a queue. */
const LinkedList = require("../dsa-arrays-linked-lists/linked-list");


class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor(val=[])  { 
    this._ll = new LinkedList(val); 
    
    this.first = this._ll.head;
    this.last = this._ll.tail;
    this.size = this._ll.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);
    
    this.first = this._ll.head;
    this.last = this._ll.tail;
    this.size = this._ll.length;
    
  }
  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0) throw new Error;
    const removeItem = this._ll.shift();
    this.first = this._ll.head;
    this.last = this._ll.tail;
    this.size = this._ll.length;

    return removeItem;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return true;
    return false;
  }
}

module.exports = Queue;
