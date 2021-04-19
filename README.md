# ispexet-se

[![Powered by Vercel](./public/powered-by-vercel.svg)](https://vercel.com/?utm_source=isektionen&utm_campaign=oss)

Proposed code shell for redeveopment of [ispexet.se](https://ispexet.se). Built using

- [Next.js](https://nextjs.org)
- [GraphCMS](https://graphcms.com)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (optional)
- [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (optional)

## Getting Started

These instructions are written for usage with command line tool, such as Terminal for MacOS or CMD for Windows.

1. Clone the repo
   ```bash
   git clone https://github.com/isektionen/ispexet-se
   ```
1. Open the newly created folder for the repo
   ```bash
   cd ispexet-se
   ```
1. Copy `.env.local.example` to `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
1. Ask someone in the Webmaster group for the values of the environment variables needed to get data from GraphCMS. Put the values into `.env.local`
1. Install dependencies
   ```bash
   yarn
   # or
   npm i
   ```
1. Run the development server
   ```bash
   yarn dev
   # or
   npm run dev
   ```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the files under `pages/`. The page auto-updates as you edit the file.
