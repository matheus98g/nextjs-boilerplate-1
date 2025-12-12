# Next.js Boilerplate Overview

This boilerplate is set up with modern tools to help you start building full-stack web applications quickly and securely:

## 🔒 Clerk Authentication

[Clerk](https://clerk.com/) provides complete authentication and user management out of the box. It handles sign up, sign in, user profile management, and more, allowing you to focus on building your core features.

## 🛠️ Prisma ORM + PostgreSQL

[Prisma](https://www.prisma.io/) acts as your elegant database toolkit for TypeScript & Node.js. It provides type-safe database access, migration management, and an amazing development workflow.

**PostgreSQL** runs in a Docker container to simplify local development. See the Docker section below.

## 🎨 shadcn/ui

[shadcn/ui](https://ui.shadcn.com/) delivers beautifully designed, fully customizable React components built on top of Radix UI and TailwindCSS — helping you move faster when building interfaces.

---

## 🐳 Docker Setup & Prisma Configuration

To run the database locally, Docker is required. You can use the provided `docker-compose.yml` file to start PostgreSQL and Adminer (a web-based database client).

### Steps:

1. Make sure Docker is installed on your machine: [Docker installation guide](https://docs.docker.com/get-docker/).
2. From the project root, start the database:

```bash
docker-compose up -d
```

3. PostgreSQL will be available on `localhost:5432`. Adminer will be available on [http://localhost:8080](http://localhost:8080).

4. Configure your `.env` file with your database credentials (see `DATABASE_URL` for Prisma).

5. Run Prisma commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Create migrations based on your Prisma schema
npx prisma migrate dev --name init

# Optional: Check database connection and view Prisma Studio
npx prisma studio
```

After running these commands, your database will be initialized, and Prisma will be ready for development.

### Example `docker-compose.yml`:

```yaml
services:

  db:
    image: postgres:18
    container_name: postgres
    restart: always
    shm_size: 128mb
    env_file:
      - ./.env
    ports:
      - 5432:5432
    volumes:
      - pgdata:/var/lib/postgresql

  adminer:
    image: adminer
    container_name: adminer
    restart: always
    ports:
      - 8080:8080

volumes:
  pgdata:
```

---

## Get Started

1. Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd <repo>
npm install
```

2. Set up your `.env` file with Clerk and database credentials.
3. Start the database with Docker:

```bash
docker-compose up -d
```

4. Run Prisma commands to generate client and migrate the database:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Start your development server:

```bash
npm run dev
```