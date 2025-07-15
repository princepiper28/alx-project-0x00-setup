# ALX Project 0x00 – Next.js Setup

## 🧠 Objective

To understand the process of **scaffolding a Next.js project** using CLI tools like `npx` and `create-next-app`, with emphasis on customizing setup options such as TypeScript, ESLint, Tailwind CSS, and import aliases.

---

## ✅ Learning Outcome

By completing this setup, you will learn how to:

* Use `npx` to create a Next.js project from scratch
* Configure a project with TypeScript
* Enable ESLint, Tailwind CSS, and import aliases
* Start a development server on a custom port

---

## 🛠️ Instructions

Follow these steps to scaffold your project:

1. **Open Command Prompt or VS Code Terminal**

   * VS Code: `Terminal → New Terminal`
   * Or press `Windows + R`, type `cmd`, and hit Enter.

2. **Navigate to Your Desired Directory**

   ```bash
   cd path\to\your\desired\folder
   ```

3. **Run the Create Next App Command**

   ```bash
   npx create-next-app@latest alx-project-0x00 --typescript
   ```

4. **Choose the Following Options When Prompted:**

   * ESLint: ✅ Yes
   * Tailwind CSS: ✅ Yes
   * Import alias: ✅ Yes
   * Customize import alias: ✅ Yes
   * Use this alias: `@/*`
   * /src directory: ❌ No
   * App Router: ❌ No (choose Pages Router)

5. **Navigate into the Project Folder**

   ```bash
   cd alx-project-0x00
   ```

6. **Start the Development Server on Port 3000**

   ```bash
   npm run dev -- -p 3000
   ```

---

## 📁 Project Structure

* **GitHub Repository:** `alx-project-0x00-setup`
* **Main Directory:** `alx-project-0x00`

---

## ✅ Status

✅ Project successfully initialized and development server running at:
[http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshot (Optional)

Include a screenshot of your running app for reference/documentation.

---

## 💡 Tips

* Stop the dev server with `Ctrl + C`
* Update this `README.md` as your project evolves
* Use `@/components/...` or other alias paths in your code to simplify imports

---
