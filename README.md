# TechON: Professional Virtual Tours & Matterport Management Platform

`Developed by: Marcelo Manara & Lucas Vieira`

Welcome to the TechON repository, a robust web application designed to showcase and manage 360° virtual tours, real estate photography, and Matterport projects. 

This project was built using **MVC (Model-View-Controller)** architecture with **TypeScript** and **Node.js**, focusing on modern development practices, high security standards, and containerization.

---

### 💡 Project Overview

**The Problem:** Real estate and photography businesses often lack an organized, secure, and professional way to present complex 360° digital assets to clients while managing lead inquiries and administrative access.

**The Solution:** A centralized management platform. TechON provides a sleek frontend for clients and a secure administrative backend. It implements industrial-strength authentication (JWT via HttpOnly Cookies) and a dedicated lead management system, all wrapped in a scalable Dockerized environment.



**Technical Challenges:**
- **Secure State Management:** Implementing JWT authentication stored in **HttpOnly Cookies** to mitigate XSS (Cross-Site Scripting) attacks, a significant upgrade over standard LocalStorage methods.
- **Robust Testing:** Achieving **100% code coverage** on critical controllers using **Jest**, ensuring the business logic and authentication flows are bug-free before deployment.
- **Environment Parity:** Using **Docker** to ensure the application runs identically across development, testing, and production environments, eliminating "it works on my machine" issues.

---

## 📌 Table of Contents
1. [Technologies Used](#-technologies-used)
2. [Prerequisites](#-prerequisites)
3. [Initial Setup](#-initial-setup)
4. [Running the Project](#-running-the-project)
5. [Authentication & Security Features](#-authentication--security-features)
6. [Automated Testing (Jest)](#-automated-testing-jest)
7. [Project Structure](#-project-structure)
8. [Contact](#-contact)

---

## 🚀 Technologies Used
- **Backend:** Node.js, Express (TypeScript)
- **Frontend:** EJS (View Engine), Bootstrap 5
- **Database:** SQLite (via Sequelize ORM)
- **Security:** BCrypt (Password Hashing), JWT (Authentication via Cookies)
- **Testing:** Jest (Code coverage > 90%)
- **Containerization:** Docker

---

## ⚙️ Prerequisites
Before starting, ensure you have installed:
- **Node.js** (v18 or higher)
- **Docker** (Optional, for containerized execution)

---

## 🛠️ Initial Setup

1. **Clone the repository:**
```sh
git clone [https://github.com/ManaraMarcelo/techon-virtual-tours-platform.git](https://github.com/ManaraMarcelo/techon-virtual-tours-platform.git)
cd techon-virtual-tours-platform

```

2. **Install dependencies:**

```sh
npm install

```

3. **Configure Environment Variables:** Create a `.env` file in the root directory and add your JWT secret:

```env
JWT_SECRET=your_super_secure_secret_here

```

---

## ▶️ Running the Project

### Option 1: Local Development

Run the project with live-reload:

```sh
npm run dev

```

Access at: `http://localhost:3000`

### Option 2: Docker Execution

To run the built application in an isolated container:

1. **Build the image:**

```sh
docker build -t techon-app .

```

2. **Run the container:**

```sh
docker run -p 3000:3000 techon-app

```

Access at: `http://localhost:3000`

---

## 🔐 Authentication & Security Features

The system implements a complete professional authentication flow:

### 1. Registration & Login

* Passwords are encrypted using **BCrypt** before database storage.
* Login generates a **JWT Token** stored in a secure **httpOnly cookie**, preventing access via frontend scripts.

### 2. Password Recovery (Terminal Simulation) ⚠️

As this is an academic project not connected to an SMTP server (like SendGrid), the recovery code is simulated:

1. Click "Forgot password?" on the Login screen.
2. Enter a registered email.
3. **Check your Terminal/Docker logs** to find the recovery code:

```text
==================================================
>>> PASSWORD RECOVERY <<<
>>> User: test@test.com
>>> CODE: 123456
==================================================

```

4. Enter the code in the browser modal to reset your password.

### 3. Administrative Area

The `/messages` route is protected and displays form inquiries.

* **Access Control:** Only authorized admin emails (defined in Middleware) can access this area. Unauthorized users are redirected with an "Access Denied" alert.

---

## 🧪 Automated Testing (Jest)

The project features comprehensive unit tests for Page and Auth Controllers.

To run tests and generate a coverage report:

```sh
npm run test:coverage

```

*Current status: 100% coverage on core logic files.*

---

## 📂 Project Structure

* `config/`: Database configuration (Sequelize).
* `controllers/`: Core business logic (Auth and Pages).
* `models/`: Database models (User, Message).
* `middlewares/`: Token verification and admin permissions.
* `routes/`: API route definitions.
* `views/`: EJS files (Dynamic HTML) and Partials.
* `public/`: Static assets (CSS, Images, Client-side JS).
* `tests/`: Unit tests with Jest.

---

## 🔗 Contact

**Marcelo Manara** [LinkedIn](https://www.linkedin.com/in/marcelo-manara) | [Portfolio](https://portifolio-peach-beta.vercel.app/)
