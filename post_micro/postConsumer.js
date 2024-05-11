import {Kafka} from "kafkajs"


const kafka = new Kafka({
  clientId: "post-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "post-group" });

const startPostConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "auth-events" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

export default startPostConsumer

