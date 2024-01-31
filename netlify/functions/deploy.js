// YOUR_BASE_DIRECTORY/netlify/functions/

import type { Config } from "@netlify/functions"

export default async (req: Request) => {
    const { next_run } = await req.json()
e
    console.log("Received event! Next invocation at:", next_run)
}

export const config: Config = {
    schedule: "@hourly"
}
