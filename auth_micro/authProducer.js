// authProducer.js

// const { Kafka } = require("kafkajs");
import {Kafka} from "kafkajs"

const kafka = new Kafka({
  clientId: "auth-service",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const publishUserRegisteredEvent = async (userId) => {
  try {
    await producer.send({
      topic: "auth-events",
      messages: [{ value: JSON.stringify({ userId }) }],
    });
    console.log("User registered event published to Kafka");
  } catch (error) {
    console.error("Error publishing user registered event:", error);
  }
};

export default publishUserRegisteredEvent


// module.exports = { publishUserRegisteredEvent };
