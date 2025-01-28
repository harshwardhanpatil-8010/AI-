import { WorkOS } from '@workos-inc/authkit-nextjs';

export default async function handler(req, res) {
  const workos = new WorkOS('WORKOS_API_KEY');
  const { code } = req.query;

  try {
    const { profile } = await workos.oauth.getProfileAndToken({
      code,
      clientID: process.env.WORKOS_CLIENT_ID,
    });

    // Save user profile in session or database (example below)
    req.session.user = profile;
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).send('Authentication failed.');
  }
}
