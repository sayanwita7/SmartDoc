from flask import request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from src.database.db import get_connection
import pymysql
import re

def register():
    data = request.json
    name = data.get('name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone')

    if not username or not email or not password:
        return jsonify({"error": "Missing fields"}), 400

    hashed_password = generate_password_hash(password)

    try:
        conn = get_connection()
        with conn.cursor() as cur:
            cur.execute("INSERT INTO logininfo (Name, Username, Email, Password, Phone) VALUES (%s, %s, %s, %s, %s)",
                        (name, username, email, hashed_password, phone))
        conn.commit()
        return jsonify({"message": "User registered successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


def login():
    data = request.json
    identifier = data.get('email') or data.get('phone')
    password = data.get('password')

    if not identifier or not password:
        return jsonify({"error": "Email/Phone and Password are required"}), 400
    try:
        conn = get_connection()
        with conn.cursor(pymysql.cursors.DictCursor) as cur:
            cur.execute("SELECT * FROM logininfo WHERE Email = %s OR Phone = %s", (identifier, identifier))
            user = cur.fetchone()

        if user and check_password_hash(user["Password"], password):
            return jsonify({"message": "Login successful", "user": {"Username": user['Username']}})
        else:
            return jsonify({"error": "Invalid credentials"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()

def logout():
    session.pop('user', None)
    return jsonify({"message": "Logged out successfully"}), 200