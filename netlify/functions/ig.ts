import { MongoClient, ServerApiVersion } from "mongodb";
const MONGODB_COLLECTION = 'tokens';
const value = process.env.MY_IMPORTANT_VARIABLE;
const MONGODB_URI = process.env.MONGODB_DATABASE;

let cachedDb = null;

const connectToDatabase = async (uri) => {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db("webworks");

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

const pushToDatabase = async (db, data) => {
  const pokemonData = {
    name: data.name,
    number: data.number,
  };

  if (pokemonData.name && pokemonData.number) {
    await db.collection("pokemon").insertMany([data]);
    return { statusCode: 201 };
  } else {
    return { statusCode: 422 };
  }
};

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);

  switch (event.httpMethod) {
    case "GET":
      return queryDatabase(db);
    case "POST":
      return pushToDatabase(db, JSON.parse(event.body));
    default:
      return { statusCode: 400 };
  }
};