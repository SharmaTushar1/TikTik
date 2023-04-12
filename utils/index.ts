import axios from "axios";
import jwt_decode from 'jwt-decode'; // needed to decode the credential and get the image of the user

export const createOrGetUser = async (response: any) => {

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
  await axios.post(`http://localhost:3000/api/auth`, user);
};