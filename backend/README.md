# Doc Share App - Backend

Backend API for the Document Sharing Application.

## Tech Stack

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* SQLite
* Multer (File Uploads)

## Features

* User Management
* Document Upload
* Document Sharing
* Document Access Control
* REST APIs
* SQLite Database via Prisma

## Project Structure

src/
├── routes/
├── controllers/
├── middleware/
├── services/
├── prisma/
└── index.ts

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
```

## Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev --name init
```

Seed sample data:

```bash
npm run seed
```

## Run Development Server

```bash
npm run dev
```

Server runs on:

http://localhost:5000

## API Endpoints

### Users

* GET /users
* POST /users

### Documents

* GET /documents
* POST /documents
* DELETE /documents/:id

### Sharing

* POST /documents/share

## Prisma Studio

View database records:

```bash
npx prisma studio
```

## Future Improvements

* JWT Authentication
* Role Based Access Control
* Document Versioning
* Cloud Storage Integration
* Real-Time Collaboration

## License

MIT
