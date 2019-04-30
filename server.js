import express from "express";
import {MongoClient} from "mongodb";
import config from "./config";
import SchemaCreator from "./data/schema";
import GraphQLHTTP from "express-graphql";

const app = express();
const mongoClient = new MongoClient(config.connectionString, { useNewUrlParser: true });

app.use(express.static('public'));

let db;

mongoClient.connect(err => {
  if (err) throw err;
  db = mongoClient.db(config.dbName);

  app.use("/graphql", GraphQLHTTP({
    schema: SchemaCreator(db),
    graphiql: true
  }));

  app.listen(config.port, () => console.log(`server is running on ${config.host}:${config.port}`));
});
