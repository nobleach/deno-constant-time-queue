import {
  assertEquals,
} from "./deps.ts";
import {
  ConstantQueue,
} from '../src/constant-queue.ts';

Deno.test({
  name: "It returns the queue size",
  fn(): void {
    const queue = new ConstantQueue();
    assertEquals(0, queue.size());
  }
});

Deno.test({
  name: "It enqueues a value",
  fn(): void {
    const queue = new ConstantQueue();
    queue.enqueue(20);
    assertEquals(1, queue.size());
  }
});

Deno.test({
  name: "It dequeues the next value",
  fn(): void {
    const queue = new ConstantQueue();
    queue.enqueue(20);
    queue.enqueue(25);
    queue.enqueue(42);
    assertEquals(20, queue.dequeue());
  }
});

Deno.test({
  name: "It will not try to call dequeue on an empty queue",
  fn(): void {
    const queue = new ConstantQueue();
    assertEquals(null, queue.dequeue());
  }
});


Deno.test(function example(): void {
  assertEquals("hello", "hello");
});

await Deno.runTests;
