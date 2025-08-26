
## 📂 Project Structure
```

taskly/
│── frontend/     # React frontend
│── backend/      # Django backend
│── README.md     # Project documentation

````

## ⚡ Requirements
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Python](https://www.python.org/) (v3.8 or later)
- [pip](https://pip.pypa.io/)
- [Git](https://git-scm.com/)

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/PatilPal/taskly.git
cd taskly
````

---

### 2️⃣ Backend Setup (Django)

1. Navigate to backend folder:

   ```bash
   cd backend
   ```

2. (Optional) Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # Mac/Linux
   venv\Scripts\activate      # Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the backend server:

   ```bash
   python manage.py runserver
   ```

   * Server will run at: **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

### 3️⃣ Frontend Setup (React)

1. Navigate to frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

   * App will run at: **[http://localhost:3000/](http://localhost:3000/)**

---

## 🎯 Running Both Together

* Start **backend** first (`python manage.py runserver`).
* Then start **frontend** (`npm start`).
* Frontend will call APIs from backend automatically.
