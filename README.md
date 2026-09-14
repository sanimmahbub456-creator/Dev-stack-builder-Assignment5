# 📘 Dev Stack Builder — React + Tailwind + TypeScript
A modern, responsive, and interactive web application that helps users explore popular technologies and build their own personalized “Dev Stack”.  
This project is built using **React, TypeScript, Tailwind CSS, and React‑Toastify**, following all assignment requirements.

---

##  Live Demo

🔗 **Live Site:** https://friendly-jalebi-f15bfd.netlify.app/  
🔗 **GitHub Repository: https://github.com/sanimmahbub456-creator/Dev-stack-builder-Assignment5

---

## 🛠️ Tech Stack Used

- React.js  
- TypeScript  
- Tailwind CSS  
- React‑Toastify  
- Vite  
- JSON (local data)  
- Netlify (deployment)

---

##  Top Features

### 1️⃣ Technology Explorer
Browse 10–15 technologies with icons, descriptions, categories, difficulty levels, ratings, and badges.

### 2️⃣ Build  Dev Stack
Add technologies to your stack, remove individually, or clear all.  
Duplicate adds show a warning.

### 3️⃣ Fully Responsive UI
Optimized for mobile, tablet, and desktop with a clean layout and sticky navbar.

---

## 🎨 Brand Gradient Theme

A shared gradient (orange → pink → violet) is used for:

- Brand name  
- Hero heading  
- Primary buttons  

Defined once in Tailwind config for easy theme updates.

---

## 📦 JSON Data

Technology data is loaded from a local JSON file:

public/technologies.json


No hardcoded arrays inside components.

---

## 🔔 React‑Toastify Alerts

Used for:

- Add to stack  
- Duplicate add attempt  
- Remove item  
- Remove all  

---

## 📱 Responsive Design

The entire site is fully responsive:

- 1 column on mobile  
- 2 columns on tablet  
- 3 columns on desktop  
- Sidebar becomes stacked on small screens  

---

##  React Questions (Answered Simply)

### 1. What is JSX, and why is it used in React?
JSX lets you write HTML inside JavaScript. It makes UI code easier to read and helps combine markup and logic in one place.

### 2. What is the difference between props and state?
- **Props:** Data passed from parent to child. Read‑only.  
- **State:** Data stored inside a component. Can change over time.

### 3. What does the useState hook do, and where did you use it?
`useState` creates reactive variables that update the UI when changed.  
Used for:
- technologies  
- stack  
- loading

### 4. What does the useEffect hook do, and why did you need it?
`useEffect` runs code when the component loads or updates.  
Used to fetch JSON data when the app starts.

### 5. Why does every item in a `.map()` list need a unique key prop?
React needs a unique key to track each item. It helps React update only changed items instead of re‑rendering everything.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements depending on a condition. In React, this is usually done with a ternary (`means showing different UI elements depending on a condition. In React, this is usually done with a ternary ( ? :) or logical ( &&) operator.
### 7. How do you pass data from parent to child, and how does a child send something back?
Parent → Child: pass data using props
Child → Parent: call a function passed from the parent
Example:
Parent passes addToStack to child.
Child calls it when user clicks “Add to Stack”.

# 📄 Project Structure

src/
 ├── components/
 ├── assets/
 ├── types/
 ├── App.tsx
 ├── main.tsx
 ├── index.css
 ├── app.css
public/
 └── technologies.json

# 📚 How to Run Locally
npm install
npm run dev



# Final Notes
This project follows all assignment rules:

No lorem ipsum

Gradient theme

JSON loading

Toast alerts

Responsive

Clean UI

8+ meaningful git commits


