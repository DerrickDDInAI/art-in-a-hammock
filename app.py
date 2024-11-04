"""
Main application file where Flask app is initialized.
"""
from flask import Flask

app = Flask(__name__, instance_relative_config=True)

# app.config.from_object('config')
# Optionally load config from 'instance/config.py' if it exists
app.config.from_pyfile('config.py', silent=True)

from routes import app as routes_app
app.register_blueprint(routes_app)

if __name__ == '__main__':
    app.run(debug=True)

