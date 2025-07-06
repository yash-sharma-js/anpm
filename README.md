# 🚀 anpm

[![npm](https://img.shields.io/npm/v/@srmx/anpm?color=blue&logo=npm)](https://www.npmjs.com/package/@srmx/anpm)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**anpm** (Advanced Node Project Manager) is a simple, fast, and reusable CLI tool to bootstrap **frontend** and **backend** projects with your favorite stack — quickly and consistently.  

✨ Save your most–used stacks as *presets* and spin them up anytime with a single command.

---

## 📦 Installation

### 🔷 Install globally
```bash
npm install -g @srmx/anpm
```

Check version and help:
```bash
anpm --help
```

---

## 🚀 Features

✅ Create **frontend** or **backend** projects with one command  
✅ Supports **React, Angular, Vite, Express, Mongoose, JWT** and more  
✅ Save and reuse **custom presets**  
✅ Clean output with progress spinners and colored logs  
✅ Works globally on any folder

---

## 🛠️ Usage

### 📄 Show help
```bash
anpm --help
```

### 🔷 Save a preset
Save your favorite stack as a preset:
```bash
anpm set --name frontend-react --type react --tools redux react-router-dom
```

Here:
- `--name` : Name of your preset
- `--type` : Project type (`react`, `angular`, `express`, `vite`, etc.)
- `--tools` : Optional additional tools

Example for backend:
```bash
anpm set --name backend-api --type express --tools mongoose jsonwebtoken dotenv
```

---

### 🔷 List all saved presets
```bash
anpm list
```

Output:
```
📄 Saved presets:
- frontend-react: type: react tools: redux, react-router-dom
- backend: type: npm tools: mongoose, express, cors
```

---

### 🔷 Create project from preset
```bash
anpm <preset-name>
```

This will create the project in the **current directory** with the saved stack.

Example:
```bash
anpm frontend-react
```

---

### 🔷 Delete a preset
```bash
anpm remove <preset-name>
```

Example:
```bash
anpm remove backend-api
```

---

## 🌟 Example Workflow

```bash
anpm set --name frontend-react --type react --tools redux react-router-dom
anpm list
anpm frontend-react
```

---

## 📂 Folder structure

The generated project structure depends on the stack you choose. Example:

For **React:**
```
my-project/
├── node_modules/
├── package.json
├── public/
├── src/
│   └── App.jsx
└── ...
```

For **Express:**
```
my-project/
├── node_modules/
├── package.json
├── app.js
└── ...
```

---

## 🧑‍💻 Contributing

Contributions are welcome!  
- Fork the repo
- Create your branch: `git checkout -b feature/your-feature`
- Commit your changes: `git commit -m 'Add your feature'`
- Push to the branch: `git push origin feature/your-feature`
- Open a Pull Request

Open an issue first to discuss what you’d like to change or add. 🙌

---

## 📄 License

MIT © [Yash Sharma](mailto:yashsharma.js@gmail.com)

---

> Built  by [Yash Sharma](mailto:yashsharma.js@gmail.com)
