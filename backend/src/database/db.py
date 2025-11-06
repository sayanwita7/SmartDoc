import os
import pymysql
from dotenv import load_dotenv

env_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
load_dotenv(dotenv_path=env_path)

connection = None

def connect_db():
    global connection
    try:
        connection = pymysql.connect(
            host=os.getenv("HOST"),
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            database=os.getenv("DATABASE")
        )
        print("✅ MySQL connected successfully with PyMySQL.")
        return connection
    except Exception as e:
        print("❌ MySQL connection failed:", e)
        raise e


def get_connection():
    global connection
    if connection is None or not connection.is_connected():
        connect_db()
    return connection

# connect_db()
