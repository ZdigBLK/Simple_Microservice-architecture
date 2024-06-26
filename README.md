# Overview of the Project:
This project is a microservices-based application designed to handle user authentication and post management functionalities. It consists of two main microservices: auth and post. The auth microservice handles user authentication tasks such as registration and login, while the post microservice manages operations related to posts. These microservices communicate asynchronously through Kafka, allowing for scalable and resilient interactions while maintaining loose coupling between components.
# Microservices Architecture (Auth and Post)
**Auth Microservice:** This microservice is responsible for user authentication and operates on a MongoDB database. When a user registers or logs in, the auth microservice emits relevant events to Kafka. It communicates with the post microservice to handle user-related events such as user registration.

**Post Microservice:** Managing post-related operations, this microservice operates on a PostgreSQL database. It subscribes to events emitted by the auth microservice through Kafka, reacting to events like user registration. Similarly, when a new post is created, it emits a "new post" event to Kafka for other microservices to consume.
# Kafka Integration:
**producer-Consumer Model:** Each microservice has its own Kafka producer and consumer. Producers are responsible for publishing events to Kafka topics, while consumers subscribe to these topics to process incoming events. The auth microservice's producer publishes events related to user registration and login, while the post microservice's producer publishes events related to post creation. Consumers react to these events accordingly.
**Topics:** Kafka topics serve as communication channels between microservices. Events related to user registration and post creation are published to separate topics. This segregation ensures efficient event handling within each microservice, allowing for clear and scalable communication.
# API DOCS:
Complete REST API Documentation can be found: [Here](https://documenter.getpostman.com/view/28704515/2sA3JM61RS)
