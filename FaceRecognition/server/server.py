from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Specify the React app's origin

@app.route('/classify_image', methods=['POST'])
def classify_image():
    image_data = request.json['image_data']

    response = jsonify(util.classify_image(image_data))

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Sports Celebrity Image Classification")
    util.load_saved_artifacts()
    app.run(port=5000)
