# recipe-assistant-repo

🍲 AI Recipe Assistant (React + Spring Boot + Ollama)

This project is a full-stack application that helps users generate healthy recipes using AI. It combines:

⚛️ React (TypeScript) — Interactive frontend

☕ Spring Boot (Java 21) — RESTful backend with SQL-ready support

🤖 Ollama — Local AI model integration (llama2, mistral, etc.)

🗄️ Maven + JPA — Database-ready backend (recipes can be saved/retrieved in future)

✨ Features

Browse organic products (mock product list for demo)

Generate AI recipes using selected ingredients

Local AI via Ollama (no API costs, offline support)

Cross-Origin setup for smooth React ↔ Spring Boot communication

Extensible for SQL integration (save generated recipes)

🏗️ Project Structure ai-recipe-assistant/ ├── backend/ (Spring Boot) │ ├── src/main/java/com/example/demo │ │ ├── controller/RecipeController.java │ │ ├── service/OllamaService.java │ │ └── DemoApplication.java │ └── pom.xml └── frontend/ (React + TypeScript) ├── src/ │ ├── components/ │ │ ├── ProductList.tsx │ │ └── RecipeAssistant.tsx │ └── App.tsx └── package.json

⚡ Getting Started 1️⃣ Prerequisites

Java 21

Maven 3.9+

Node.js + npm

Ollama installed and running

Pull a model (e.g. llama2):

ollama pull llama2

2️⃣ Backend Setup (Spring Boot) cd backend mvn clean install mvn spring-boot:run

Backend runs on 👉 http://localhost:8080

3️⃣ Frontend Setup (React) cd frontend npm install npm start

Frontend runs on 👉 http://localhost:5173

4️⃣ Ollama Setup

Make sure Ollama is running locally:

ollama serve

You can test the API directly:

curl http://localhost:11434/api/generate -d '{ "model": "llama2", "prompt": "Write a recipe using carrots and kale." }'

🔗 API Endpoints Get Products GET http://localhost:8080/api/products

Response:

["Carrots", "Kale", "Tomatoes", "Organic Eggs"]

Generate Recipe POST http://localhost:8080/api/recipe Content-Type: application/json

Body:

{ "ingredients": ["carrots", "kale", "eggs"] }

Response:

"Here's a healthy recipe using carrots, kale, and eggs..."

🛠️ Tech Stack

Frontend: React, TypeScript, HTML5, CSS3

Backend: Java 21, Spring Boot 3, Maven, JPA

AI: Ollama (llama2 / mistral / codellama models)

Database: H2 (dev), can extend to MySQL/Postgres

🌟 Future Improvements

✅ Save generated recipes into SQL database

✅ User accounts + saved favorites

✅ Streaming responses from Ollama (token-by-token)

✅ Deploy with Docker for full-stack portability

📸 Screenshots Product List Recipe Assistant

👨‍💻 Author

Built with ❤️ for practicing React, Spring Boot, SQL, and AI integration.
