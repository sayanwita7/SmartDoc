Copy the project: git clone https://github.com/sayanwita7/SmartDoc

Setting up backend: 

1. First create the virtual environment:python -m venv venv
2. Install dependencies: venv\Scripts\activate (On Windows source) OR venv/bin/activate (On Mac/Linux)
3. Load the environment variables:

PORT=3306
CORS_ORIGIN=http://localhost:5173
FLASK_SECRET_KEY=Hello
FRONTEND_URL=http://localhost:5173
ACCESS_SECRET = "access_secret_key"
REFRESH_SECRET = "refresh_secret_key"
HOST="localhost"
USER="root"
PASSWORD=
DATABASE="SmartDoc"

4. Execution: python app.py

Setting up frontend: 

1. Load the environment variables:

VITE_REGISTER_URL="http://127.0.0.1:5000/user/register"
VITE_LOGIN_URL="http://127.0.0.1:5000/user/login"
VITE_LOGOUT_URL="http://127.0.0.1:5000/user/logout"

2. If packages aren't installed, navigate to frontend: cd frontend
Then install the following: npm i @reduxjs/toolkit @tailwindcss/vite axios react-dom react-icons react-redux react-router-dom tailwindcss

3. Execution: npm run dev


Make sure to check the port numbers of myphpadmin, react server and flask server and change them accordingly!

