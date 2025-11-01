# Ramji Portfolio - Next.js Version 🚀This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Next.js migration of Ramji Portfolio with Turbopack for blazing-fast development.## Getting Started



## Quick StartFirst, run the development server:



```bash```bash

# Install dependenciesnpm run dev

pnpm install# or

yarn dev

# Run development server with Turbopack# or

pnpm devpnpm dev

# or

# Build for productionbun dev

pnpm build```

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Next.js 16** (App Router + Turbopack)

- **React 19**This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **TypeScript**

- **Tailwind CSS 4**## Learn More

- **Framer Motion**

- **Three.js**To learn more about Next.js, take a look at the following resources:

- **Supabase**

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Environment Variables- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



Create `.env.local`:You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



```env## Deploy on Vercel

NEXT_PUBLIC_SUPABASE_URL=your_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_keyThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

NEXT_PUBLIC_API_URL=your_api_url

```Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── styles/          # Global styles
```

## Routes

- `/` - Home
- `/project/[id]` - Project details (1-5)
- `/internship/[slug]` - Internship details
- `/certifications` - Certifications
- `/research` - Research publications

## Migration Changes

✅ React Router → Next.js App Router  
✅ `import.meta.env` → `process.env`  
✅ `VITE_` → `NEXT_PUBLIC_`  
✅ Client components with `'use client'`  
✅ `React.lazy` → `next/dynamic`  

---

Built with ❤️ by Ramji
# nextjsportfolio
