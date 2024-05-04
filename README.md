
<div align="center"><strong>Next.js 14 Client Channel</strong></div>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so) [Headless](https://headlessui.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)


## Getting Started

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Inside the Vercel Postgres dashboard, create a table based on the schema defined in this repository.


## How to Run Develop Enviorment in Local 

* copy `dev.next.config.js.sample` file to `dev.next.config.js`

Finally, run the following commands to start the development server:

```
npm install
npm run dev
```

You should now be able to access the application at http://localhost:3000.

Make sure you haven't run multiple instances for the same application at the same time.


## Authentication

This application uses [NextAuth.js](https://next-auth.js.org) for authentication.

### How to use?

1. Create a new user in the database using the `/auth/signup` endpoint.

2. Sign in using the `/auth/signin` endpoint.

3. You can also use the `/api/auth/session` endpoint to check if a user is signed in.
   * need to be included `<SessionProvider>` in the page. (check `app/layout.tsx`)

4. You can also use the `/api/auth/signout` endpoint to sign out.

### Refferences

- [NextAuth.js](https://next-auth.js.org)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/example)
