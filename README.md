# 📝 Personal Blog (React + Vite)

This is a simple personal blog built using **React** and **Vite**. The project focuses on practicing core React concepts such as components, props, JSX, and rendering lists.

---

## 🚀 Features

- Reusable React components
- Data-driven UI using a single `blog.js` file
- Props passed from parent to child components
- Dynamic rendering of blog articles using `.map()`
- Clean and simple layout structure

---

## 📁 Project Structure


src/
├── components/
│ ├── Header.jsx
│ ├── About.jsx
│ ├── ArticleList.jsx
│ └── Article.jsx
│
├── blog.js
├── App.jsx
└── main.jsx


---

## 🧠 Components Overview

### Header
Displays the blog title.

**Props:**
- `name` → blog title

---

### About
Displays information about the blog.

**Props:**
- `image` → blog image/logo
- `about` → blog description

---

### ArticleList
Renders a list of blog posts.

**Props:**
- `posts` → array of blog articles

---

### Article
Displays a single blog post.

**Props:**
- `title` → article title
- `date` → publish date
- `preview` → short description

---

## 📦 Data Source

All blog content is stored in:

```

src/blog.js

```

This file contains:
- Blog name
- Image
- About text
- Array of posts

---

## 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6+)
- JSX

---

👩‍💻 Author

Created by Irene as part of a React learning lab.
