import { Broker } from "./Broker";

export class Publisher<T> {
    private readonly broker: Broker<T>;
    constructor(worker: Broker<T>) {
        this.broker = worker;
    }

    publishToTopic(topicName: string, payload: T) {
        this.broker.publish(topicName, payload);
    }

    getBroker() {
        return this.broker;
    }
}