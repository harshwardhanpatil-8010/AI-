import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ['/'], // Redirect unauthenticated users from these paths
  },
});

export const config = { matcher: ['/create', '/account/:page*'] };
