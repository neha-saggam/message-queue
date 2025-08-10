import { Subscriber } from './Subscriber';
import {Topic} from "./Topic";
import {Broker} from "./Broker";

describe('Subscriber', () => {
    test('should be able to subscribe to a topic', () => {
        const topic = new Topic("first-topic");
        topic.enqueue({ key: "someValue"});
        const broker = new Broker([topic]);
        const subscriber = new Subscriber(broker);
        subscriber.subscribe(topic.name);
        expect(broker.getTopics()[0]!.getSubscribers()).toEqual([subscriber]);
    });
});
