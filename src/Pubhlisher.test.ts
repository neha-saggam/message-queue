import { Broker } from './Broker';
import {Topic} from "./Topic";
import {Publisher} from "./Publisher";

describe('Publisher', () => {
    test('should be able to publish a topic', () => {
        const topic = new Topic("first-topic");
        const broker = new Broker([topic]);
        const publisher = new Publisher(broker);

        publisher.publishToTopic(topic.name, { id: 1, status: "orderPlaced" });
        publisher.publishToTopic(topic.name, { id: 1, status: "orderReceived" });

        expect(publisher.getBroker().getTopics()[0]!.dequeue()).toEqual({ id: 1, status: "orderPlaced" });
        expect(publisher.getBroker().getTopics()[0]!.dequeue()).toEqual({ id: 1, status: "orderReceived" });
    });
});
