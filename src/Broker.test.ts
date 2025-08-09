import { Broker } from './Broker';
import {Topic} from "./Topic";

describe('Broker', () => {
    test('should publish payload on topic when publish is called', () => {
        const topic = new Topic("first-topic");
        const broker = new Broker([topic]);
        const payload = { key: "someValue"};
        broker.publish("first-topic", payload)
        expect(broker.getTopics()[0]!.dequeue()).toEqual({"key": "someValue"});
    });
});
