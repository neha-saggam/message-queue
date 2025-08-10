# Message Queue

A lightweight, in-memory message queue implementation in TypeScript with a publish-subscribe pattern. This project demonstrates a simple message queuing system.

## 🏗️ Architecture

The project implements a classic publish-subscribe pattern with the following core components:

- **Topic**: Manages a queue of messages and maintains a list of subscribers
- **Broker**: Central message broker that handles message routing and subscriber management
- **Publisher**: Publishes messages to specific topics
- **Subscriber**: Receives messages from subscribed topics

## 📁 Project Structure

```
src/
├── Topic.ts          # Topic class for message queuing
├── Broker.ts         # Central message broker
├── Publisher.ts      # Message publisher
├── Subscriber.ts     # Message subscriber
├── index.ts          # Main entry point
└── *.test.ts         # Test files for each component
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/neha-saggam/message-queue.git
cd message-queue

# Install dependencies
npm install

# Build the project
npm run build
```

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Integration Test

The main integration test (`src/index.test.ts`) demonstrates the complete message flow:

```typescript
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
```

This test validates the complete message flow:
1. **Topic Creation**: Creates a new topic with a specific name
2. **Broker Setup**: Initializes the broker with the topic
3. **Publisher/Subscriber Setup**: Creates publisher and subscriber instances
4. **Subscription**: Subscriber subscribes to the topic
5. **Message Publishing**: Publisher sends multiple messages to the topic
6. **Message Reception**: Verifies that the subscriber receives all published messages in order

## 💻 Usage

### Basic Example

```typescript
import { Topic, Broker, Publisher, Subscriber } from './src';

// Create a topic
const orderTopic = new Topic("orders");

// Initialize broker with topics
const broker = new Broker([orderTopic]);

// Create publisher and subscriber
const orderPublisher = new Publisher(broker);
const orderSubscriber = new Subscriber(broker);

// Subscribe to the topic
orderSubscriber.subscribe("orders");

// Publish messages
orderPublisher.publishToTopic("orders", { 
    orderId: "123", 
    status: "pending" 
});

// Get received messages
const messages = orderSubscriber.getMessages();
```

### Advanced Example with Multiple Topics

```typescript
// Create multiple topics
const userTopic = new Topic("users");
const orderTopic = new Topic("orders");
const notificationTopic = new Topic("notifications");

// Initialize broker with all topics
const broker = new Broker([userTopic, orderTopic, notificationTopic]);

// Create specialized publishers
const userPublisher = new Publisher(broker);
const orderPublisher = new Publisher(broker);

// Create specialized subscribers
const userSubscriber = new Subscriber(broker);
const orderSubscriber = new Subscriber(broker);

// Subscribe to relevant topics
userSubscriber.subscribe("users");
orderSubscriber.subscribe("orders");

// Publish messages to different topics
userPublisher.publishToTopic("users", { userId: "456", action: "login" });
orderPublisher.publishToTopic("orders", { orderId: "789", total: 99.99 });
```

## 🐛 Issues

Report bugs and feature requests on the [GitHub issues page](https://github.com/neha-saggam/message-queue/issues).

## 🔮 Future Enhancements

- **Persistence**: Add message persistence to disk/database
- **Message acknowledgment**: Implement delivery confirmation
- **Dead letter queue**: Handle failed message processing
- **Message TTL**: Add message expiration