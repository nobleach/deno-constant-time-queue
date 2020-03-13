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

  dequeue(): number {
    const val = this.storage[this.queueSize - 1];
    delete this.storage[this.queueSize - 1]
    this.queueSize--;
    return val;
  }
}
