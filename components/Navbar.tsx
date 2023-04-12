import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {IoMdAdd} from 'react-icons/io';
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import Logo from '../utils/tiktik-logo.png'
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';

// basically a navbar of full width

const Navbar = () => {
  const {userProfile, addUser} = useAuthStore();
  return (
    <div className='w-full flex justify-between
    items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href = "/">
            <div className='w-[100px] md:w-[130px]'>
                <Image 
                className='cursor-pointer'
                src = {Logo}
                alt = 'TikTik logo' 
                layout = 'responsive'>

                </Image>
            </div>
        </Link>
        <div>SEARCH</div>
        <div>
          {userProfile?(
            <div className='flex gap-5 md:gap-10'>
              {/* Button for uploading posts this is incomplete right now will finish this on next commit */}
              <Link href='/upload'>
                <button>
                  <IoMdAdd className='text-xl' /> {' '}
                  <span className='hidden md:block'>Upload</span>
                </button>
              </Link>
            </div>
          ):<GoogleLogin
            onSuccess={(response) => {createOrGetUser(response, addUser)}}
            onError={() => console.log('Error')}
          />}
        </div>
    </div>
  )
}

export default Navbar