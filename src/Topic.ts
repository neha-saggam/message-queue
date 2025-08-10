import {Subscriber} from "./Subscriber";

export class Topic<T> {
    name: string;
    private queue: T[];
    private subscribers: Subscriber<T>[];

    constructor(name: string) {
            this.name = name;
            this.queue = [];
            this.subscribers = [];
    }

    enqueue(payload: T) {
        this.queue.push(payload);
    }

    dequeue() {
        return this.queue.shift();
    }

    addSubscriber(subscriber: Subscriber<T>) {
        this.subscribers.push(subscriber);
    }

    getSubscribers() {
        return this.subscribers;
    }
}