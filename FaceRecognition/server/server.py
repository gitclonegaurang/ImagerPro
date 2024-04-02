
from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Specify the React app's origin

@app.route('/classify_images', methods=['POST'])
def classify_images():
    image_data_list = request.json['image_data_list']  # List of base64-encoded image data

    results = []

    for image_data in image_data_list:
        result = util.classify_image(image_data)
        results.append(result)

    return jsonify(results)

if __name__ == "__main__":
    print("Starting Python Flask Server For Sports Celebrity Image Classification")
    util.load_saved_artifacts()
    app.run(port=5000)
