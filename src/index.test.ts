import {Topic} from "./Topic";
import {Broker} from "./Broker";
import {Publisher} from "./Publisher";
import {Subscriber} from "./Subscriber";

describe('main function', () => {

    test('should publish topic and subscriber should receive it', () => {
        const topic = new Topic("first-topic");
        const broker = new Broker([topic]);

        const publisher = new Publisher(broker);
        const subscriber = new Subscriber(broker);

        subscriber.subscribe(topic.name);

        const messages = [
            { id: 1, status: "orderPlaced" },
            { id: 1, status: "orderReceived" }
        ]
        publisher.publishToTopic(topic.name, messages[0]);
        publisher.publishToTopic(topic.name, messages[1]);

        expect(subscriber.getMessages()).toEqual(messages);
    });
});