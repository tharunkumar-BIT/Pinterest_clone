
# 📌 Pinterest Clone

A visually stunning and responsive Pinterest-style application built with modern web technologies. Users can explore, upload, and interact with image-based content seamlessly.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Sanity](https://img.shields.io/badge/CMS-Sanity-red?logo=sanity)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)

---

## ✨ Features

- 🖼️ Upload and browse image-based posts
- 🔍 Search and filter by categories or keywords
- 💬 Comment and interact with pins
- 👤 User authentication and personalized feeds
- 🎨 Responsive and mobile-friendly UI

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **CMS**: Sanity.io
- **Authentication**: Google OAuth (if used)
- **Others**: JavaScript (ES6+), RESTful APIs

---

## 📁 Project Structure

```
Pinterest_clone/
├── client/             # React + Tailwind frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/             # Node + Express backend (if applicable)
│   └── index.js
├── sanity_backend/     # Sanity CMS config
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Sanity CLI (`npm install -g @sanity/cli`)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/tharunkumar-BIT/Pinterest_clone.git
   cd Pinterest_clone
   ```

2. **Install client dependencies:**

   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies (if applicable):**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up Sanity:**

   ```bash
   cd ../sanity_backend
   sanity install
   sanity start
   ```

5. **Run the application:**

   - Start backend:

     ```bash
     cd ../server
     npm start
     ```

   - Start frontend:

     ```bash
     cd ../client
     npm start
     ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the project and submit a pull request with improvements or fixes.
