import { Topic } from './Topic';

describe('Topic', () => {
    test('should enqueue payload to topic', () => {
        const topic = new Topic("first-topic");
        topic.enqueue({ key: "someValue"})
        expect(topic.dequeue()).toEqual({"key": "someValue"});
    });
});
