# 🍎 macOS-Inspired Portfolio

A **macOS-style interactive portfolio** built with **React + Vite**.  
This project simulates a macOS desktop experience with draggable windows,
dock navigation, and a terminal interface to showcase projects, skills,
resume, and contact details.

---

## ✨ Features

- 🖥️ macOS-style desktop UI
- 🪟 Draggable & closable windows
- 💻 Interactive terminal (CLI)
- 🧭 Dock-style navigation
- 📄 Resume viewer (PDF)
- 📝 Notes viewer (TXT)
- 🎵 Spotify-style UI
- ⏰ Live date & time
- 🎨 Clean SCSS styling
- ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript (ES6+)
- HTML5
- SCSS

**Libraries & Tools**
- Vite
- react-rnd (draggable windows)
- Git & GitHub

---

## 📂 Project Structure

```txt
MAC-OS/
├── node_modules/
├── public/
│   ├── doc-icons/
│   │   ├── calender.svg
│   │   ├── cli.svg
│   │   ├── github.svg
│   │   ├── link.svg
│   │   ├── mail.svg
│   │   ├── note.svg
│   │   ├── pdf.svg
│   │   └── spotify.svg
│   ├── navbar-icons/
│   │   ├── apple.svg
│   │   └── wifi.svg
│   ├── mac-wallpaper.jpg
│   ├── note.txt
│   └── Rushi Patel - CV.pdf
│
├── src/
│   ├── assets/
│   │   └── github.json
│   │
│   ├── components/
│   │   ├── windows/
│   │   │   ├── Cli.jsx
│   │   │   ├── cli.scss
│   │   │   ├── GitHub.jsx
│   │   │   ├── github.scss
│   │   │   ├── MacWindow.jsx
│   │   │   ├── macWindow.scss
│   │   │   ├── Note.jsx
│   │   │   ├── note.scss
│   │   │   ├── Resume.jsx
│   │   │   ├── resume.scss
│   │   │   ├── Spotify.jsx
│   │   │   └── spotify.scss
│   │   │
│   │   ├── DateTime.jsx
│   │   ├── Dock.jsx
│   │   ├── dock.scss
│   │   ├── Nav.jsx
│   │   └── nav.scss
│   │
│   ├── App.jsx
│   ├── app.scss
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

```

## 💻 Terminal Commands

The built-in terminal supports custom commands:
```
help        # List all available commands
projects    # View recent projects
skills      # Display technical skills
experience  # Work experience
education   # Academic background
contact     # Contact information
clear       # Clear terminal screen
```

## 🚀 Getting Started
```
1️⃣ Clone the repository

git clone https://github.com/your-username/macos-portfolio.git
cd macos-portfolio

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev
```
## 📌 Customization
```
Update resume PDF in:

public/Rushi Patel - CV.pdf


Update terminal data inside:

src/components/windows/Cli.jsx


Update icons inside:

public/doc-icons/


Update GitHub data:

src/assets/github.json
```
## 📬 Contact
```
Rushi Patel
📧 Email: rushipatel437@gmail.com
📍 Location: India
🔗 LinkedIn: https://linkedin.com/in/rushi-patel-6a311a308
💼 Status: Open to Opportunities
