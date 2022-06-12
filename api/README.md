# Booking (BackEnd)

## An API development made to deal with data requests related to the main application.

![Felipe|Booking](https://img.shields.io/badge/FelipeMDantas-Booking-blue)

<p>

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Mongo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


>Booking is a software that allows its users to search for hotel rooms to reserve.

## Features

- Controllers - CRUD operations, registration, login, validation, authentication, restrict/allow features, etc..
- Models - Mongo Schemas for defining API data structure.
- Routes - specifications concerning the relation between request methods, endpoints and controllers methods.
- Token, user and admin verification via JWTs
- Middlewares for determining the appropriate Routes depending on the path typed.

## Tech

A couple of technologies were employed in this project. Among them:

- [NodeJS] - an asynchronous event-driven JavaScript runtime environment
- [MongoDB] - a NoSQL source-available cross-platform document-oriented database program
- [Express] - a NodeJS web application framework that provides a robust set of features for web and mobile applications
- [Nodemon] - a tool that automatically restarts the NodeJS application when file changes in the directory are detected
- [Dotenv] - a module that loads environment variables from a .env file into process.env.
- [Mongoose] - a schema-based solution to model application data
- [bcrypt] - a library for passwords hashing
- [JSON Web Token] - an open method for representing claims securely between two parties
- [cookie-parser] - parses Cookie header and populates req.cookies with an object keyed by the cookie names
- [cors] - provides an Express middleware that can be used to enable CORS with various options

    [NodeJS]: https://nodejs.org/en/
    [MongoDB]: https://www.mongodb.com/
    [Express]: https://expressjs.com/pt-br/
    [Nodemon]: https://www.npmjs.com/package/nodemon
    [Dotenv]: https://dotenv.org/
    [Mongoose]: https://mongoosejs.com/
    [bcrypt]: https://www.npmjs.com/package/bcrypt
    [JSON Web Token]: https://jwt.io/
    [cookie-parser]: https://github.com/expressjs/cookie-parser
    [cors]: https://github.com/expressjs/cors