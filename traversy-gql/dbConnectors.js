const  Sequelize = require('sequelize');
// import mysql from 'mysql2';



// sequelize connection
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


// MYSQL
const Players = sequelize.define('player', {
  id: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Teams = sequelize.define('team', {
  id: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },
  pool: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Users = sequelize.define('user', {
  uid: {
    type: Sequelize.SMALLINT,
    allowNull: true,
    //primaryKey: true,
    //autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: true });

module.exports = { Players, Teams, Users };