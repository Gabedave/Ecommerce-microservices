# Interview Task for YouVerify

This is the solution to the youverify interview task

### Stack
Simple Ecommerce as microservices with MongoDB database.
Requirements:
- NodeJS
- MongoDB
- RabbitMQ
- Docker

### Microservices

- [Customer Service](./customer_service)
- [Order Service](./order_service)
- [Product Service](./product_service)
- [Payment Service](./payment_service)
- [Payment Worker](./payment_worker)
- [RabbitMQ Messaging Queue])
- [MongoDB Databse]

### How to run the ecommerce app


Install MongoDB replica set and run it using

```
npm install run-rs -g 
```
```
run-rs -v 4.0.0
```


Rabbitmq must be installed

Add rabbitmq connection string to [docker-compose.yaml](./docker-compose.yaml) for the payment service and payment worker

default username: 'guest'
default pass: 'guest


Docker must be installed

```
docker-compose up --build
```

This will basically build and install every microservice, setup them up as docker containers and deploy every docker service.


### Testing

Using Postman

To test the e-commerce app, populate the customers and products collection with one item each.

This can be used

```
{
    "username": "customerA",
    "email": "customerA@gmail.com",
    "firstName": "customer",
    "lastName": "A"
}
```

```
{
    "productId": "product1234",
    "name": "table",
    "description": "short table",
    "price": 5.99
}
```

Send a post request from POSTMAN containing the following raw json
```
{
    "username": "customerA",
    "productId": "product1234",
    "amount": 6.34
}
```

You should receive a 201 response
```
{
    "success": true,
    "data": {
        "customerId": "customerA",
        "productId": "product1234",
        "orderId": "{orderId}",
        "orderStatus": "pending"
    }
}
```

You should notice new enteries added to the Transactions and Orders collections

Trasactions collection
```
{
    "_id": {
        "$oid": "{ObjectId}"
    },
    "customerId": {
        "$oid": "{ObjectId}"
    },
    "productId": {
        "$oid": "{ObjectId}"
    },
    "orderId": {
        "$oid": "{ObjectId}"
    },
    "amount": "6.34",
    "date": {
        "$date": "{Date}"
    },
    "__v": 0
}
```

Orders collection
```
{
    "_id": {
        "$oid": "{ObjectId}"
    },
    "customerId": {
        "$oid": "{ObjectId}"
    },
    "productId": {
        "$oid": "{ObjectId}"
    },
    "amount": "6.34",
    "date": {
        "$date": "{Date}"
    },
    "__v": 0
}
```


