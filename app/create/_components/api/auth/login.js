import { WorkOS } from '@workos-inc/authkit-nextjs';

export default async function handler(req, res) {
  const workos = new WorkOS('WORKOS_API_KEY');
  const authorizationUrl = workos.oauth.getAuthorizationURL({
    clientID: process.env.WORKOS_CLIENT_ID,
    redirectURI: process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI,
    provider: 'google', // Choose your provider (e.g., google, microsoft, etc.)
  });

  res.redirect(authorizationUrl);
}
