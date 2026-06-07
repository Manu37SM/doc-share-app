# 📄 Doc Share App

A full-stack document sharing application that allows users to upload, manage, and share documents with other users.

## 🚀 Features

* User Management
* Upload Documents
* View Owned Documents
* View Shared Documents
* Share Documents With Other Users
* Download Documents
* REST API Architecture
* SQLite Database Integration
* TypeScript End-to-End

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Axios

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* SQLite
* Multer

---

## 📂 Project Structure

```text
doc-share-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── README.md
│
├── backend/
│   ├── src/
│   ├── prisma/
│   └── README.md
│
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js 20+
* npm
* Git

---

## 🔧 Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
DATABASE_URL="file:./dev.db"
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

Seed sample data:

```bash
npm run seed
```

Start backend:

```bash
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

## 🎨 Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
VITE_API_URL=http://localhost:5000
```

Start development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 📸 Screenshots

### Login Page

(Add Screenshot)

### Dashboard

(Add Screenshot)

### Upload Document

(Add Screenshot)

### Shared Documents

(Add Screenshot)

---

## 🔄 Application Flow

1. User logs in.
2. User uploads documents.
3. Documents are stored on the server.
4. User can share documents with other users.
5. Shared users can access the documents.
6. Owners can manage their uploaded files.

---

## 🗄️ Database

The application uses SQLite with Prisma ORM.

Example entities:

* User
* Document
* SharedDocument

---

## 📈 Future Enhancements

* JWT Authentication
* Role-Based Access Control
* Document Search
* Drag & Drop Uploads
* Cloud Storage (AWS S3)
* Email Notifications
* Real-Time Collaboration
* Version History

---

## 🧪 Learning Objectives

This project was built to practice:

* Full Stack Development
* REST API Design
* Database Modeling
* File Upload Handling
* React + TypeScript
* Prisma ORM
* End-to-End Application Development

---

## 📄 License

MIT


## AI Usage

Tools Used:
- ChatGPT

AI Accelerated:
- CRUD scaffolding
- Prisma schema generation
- React component scaffolding
- API route generation

Changes Made:
- Refactored generated code
- Adjusted UI interactions
- Added validation and debugging

Verification:
- Manual testing of create/edit/share flows
- Persistence testing
- Upload testing
- Automated test execution