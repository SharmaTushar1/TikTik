import axios from "axios";
import jwt_decode from 'jwt-decode'; // needed to decode the credential and get the image of the user

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any, addUser: any) => {

  const decoded: {name: string, picture: string, sub:string, email: string} = jwt_decode(response.credential);
  console.log("decoded ",decoded);

  const {name, picture, sub, email} = decoded;
  console.log(`name = ${name} picture =  ${picture} sub = ${sub}`)

  const user = {
    _id: sub, 
    _type: 'user',
    userName: name, 
    image: picture,
  }
  // save the user in state locally for current session
  addUser(user);

  await axios.post(`${BASE_URL}/api/auth`, user);
};