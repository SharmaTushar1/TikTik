// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { allPostsQuery } from './../../../utils/queries';
import { client } from './../../../utils/client';
import type { NextApiRequest, NextApiResponse } from 'next' 
import { json } from 'stream/consumers';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = allPostsQuery();
    // here's the API call from backend
    const data = await client.fetch(query); // passing the query for fetching on the client
    res.status(200).json(data);
  }
}
