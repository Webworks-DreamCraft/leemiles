import { createRequire } from "module";
const require = createRequire(import.meta.url);

import fetch from "node-fetch";
import { schedule } from "@netlify/functions";
require("dotenv").config();

const refresh = schedule("0 0 1,5 * *", async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.VITE_LONG_TOKEN}`
    );
    const data = await response.json();

    if (data.expires_in > 5100000) {
      return {
        status: 200,
      };
    }

    return {
      status: 400,
      expiration: data.expires_in,
    };
  } catch (err) {
    console.log("catch:", err);
  }
});

export { refresh };
