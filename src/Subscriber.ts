import {Broker} from "./Broker";

export class Subscriber<T> {
    private broker: Broker<T>;
    private messages: T[];

    constructor(broker: Broker<T>) {
        this.broker = broker;
        this.messages = [];
    }

    subscribe(topicName: string) {
        this.broker.subscribe(this, topicName);
    }

    onMessage(message: T) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }
}