import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient } from "mongodb";
import fetch from 'node-fetch';

const MONGODB_URI = process.env.MONGODB_DATABASE;
const DB_NAME = 'webworks';
const value = process.env.MY_IMPORTANT_VARIABLE;
let cachedDb = null;

async function getData() {
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    const test = await client
      .db('webworks')
      .collection('tokens')
      .find();
    return test;
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await client.close();
  }
}

exports.handler = async function(event, context) {
  try {
    const data = await getData();
    return {
      statusCode: 200,
      body: JSON.stringify({ id: data._id })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) 
    };
  }
};