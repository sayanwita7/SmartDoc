from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
# from database.db import db
from src.routes.user_routes import user_bp

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY", "default_secret")
frontend_urls = os.getenv("FRONTEND_URLS", "http://localhost:5173").split(",")
CORS(app, supports_credentials=True, resources={r"/*": {"origins": frontend_urls}})

app.register_blueprint(user_bp, url_prefix="/user")

@app.route("/")
def home():
    return jsonify({"message": "Welcome"})

if __name__ == "__main__":
    app.run(debug=True)
