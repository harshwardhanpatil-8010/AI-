import React from 'react'
import { withAuth } from '@workos-inc/authkit-nextjs';

export default withAuth(async function GenerateLogo({ user }) {
  return (
    <div>GenerateLogo</div>
  )
});