
---

```markdown
# 🧩 Express.js Product API – Week 2 Assignment

Welcome to the Product API! This RESTful service was crafted using **Node.js** and **Express.js** to perform full CRUD operations on product resources. It includes logging, authentication, input validation, structured error handling, pagination, search, and more.

---

## ✅ Submission Checklist

✔️ All required API endpoints implemented  
✔️ Middleware and error handling integrated  
✔️ API documented with examples  
✔️ Project structured into modular folders  
✔️ This `README.md` file provides full guidance  
✔️ `.env.example` file provided for environment setup  

---

## 📂 Files in the Repository

```
📦 your-repo/
├── middleware/
├── products/
├── routes/
├── server.js
├── .env.example
└── README.md
```

---

## 🛠️ Prerequisites & Setup

1. ✅ **Install Node.js (v18 or higher)**  
   https://nodejs.org/

2. ✅ **Clone your Classroom repository**

```bash
git clone <your-classroom-repo-url>
cd your-project-directory
```

3. ✅ **Install dependencies**

```bash
npm install express body-parser uuid dotenv
```

4. ✅ **Create a `.env` file**

```bash
cp .env.example .env
```

---

## ▶️ Running the Server

```bash
npm start
```

Server will start on:  
**http://localhost:3000**

---

## 🧪 Testing the API

You can use:

- [Postman](https://postman.com)
- [Insomnia](https://insomnia.rest)
- `curl`

---

## 📋 Task Breakdown

### Task 1: Express.js Setup

✅ Step-by-step:

```bash
npm init -y
npm install express body-parser uuid dotenv
```

**server.js:**

```js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Product API!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

---

### Task 2: RESTful API Routes

📦 Product fields:

| Field       | Type     |
|-------------|----------|
| `id`        | string   |
| `name`      | string   |
| `description` | string |
| `price`     | number   |
| `category`  | string   |
| `inStock`   | boolean  |

📬 Implemented Routes:

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/api/products`           | Get all products (supports pagination and filter) |
| GET    | `/api/products/:id`       | Get a specific product by ID    |
| POST   | `/api/products`           | Create a new product (🔐 protected) |
| PUT    | `/api/products/:id`       | Update product by ID (🔐 protected) |
| DELETE | `/api/products/:id`       | Delete product (🔐 protected)   |
| GET    | `/api/products/search/name?query=coffee` | Search products by name |
| GET    | `/api/products/stats/category` | Get count by category |

---

### Task 3: Middleware Implementation

✅ Implemented Middlewares:

| Middleware     | Purpose                                            |
|----------------|----------------------------------------------------|
| `logger.js`    | Logs method, URL, timestamp                        |
| `auth.js`      | Verifies `x-api-key` from headers                  |
| `validateProduct.js` | Validates incoming product data             |
| `paginate.js`  | Adds pagination support to product listing         |
| `bodyParser`   | Parses incoming JSON request bodies                |

---

### Task 4: Error Handling

✅ Implemented:

- Global error handler in `errorHandler.js`
- Custom error classes (`NotFoundError`, `ValidationError`)
- All routes return meaningful status codes & messages
- `try/catch` or safe wrappers for async handling

---

### Task 5: Advanced Features

🎯 Implemented:

- `?category=electronics` → filters products by category
- `?page=1&limit=2` → paginates product list
- `search/name?query=coffee` → searches by name
- `/stats/category` → returns product counts per category

---

## 💬 Sample Request & Response

### 🔐 Create a Product

**POST** `/api/products`

Headers:

```
Content-Type: application/json
x-api-key: your-secret-api-key
```

Body:

```json
{
  "name": "Toaster",
  "description": "2-slice toaster",
  "price": 25,
  "category": "kitchen",
  "inStock": true
}
```

Response:

```json
{
  "id": "a-unique-id",
  "name": "Toaster",
  "description": "2-slice toaster",
  "price": 25,
  "category": "kitchen",
  "inStock": true
}
```

---

## 📃 .env Setup

Create a `.env` file:

```env
PORT=3000
API_KEY=your-secret-api-key
```

---