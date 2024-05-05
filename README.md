
<div align="center"><strong>Next.js 14 Client Channel</strong></div>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so) [Headless](https://headlessui.com/) [Heroicons](https://heroicons.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

# 🌈 Contribution guidelines
```markdown
Here is the procedure on how to work with the GitHub repo, when you want to start coding:
1. Fork the origin repo to your PERSONAL PRIVATE repo
2. Working on your new repo, (usually you wanna check out a few feature branches thus to keep the default branch easy to sync and merge from - it is a bit tricky)
3. When your code is ready to merge, pls create a PULL REQUEST from your repo to the origin repo

- branch: use `develop` branch as default
- Pls let us know if you have any questions about this procedure
```

## Getting Started

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

### How to Use

1. Create a new user in the database using the `/auth/signup` endpoint.

2. Sign in using the `/auth/signin` endpoint.

3. You will use the `/api/auth/session` endpoint to check if a user is signed in.
   * use `useSession()` to fech the session data

4. You can also use the `/api/auth/signout` endpoint to sign out.
   * use `signOut()` to sign out

###👩‍💻 [NextAuth.js Endpoint Reference](https://next-auth.js.org/configuration/pages)

* login page - `/auth/signin`
* register page - `/auth/signup`
* error page: `/auth/error`
* verifyRequest: `/auth/verify-request`
* newUser: `/auth/new-user`


[NextAuth.js API Reference](https://next-auth.js.org/getting-started/rest-api)

