const DB = require('./server/models');
const Uzmug = require('umzug');
const Path = require('path');
const Sequelize = require('sequelize');
const mySql = require('mysql2/promise');
const Config = require('./server/config/config.json');

const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const umzug = new Uzmug({
   migrations: {
      path: Path.join(__dirname, './server/migrations'),
      params: [DB.sequelize.getQueryInterface(), Sequelize.DataTypes],
   },
   storage: 'sequelize',
   storageOptions: {
      sequelize: DB.sequelize,
   },
   logging: false,
});

// it will create DB if there DB does not exists, [ if DB is not available, Sequelize with throw error of DB not found ]
const createDB = async () => {
   await mySql
      .createConnection({
         host: config.host,
         port: config.port,
         user: config.username,
         password: config.password,
      })
      .then((connection) => {
         connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database || 'jupiter_dev_db'};`).then((res) => {
            console.info('Database create or successfully checked');
         });
      });
};

// currently it is just running up function to create tables will add other functions in it for future needs
const runMigrations = async () => {
   try {
      await createDB();
      await DB.sequelize
         .sync()
         .then(async () => {
            console.log('Connection established with MySQL');
         })
         .catch((error) => console.log('error', error));
          await umzug.up();
          // await umzug.down({ to: 0 });
      console.log('run all migrations successfully');
   } catch (error) {
      console.log(error);
   }
};

module.exports = runMigrations;
