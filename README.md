# Next Redux

<p align="center">
  <a href="https://next-redux-ts.vercel.app/login">
    <img src="https://next-redux-ts.vercel.app/opengraph-image.png" alt="Next Redux OG Image">
  </a>
</p>

<p align="center">
  <a href="https://next-redux-ts.vercel.app/login"><strong>Browse Website</strong></a>
</p>

This is a simple example of how to make your API fetch faster with Next.js, and store data for client-side manipulation with Redux. We're leveraging the power of Next.js with RSC to make all our API calls on the server side. This way, we can make our API calls faster and also make our app SEO friendly.

## Features

- [Next.js](https://nextjs.org/docs/app) with RSC
- [Redux](https://react-redux.js.org/) for state management
- Google login for authentication with [NextAuth](https://next-auth.js.org/)
- Auth-protected routes through middleware
- Custom unauthorized page with URL rewrites
- UI components with [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Setting up locally

1. Clone the repo
1. `cp .env.example .env.local` and fill in the values
1. `pnpm install`
1. Start the dev server `pnpm dev`
