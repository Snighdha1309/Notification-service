# 🛎️ Notification Service

A backend notification system built with **Node.js**, **Express**, and **MongoDB** that allows sending notifications to users via **Email**, **SMS**, and **In-App** messages. It includes a background queue using **Bull** and **Redis** to handle notification delivery and retries.

---

## 🚀 Features

- ✅ Send notifications to users
- ✅ Support for Email (via Nodemailer), SMS (via Twilio), and In-App
- ✅ REST API to retrieve user-specific notifications
- ✅ Asynchronous processing using Bull queues and Redis
- ✅ Automatic retries for failed notification deliveries

---

## 📦 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Nodemailer (Email service)
- Twilio (SMS service)
- Bull + Redis (Queue for async jobs and retries)
- dotenv (Environment variable management)

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (running locally or via MongoDB Atlas)
- Redis (installed and running locally)
- Twilio account with verified phone number
- Gmail account (or SMTP provider for Nodemailer)

### Clone the Repository

```bash
git clone https://github.com/your-username/notification-service.git
cd notification-service

