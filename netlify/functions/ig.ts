import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_DATABASE;
const DB_NAME = 'webworks';
const value = process.env.MY_IMPORTANT_VARIABLE;
let cachedDb = null;

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);

  return cachedDb;
};

const queryDatabase = async (db) => {
  const pokemon = await db.collection("tokens").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);
  const results = queryDatabase(db);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}. ${results}`}),
    };  
  } catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
};

export { handler };