const express = require ('express');
const expressGraphQL = require('express-graphql');
const schema = require ('./schema');
//const mysql = require ('mysql');
const Sequelize = require('sequelize');

/*
// sequelize connection - now happening in dbconnectors.js file
const sequelize = new Sequelize('rugby7test', 'root', '1234abcd', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to MySQL database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  */


const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));