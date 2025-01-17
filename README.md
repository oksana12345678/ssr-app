# SSR App

This is a Next.js project bootstrapped with `create-next-app` for server-side rendering (SSR). It provides features for managing posts and users, and uses `react-query` for data fetching.

## Getting Started

To run the development server, follow the steps below:

### 1. Install dependencies

First, install the required dependencies using your preferred package manager.

```bash
npm install
# or
yarn install
# or
pnpm install
2. Start the development server
Run the following command to start the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
3. Open your browser
Once the server is running, open your browser and go to http://localhost:3000 to view the project.

4. Edit the page
You can start editing the page by modifying the app/page.tsx. The page will auto-update as you make changes.

Features
Post List: Displays a list of posts fetched from an API.
Post Details: Displays detailed information about a specific post.
User List: Displays a list of users.
User Details: Displays detailed information about a specific user.
Not Found Page: A custom page that appears when a non-existent page is accessed.
API Fetching: Fetches data for posts and users using react-query.
Technologies Used
Next.js: A React framework for building SSR applications.
React Query: Data-fetching and state management for React.
Tailwind CSS: A utility-first CSS framework for styling.
TypeScript: Type-safe JavaScript.
ESLint: A tool for identifying and fixing problems in your JavaScript code.
Installation
Follow the instructions under Getting Started to set up the project locally.

Dependencies
json
{
  "name": "ssr-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.64.1",
    "@tanstack/react-query-devtools": "^5.64.1",
    "clsx": "^2.1.1",
    "dehydrate": "^1.0.0",
    "next": "15.1.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.1.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

How to Use
Navigate to the Post List: You can access the list of posts at the /posts route.
View Post Details: Click on a post to view its detailed page.
User Management: The /users route displays a list of users, and you can view each user's details by clicking on them.
Handling Not Found Pages: If you try to access a route that doesn't exist, you'll be redirected to a custom "Not Found" page.
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel platform.

Go to the Vercel Dashboard.
Click New Project.
Select your Git repository.
Follow the instructions to deploy the app.
For more details, refer to the Next.js Deployment Documentation.
