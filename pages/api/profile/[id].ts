import type { NextApiRequest, NextApiResponse } from 'next' 
import { client } from './../../../utils/client'; // sanity's database client
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === 'GET') {
    const {id} = req.query;
    const query = singleUserQuery(id);
    const userVideosQuery = userCreatedPostsQuery(id);
    const userLikedVideosQuery = userLikedPostsQuery(id);

    const user = await client.fetch(query); 
    const userVideos = await client.fetch(userVideosQuery); 
    // user videos is not showing for some reason. I have to fix this later. Maybe it has something to do with userCreatedPostQuery check it.
    // console.log("UserVideos => ", userVideosQuery);
    const userLikedVideos = await client.fetch(userLikedVideosQuery); 
    res.status(200).json({user: user[0], userVideos, userLikedVideos});
  }
}