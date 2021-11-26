// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

const {promisify} = require('util')

type Data = {
  name: string;
  email: string;
}

type ErrorResponse = {
  error: string;
  resolution: string;
}
const sleep = promisify(setTimeout)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorResponse>
) {
  await sleep(2000)
  const {id} = req.query;
  if (+id === 1) {
    res.status(200).json({name: 'John Doe', email: "jdoe@gmail.com"})
  } else {
    res.status(403).json({error: "Unknown User", resolution: "use a valid user id"})
  }
}
