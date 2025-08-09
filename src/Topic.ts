export class Topic<T> {
    name: string;
    private queue: T[];

    constructor(name: string) {
            this.name = name;
            this.queue = [];
    }

    enqueue(payload: T) {
        this.queue.push(payload);
    }

    dequeue() {
        return this.queue.shift();
    }
}