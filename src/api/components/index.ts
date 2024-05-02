import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export default createRouter<NextApiRequest, NextApiResponse>()
  .get(async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    res.json("Hello there!");
  })
  .handler();
