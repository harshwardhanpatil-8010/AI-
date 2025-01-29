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
  const { user } = await withAuth();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();
  if (!user) {
    return (
      <>
       <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-md'>
        <Image src= {'/logo.svg'} alt='logo' width={60} height={100}/>
        <Button className="p-6 text-lg">Get Started</Button>
        <Link href={signUpUrl} className='p-6 text-lg'>Get Started</Link>;
    </div>  
      </>
    );
  }
}
