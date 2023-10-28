# Next.js dynamic routing error

## Step to reproduce

First, add a `Script` with `strategy='beforeInteractive'` in `app/layout.tsx`.

Secondly, click the `Go to post page` link navigating to a dynamic routing，it will throw an error.

The problem is that the url has been encoded for twice time，like `/_next/static/chunks/app/post/%255BdocId%255D/page.js`，and the correct file path is `/_next/static/chunks/app/post/%5BdocId%5B/page.js`. The dynamic routing is not right.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
