const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

async function init() {

    const producer = kafka.producer()

    console.log("Producer connecting...");
    await producer.connect()
    console.log("Producer connected...");

    console.log("topics creation started...");
    await producer.createTopics({
        topics: [
            {
                topic: "Auth",
                numPartition: 2
            },
            {
                topic: "database"
            },
            {
                topic: "email"
            },
            {
                topic: "server"
            },
            {
                topic: "service"
            }
        ],
    });
    console.log("Topics created successfully!");

    console.log("producer disconnecting!");
    await producer.disconnect()
    console.log("producer disconected successfully");
}

init();
