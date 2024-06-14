# 💎 E-Commerce Admin

This is the backend for the First Flaw Jewels e-commerce platform. It manages product data, user authentication, and various other backend services essential for running the [E-Commerce-Admin](https://github.com/Mrgnoblennon/E-Commerce-Store-Front)

## 🚀 Features

- User Authentication: Secure authentication and user management using Clerk.
- Product Management: APIs for creating, reading, updating, and deleting products.
- Order Processing: Handling and processing customer orders.
- Database Management: Integration with Supabase and Prisma for data modeling and database interaction.
- Cloudinary Integration: Managing and storing images via Cloudinary.

## 📦 Dependencies

Here’s a list of the main dependencies used in this project:

- 🔐 @clerk/nextjs: User authentication and management
- ✅ @hookform/resolvers: Validation resolvers for React Hook Form
- 🗄️ @prisma/client: Database client for Prisma ORM
- ☑️ @radix-ui/react-checkbox: Radix UI checkbox component
- 💬 @radix-ui/react-dialog: Radix UI dialog component
- 📂 @radix-ui/react-dropdown-menu: Radix UI dropdown menu
- 🖼️ @radix-ui/react-icons: Radix UI icons
- 🏷️ @radix-ui/react-label: Radix UI label component
- 🌐 @radix-ui/react-popover: Radix UI popover component
- 🔽 @radix-ui/react-select: Radix UI select component
- 🔗 @radix-ui/react-separator: Radix UI separator component
- 🔲 @radix-ui/react-slot: Radix UI slot component
- 📊 @tanstack/react-table: Headless table component for React
- 🌐 axios: HTTP client for making API requests
- 🎨 class-variance-authority: Utility for class name variations
- 🔗 clsx: Utility for conditionally joining classNames
- 💻 cmdk: Command menu for React applications
- 📅 date-fns: Utility library for date manipulation
- 🖼️ lucide-react: Icon library for React
- ⚡ next: React framework for server-side rendering and static site generation
- ☁️ next-cloudinary: Cloudinary integration for Next.js
- 🎨 next-themes: Theme switching for Next.js apps
- ⚛️ react: JavaScript library for building user interfaces
- 🌍 react-dom: Entry point to the DOM for React applications
- 📜 react-hook-form: Form validation library for React
- 🍞 react-hot-toast: Toast notification library for React
- 📊 recharts: Charting library for React
- 💳 stripe: Payment processing library
- 🌀 tailwind-merge: Utility for merging Tailwind CSS classes
- 🎉 tailwindcss-animate: Tailwind CSS animations
- 🧩 zod: Schema validation library
- 🐻 zustand: State management library

##  🛠 DevDependencies

- 🛠️ @types/node: TypeScript types for Node.js
- 🔧 @types/react: TypeScript types for React
- 🔩 @types/react-dom: TypeScript types for React DOM
- 🧹 eslint: Linting tool for identifying and fixing code quality issues
- 🧭 eslint-config-next: ESLint configuration for Next.js
- ✂️ postcss: CSS post-processor for transforming styles
- 🌱 prisma: Next-generation ORM for database interactions
- 🌈 tailwindcss: Utility-first CSS framework
📘 typescript: Superset of JavaScript that adds static types

## 📑 Installation

To set up this project locally, follow these steps:

1. Clone the repository:

  ```bash
  git clone https://github.com/yourusername/first-flaw-jewels-backend.git
  cd first-flaw-jewels-backend
  ```

2. Install dependencies:

  ```bash
  npm install
  ```
  Create an .env file in the root directory and add your environment variables. Refer to the .env.example for the required variables.

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Run the development server:

```bash
npm run dev
```

🌟 Usage
- API Endpoints: Interact with the backend through various API endpoints for managing products, orders, and user data.

- Admin Dashboard: Access administrative features for managing the e-commerce platform.

📦 API Integration
Ensure that your front-end application is configured to interact with this backend via the provided API endpoints. Set up the base URL for the API in your front-end configuration.

🛡 Authentication
This backend uses Clerk for authentication. Ensure your Clerk API keys are set up in your .env file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## 🗄️ Database
Supabase is used for database management, with Prisma as the ORM. Configure your database connection string in the .env file:

```bash
DATABASE_URL=""
DIRECT_URL=""
```

## ☁️ Cloudinary Configuration

Configure your Cloudinary integration in the .env file:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
```

## 💳 Stripe Configuration

Set up Stripe API keys and webhook secret in the .env file:

```bash
STRIPE_API_KEY=
STRIPE_WEBHHOK_SECRET=
```

## 🌐 Frontend Store URL
Set up the URL of the frontend store in the .env file:

```bash
FRONTEND_STORE_URL=http://localhost:"port"
```

## 🧩 Components

- Authentication: Handles user login and registration.

- Product Management: APIs for managing product listings.

- Order Management: APIs for handling customer orders.

- Image Management: Integration with Cloudinary for managing product images.

## 🎨 Styling
Styling is integrated with Tailwind CSS and Tailwind CSS animations. Customize styles as needed to fit the design requirements.

## 📧 Contact
For questions or feedback, please contact chasebarrettbrown@hotmail.com or checkout my [Github](https://github.com/Mrgnoblennon).