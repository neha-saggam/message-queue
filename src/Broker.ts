import {Topic} from "./Topic";
import {Subscriber} from "./Subscriber";

export class Broker<T> {
    private readonly topics: Topic<T>[];
    constructor(topics: Topic<T>[]) {
        this.topics = topics;
    }

    publish(topicName: string, payload: T) {
        const filteredTopic = this.topics.find((topic) => topic.name === topicName);
        if(!filteredTopic) {
            throw new Error("No topic name found");
        }
        filteredTopic.enqueue(payload);
        this.processRequest(filteredTopic);
    }

    getTopics() {
        return this.topics;
    }

    processRequest(filteredTopic: Topic<T>) {
        const payload = filteredTopic.dequeue();
        if(payload) {
            filteredTopic.getSubscribers().forEach((subscriber: Subscriber<T>) => {
                return subscriber.onMessage(payload);
            });
        }
    }

    subscribe(subscriber: Subscriber<T>, topicName: string) {
        const filteredTopic = this.topics.find((topic) => topic.name === topicName);
        if(!filteredTopic) {
            throw new Error("No topic name found");
        }
        filteredTopic.addSubscriber(subscriber);
    }
}