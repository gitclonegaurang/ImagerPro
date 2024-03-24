# # from flask import Flask, request, jsonify
# # import numpy as np
# # from sklearn.linear_model import LinearRegression

# # app = Flask(__name__)

# # # Create and train the model
# # np.random.seed(42)
# # X = 2 * np.random.rand(100, 1)
# # y = 4 + 3 * X + np.random.randn(100, 1)

# # model = LinearRegression()
# # model.fit(X, y)

# # @app.route('/')
# # def home():
# #     return "Linear Regression API"

# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     try:
# #         # Get input data from request
# #         data = request.get_json(force=True)
# #         features = np.array(data['features']).reshape(-1, 1)

# #         # Make predictions using the trained model
# #         predictions = model.predict(features)

# #         # Prepare response
# #         response = {'predictions': predictions.flatten().tolist()}

# #         return jsonify(response)

# #     except Exception as e:
# #         return jsonify({'error': str(e)})

# # if __name__ == '__main__':
# #     app.run(debug=True)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import numpy as np
# from sklearn.linear_model import LinearRegression

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Create and train the model
# np.random.seed(42)
# X = 2 * np.random.rand(100, 1)
# y = 4 + 3 * X + np.random.randn(100, 1)

# model = LinearRegression()
# model.fit(X, y)

# @app.route('/')
# def home():
#     return "Linear Regression API"

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Get input data from request
#         data = request.get_json(force=True)
#         features = np.array(data['features']).reshape(-1, 1)

#         # Make predictions using the trained model
#         predictions = model.predict(features)

#         # Prepare response
#         response = {'predictions': predictions.flatten().tolist()}

#         return jsonify(response)

#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)
#*********************************************************************************************************
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import base64
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/your-flask-endpoint', methods=['POST'])
def process_image():
    try:
        uploaded_file = request.files['lowResImage']
        
        # Process the image (replace this with your machine learning model)
        high_res_image = process_image_function(uploaded_file)

        # Convert the high resolution image to base64
        buffered = io.BytesIO()
        high_res_image.save(buffered, format='PNG')
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

        # Return the base64-encoded image as a response
        return jsonify({'highResImage': img_str})

    except Exception as e:
        print(str(e))
        return jsonify({'error': 'Failed to process image'}), 500

def process_image_function(uploaded_file):
    img = Image.open(uploaded_file)

    # Perform some basic image processing (replace this with your model logic)
    img_array = np.array(img)
    processed_img_array = img_array * 2  # Example: Just doubling the pixel values for illustration

    # Create a PIL Image from the processed array
    processed_img = Image.fromarray(processed_img_array)

    return processed_img

if __name__ == '__main__':
    app.run(debug=True, port=5001)
