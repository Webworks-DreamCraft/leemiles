import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const clientPromise = mongoClient.connect();

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const database = (await clientPromise).db('webworks');
    const collection = database.collection('tokens');
    const results = await collection.find({}).limit(10).toArray();

    const value = process.env.MY_IMPORTANT_VARIABLE;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}. ${results}`}),
    };  
  } catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
};

export { handler };