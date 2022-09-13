import type { NextApiRequest, NextApiResponse } from "next"
import { ObjectId } from "mongodb"

import connectDb from "../../util/connectDb"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await connectDb()

  const result = await client
    .db()
    .collection("orders")
    .find({ _id: new ObjectId("62cac264a1fc59bf85f600d7") })
    .toArray()
  console.log(result)
  res.json(result)
  client.close()
}

export default handler
