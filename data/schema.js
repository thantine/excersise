import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from "graphql";
import config from "../config";

let Schema = (db) => {

  let messageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
      _id: { type: GraphQLString },
      content: { type: GraphQLString }
    })
  });

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: () => ({
        messages: {
          type: GraphQLList(messageType),
          resolve: () => db.collection(config.collectionName).find({}).toArray()
        }
      })
    }),
  });

  return schema;

}


export default Schema;