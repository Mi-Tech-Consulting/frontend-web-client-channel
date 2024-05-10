
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
- Fetching - [Axios](https://github.com/axios/axios)

# 🌈 Contribution guidelines
Here is the procedure on how to work with the GitHub repo, when you want to start coding:
1. Fork the origin repo to your `PERSONAL PRIVATE repo`
2. Working on your new repo, (usually you wanna check out a few feature branches thus to keep the default branch easy to sync and merge from - it is a bit tricky)
3. When your code is ready to merge, pls create a PULL REQUEST from your repo to the origin repo
4. Before merging, pls make sure you have run the following commands:
   ```shell
   npm install
   npm run build
   ```
   and then commit the changes to the PR
5. Once the PR is approved, it will be merged to the origin repo
6. Once the PR is merged, you can delete your PR branch

- branch: use `develop` branch as default
- Keep the code clean, style consistent
- Try to use the dependent libraries we provide. If you have special needs, please contact @jhcao23 or @keyskull 
- Always think about code reusability
- Pls let us know if you have any questions about this procedure


## Getting Started

## How to Run Develop Enviorment in Local 

* copy `dev.next.config.js.sample` file to `dev.next.config.js`

Finally, run the following commands to start the development server:

```console
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

## 👩‍💻 [NextAuth.js Endpoint Reference](https://next-auth.js.org/configuration/pages)

[NextAuth.js API Reference](https://next-auth.js.org/getting-started/rest-api)

##### Auth page routes:
* login page - `/auth/signin`
* register page - `/auth/signup`
* error page: `/auth/error`
* verifyRequest: `/auth/verify-request`
* newUser: `/auth/new-user`




## Effective Tools sharing

### v0: [(AI)generative UI tool: https://v0.dev/](https://v0.dev/)
- This is the AI UI generation platform of Nextjs, you can easily generate UI components according to the prompts. 
- In order to better adapt to our development environment, when using the prompt to generate pages, add the target prefix `Please use tailwind, tremor, headless UI and Heroicons packages to create page that...`
- You can then add them to our project using the commands they provide. You should make sure that the elements used by AI in the code are implemented using our components. If not, please modify the code.
