//Create a MongoClient instance and connects to mongodb
const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.DATABASE_URL)
      .then(client => {
        dbConnection = client.db();
        return cb();
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      })
  },
  getDb: () => dbConnection
}