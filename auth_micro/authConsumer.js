// authConsumer.js

// const { Kafka } = require("kafkajs");
import {Kafka} from "kafkajs"


const kafka = new Kafka({
  clientId: "auth-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "auth-group" });

const startAuthConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "post-events" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

export default startAuthConsumer
// module.exports = { startAuthConsumer };
