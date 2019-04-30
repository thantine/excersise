import express from "express";
import {MongoClient} from "mongodb";
import config from "./config";

const app = express();
const mongoClient = new MongoClient(config.connectionString, { useNewUrlParser: true });

app.use(express.static('public'));

let db;

mongoClient.connect(err => {
  if (err) throw err;
  db = mongoClient.db(config.dbName);
  app.listen(config.port, () => console.log(`server is running on ${config.host}:${config.port}`));
});

app.get("/data/messages", (_, res) => {
  db.collection(config.collectionName).find({}).toArray((err, messages) => {
    if (err) throw err;

    mongoClient.close();
    res.json(messages);
  });
});