import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  
  const value = process.env.VITE_MONGO;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.`}),
  };  
};

export { handler };