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
    const storageKeys = Object.keys(this.storage);
    const val = this.storage[storageKeys[0]];
    delete this.storage[storageKeys[0]]
    this.queueSize--;
    return val;
  }
}
