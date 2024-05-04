
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

* rename `dev.next.config.js.sample` file to `dev.next.config.js`

Finally, run the following commands to start the development server:

```
npm install
npm run dev
```

You should now be able to access the application at http://localhost:3000.

Make sure you haven't run multiple instances for the same application at the same time.