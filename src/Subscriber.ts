import {Broker} from "./Broker";

export class Subscriber<T> {
    private broker: Broker<T>;

    constructor(broker: Broker<T>) {
        this.broker = broker;
    }

    subscribe(topicName: string) {
        this.broker.subscribe(this, topicName);
    }
}