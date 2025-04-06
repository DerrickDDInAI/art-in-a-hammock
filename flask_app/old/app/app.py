from flask import Flask, render_template, request
import base64
import numpy as np
import cv2


## function to add text to an image
def add_text_to_image(image_data, text):
    # Load the image from the provided data
    image = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)

    # Get the dimensions of the image
    height, width, _ = image.shape

    # Set the font and scale for the text
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.8

    # Calculate the position to place the text
    text_size, _ = cv2.getTextSize(text, font, font_scale, 2)
    text_x = (width - text_size[0]) // 2
    text_y = height // 2

    # Create a white background rectangle
    padding = 10
    background_width = text_size[0] + 2 * padding
    background_height = text_size[1] + 2 * padding
    background_x = text_x - padding
    background_y = text_y - text_size[1] - padding

    # Draw the white background rectangle
    cv2.rectangle(
        image,
        (background_x, background_y),
        (background_x + background_width, background_y + background_height),
        (255, 255, 255),
        -1,
    )

    # Add the black text to the image
    cv2.putText(
        image, text, (text_x, text_y), font, font_scale, (0, 0, 0), 2, cv2.LINE_AA
    )

    # Encode the modified image as a byte array
    _, encoded_image = cv2.imencode(".jpg", image)
    modified_image = encoded_image.tobytes()

    return modified_image


# initializing Flask
app = Flask(__name__)


def b64encode_filter(s):
    """Custom Jinja2 filter to encode binary data to base64."""
    return base64.b64encode(s).decode("utf-8")


app.jinja_env.filters["b64encode"] = b64encode_filter


# / homepage route
@app.route("/", methods=["GET"])
def index():
    return render_template("pages/index.html", video_data=None)


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


if __name__ == "__main__":
    app.run(debug=True)
