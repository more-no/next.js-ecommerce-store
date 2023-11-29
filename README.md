# Next.js ecommerce store - A simple Pastry Shop.

A simple example of an e-commerce store with a few functionalities. It displays the products, lets you put your products in a cart and modify your cart, finally simulate a payment process.

# Technologies:

- React
- Next.js
- PostgresSQL
- Ley
- Typescript
- Jest Unit test
- Playwright E2E test

# Setup instructions:

- Clone the repository
  ````
  git clone https://github.com/more-no/next.js-ecommerce-store
  ````
  and from that folder run
  ````
  pnpm install
  ````
- Install PostgreSQL and create a database
  - Create your own .env file and copy from this repository the .env.example file
  - Substitute the values of PGUSERNAME, PGPASSWORD and PGDATABASE with your own
  - Add the .env file to the list in .gitignore
- Install Ley for migrations with
  ````
  pnpm add ley
  ````
- Run the development server with
  ````
  pnpm dev
  ````
- Open http://localhost:3000 in your browser.

# Deployment instructions:

- Create a fly.io account
- Create a new app, a volume and your own secrets
- Deploy your project

You can see the deployed project at https://next-js-ecommerce-store.fly.dev/
