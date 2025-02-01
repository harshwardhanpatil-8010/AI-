'use server';

import { useAuth } from '@workos-inc/authkit-nextjs/components';

export default function HomePage() {
  // If the user isn't signed in, they will be
  // 
  //  automatically redirected to AuthKit
  const { user, loading } = useAuth({ ensureSignedIn: true });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (      
    <>
      <h1>Dashboard</h1>
    </>
  );
}
