export default {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  connectionString: "mongodb+srv://thantine:Aa123456@cluster0-gk7nz.mongodb.net/test?retryWrites=true",
  dbName: "messagesdb",
  collectionName: "messages"
}