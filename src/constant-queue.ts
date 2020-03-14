export class ConstantQueue {
  private storage: {[key: string]: number } = {};
  private queueSize = 0;

  size() {
    return this.queueSize;
  }

  enqueue(val: number) {
    this.storage[this.queueSize] = val;
    this.queueSize++;
  }

  dequeue(): number | null {
    if (this.queueSize < 1) {
      return null;
    }
    const storageKeys = Object.keys(this.storage);
    const val = this.storage[storageKeys[0]];
    delete this.storage[storageKeys[0]]
    this.queueSize--;
    return val;
  }
}

/*
function Queue() {
  this.q = [];
  this.idx = 0;
}

Queue.prototype.size = function() { return this.q.length-this.idx; };

Queue.prototype.enqueue = function(item){
  this.q.push(item)
};

Queue.prototype.dequeue = function() {
  return (this.size() < 1)? undefined : this.q[this.idx++];
}
*/
