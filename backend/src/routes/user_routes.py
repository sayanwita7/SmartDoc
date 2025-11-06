from flask import Blueprint
from src.controllers.user_controller import register, login, logout

user_bp = Blueprint('user_bp', __name__)

user_bp.route("/register", methods=["POST"])(register)
user_bp.route("/login", methods=["POST"])(login)
user_bp.route("/logout", methods=["GET"])(logout)
