import {Kafka} from "kafkajs"


const kafka = new Kafka({
  clientId: "post-service",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const publishNewPostEvent = async (postId) => {
  try {
    await producer.send({
      topic: "post-events",
      messages: [{ value: JSON.stringify({ postId }) }],
    });
    console.log("New post event published to Kafka");
  } catch (error) {
    console.error("Error publishing new post event:", error);
  }
};

export default publishNewPostEvent
