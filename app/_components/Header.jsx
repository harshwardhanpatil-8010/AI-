"use server";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from '@workos-inc/authkit-nextjs';

export default async function Header() {
  // Retrieves the user from the session or returns `null` if no user is signed in
 
  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();

    return (
      <>
       <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-md'>
        <Image src= {'/logo.svg'} alt='logo' width={60} height={100}/>
        <Button href={signUpUrl} className='p-6 text-lg bg-green-400 hover:bg-green-600'>Get Started</Button>
    </div>  
      </>
    );
  }
