"""
Route definitions.
"""

# from flask import Blueprint, render_template, request, redirect, url_for, session, send_from_directory
# import os
# import io
# import base64
# from werkzeug.utils import secure_filename
# from PIL import Image
# import numpy as np
# import cv2

# app = Blueprint('app', __name__)

# # Configurations
# UPLOAD_FOLDER = 'uploads'
# PROCESSED_FOLDER = 'processed'

# # Ensure the upload and processed folders exist
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# # Home page
# @app.route('/')
# def home():
#     return render_template('pages/home.html')

# # Project 1 page
# @app.route('/project1', methods=['GET', 'POST'])
# def project1():
#     if request.method == 'POST':
#         # Get parameters and files
#         parameter = int(request.form.get('parameter') or 50)
#         files = request.files.getlist('media')
#         processed_files = []

#         for file in files:
#             filename = secure_filename(file.filename)
#             file_path = os.path.join(UPLOAD_FOLDER, filename)
#             file.save(file_path)

#             # Process the file (example: edge detection)
#             image = Image.open(file_path)
#             if image.mode != 'RGB':
#                 image = image.convert('RGB')
#             image_np = np.array(image)
#             image_cv = image_np[:, :, ::-1]  # Convert RGB to BGR for OpenCV
#             edges = cv2.Canny(image_cv, parameter, parameter * 2)
#             processed_image = Image.fromarray(edges)
#             processed_filename = f'processed_{filename}'
#             processed_path = os.path.join(PROCESSED_FOLDER, processed_filename)
#             processed_image.save(processed_path)
#             processed_files.append(processed_filename)

#         return render_template('pages/project1.html', processed_files=processed_files)
#     else:
#         return render_template('pages/project1.html')

# # Route to serve processed files
# @app.route('/processed/<filename>')
# def processed_file(filename):
#     return send_from_directory(PROCESSED_FOLDER, filename)

# # About page (optional)
# @app.route('/about')
# def about():
#     return render_template('pages/about.html')

# # Additional project routes can be added similarly


# from app import app
# from flask import render_template, request, redirect, url_for, session, send_file
# import os
# import io
# import base64
# from werkzeug.utils import secure_filename
# from PIL import Image
# import numpy as np
# import cv2

# Define your routes here (e.g., home, project1, upload, about)

from flask import Flask, render_template, request
import base64
import numpy as np
import cv2

# /image route
@app.route("/image", methods=["GET", "POST"])
def image():
    if request.method == "POST":
        file = request.files["image"]
        if file:
            image_data = file.read()
            modified_image = add_text_to_image(
                image_data, "Hi Derrick, hope you're fine ;)"
            )
            return render_template("pages/image.html", image_data=modified_image)

    return render_template("pages/image.html", image_data=None)


# /video route
@app.route("/video", methods=["GET", "POST"])
def video():
    if request.method == "POST":
        file = request.files.get("file")
        if file:
            video_data = file.read()

            # Process video here

            return render_template("pages/video.html", video_data=video_data)

    return render_template("pages/video.html", video_data=None)
