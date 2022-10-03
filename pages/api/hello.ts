import { NextApiRequest, NextApiResponse } from 'next'

import nc from "next-connect";

const handler = nc({
  onError: (err, req: NextApiRequest ,res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req: NextApiRequest ,res: NextApiResponse) => {
    res.status(404).end("Page is not found");
  },
})
  .get((req: NextApiRequest ,res: NextApiResponse) => {
    res.send("Hello world");
  })
  .post((req: NextApiRequest ,res: NextApiResponse) => {
    res.json({ hello: "world" });
  })
  .put(async (req: NextApiRequest ,res: NextApiResponse) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req: NextApiRequest ,res: NextApiResponse) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
