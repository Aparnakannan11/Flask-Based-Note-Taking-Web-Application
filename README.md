# Flask Note-Taking Web Application

## Overview
This project is a Flask-based web application designed for managing notes. It is a beginner-friendly project based on Flask including user authentication, routing, templating, and database integration using SQLite.

## Features
- **User Authentication**: Secure login and registration system.
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **SQLite Integration**: Persistent storage for user data and notes.
- **Templating**: Dynamic web pages using Jinja2.
- **Session Management**: Track user sessions for a seamless experience.

## Technologies Used
- **Backend**: Flask (Python)
- **Database**: SQLite
- **Frontend**: HTML, CSS (Bootstrap for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/techwithtim/Flask-Web-App-Tutorial.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Flask-Web-App-Tutorial
   ```
3. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Initialize the database:
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```
6. Run the application:
   ```bash
   flask run
   ```

## Usage
1. Open a browser and navigate to `http://127.0.0.1:5000/`.
2. Register a new account or log in with existing credentials.
3. Start creating, editing, or deleting notes.

## Folder Structure
- **templates/**: Contains HTML templates.
- **static/**: Contains static files like CSS and JavaScript.
- **app.py**: Main Flask application file.
- **models.py**: Database models.
- **forms.py**: Flask-WTF forms for user input.
