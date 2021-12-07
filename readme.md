# Interview Task for YouVerify

This is the solution to the youverify interview task

### Stack
Simple Ecommerce as microservices with MongoDB database.
- NodeJS
- MongoDB
- RabbitMQ
- Docker

### Microservices

- [Customer Service](./customer_service)
- [Order Service](./order_service)
- [Product Service](./product-service)
- [Payment Service](./payment-service)
- [RabbitMQ Messaging Queue])
- [MongoDB Databse]

### How to run the ecommerce app

Docker must me installed

```
docker-compose up --build
```

This will basically build and install every microservice, setup them up as docker containers

and deploy every docker service.


