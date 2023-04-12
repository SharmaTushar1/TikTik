// here we are creating a authorizing a new user if the response is successful. The method is post because we are creating something in the database.

import type { NextApiRequest, NextApiResponse } from 'next' 
import { client } from './../../utils/client'; // sanity's database client

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === 'POST') {
    const user = req.body;
    client.createIfNotExists(user)
      .then(() => res.status(200).json('Login success'))
  }
}
