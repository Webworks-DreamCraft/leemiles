import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient, ServerApiVersion } from "mongodb";
const MONGO_HOST = process.env.MONGODB_DATABASE;
const DB_NAME = 'webworks';
const MONGODB_COLLECTION = 'tokens';
const value = process.env.MY_IMPORTANT_VARIABLE;

export const mongoClient = new MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const clientPromise = mongoClient.connect();

const connectDB = async () => {
  try {
    const database = (await clientPromise).db(DB_NAME);
    const collection = database.collection(MONGODB_COLLECTION);
    console.log("[db] Conectada con éxito", collection);

    const results = await collection.find({}) || 'found nothing';
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() };
  }
};

export default connectDB;