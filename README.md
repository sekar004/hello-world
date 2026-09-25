# Hello World - Modern Dockerized Frontend Practice App 🚀

A sleek, responsive, modern glassmorphism "Hello World" frontend application built for practicing Docker containerization and deployment.

---

## 🌟 Features
- **Modern UI Design**: Glassmorphism aesthetic with animated background gradients.
- **Dark / Light Theme**: Built-in toggle stored in `localStorage`.
- **Interactive Counter & Live Uptime**: Real-time JavaScript interactivity.
- **Nginx Web Server**: Ultra-fast static file serving built on `nginx:alpine`.

---

## 🛠️ How to Build & Run with Docker

### Option 1: Using Docker CLI

1. **Build the Docker Image**:
   ```bash
   docker build -t hello-world-app .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -d -p 8080:80 --name hello_world_container hello-world-app
   ```

3. **Open in Browser**:
   Open [http://localhost:8080](http://localhost:8080) to see your app running live!

4. **Stop Container**:
   ```bash
   docker stop hello_world_container
   docker rm hello_world_container
   ```

---

### Option 2: Using Docker Compose

1. **Start the Application**:
   ```bash
   docker compose up -d
   ```

2. **Stop the Application**:
   ```bash
   docker compose down
   ```

---

## 📁 Project Structure

```
hello-world/
├── index.html        # Main HTML layout
├── styles.css        # Glassmorphic CSS styling
├── script.js        # Interactive JS logic
├── Dockerfile        # Docker build instructions
├── docker-compose.yml# Docker compose configuration
├── .dockerignore     # Docker build exclusions
├── .gitignore        # Git ignore rules
└── README.md         # Documentation
```
