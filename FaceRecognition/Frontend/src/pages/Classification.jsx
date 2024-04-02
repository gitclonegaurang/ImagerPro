import React, { useState } from "react";
import axios from "axios";

function Classification() {
  const [images, setImages] = useState([]);
  const [results, setResults] = useState([]);

  const handleImageUpload = async (event) => {
    const fileList = event.target.files;
    const imageDataPromises = Array.from(fileList).map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
      });
    });

    Promise.all(imageDataPromises)
      .then((imageDataList) => {
        setImages(imageDataList);
        classifyImages(imageDataList);
      })
      .catch((error) => console.error("Error while reading images:", error));
  };

  const classifyImages = async (imageDataList) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/classify_images",
        { image_data_list: imageDataList }
      );
      setResults(response.data);
      storeImages(imageDataList, response.data);
    } catch (error) {
      console.error("Error while classifying images:", error);
    }
  };

  const storeImages = async (imageDataList, results) => {
    const imagesWithNames = imageDataList.map((imageData, index) => {
      // Remove data URL prefix
      const base64ImageData = imageData.split(",")[1];
      return {
        image_data: base64ImageData,
        person_name: results[index][0].class, // Assuming the person's name is the first class in the result
      };
    });

    try {
      await axios.post("http://localhost:3000/store_images", {
        images_with_names: imagesWithNames,
      });
      console.log("Images stored successfully in MongoDB");
    } catch (error) {
      console.error("Error while storing images in MongoDB:", error);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center bg-gray-800 text-white p-4">
        <a href="#" className="flex items-center text-white">
          <img src="/images/logo.jpg" alt="Mountain" className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold">ImagePro</span>
        </a>
        <nav className="flex space-x-4">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Features
          </a>
          <a href="#" className="nav-link">
            Pricing
          </a>
          <a href="#" className="nav-link">
            About
          </a>
        </nav>
      </header>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 p-6 rounded-lg mt-6 shadow-md">
          <h1 className="text-xl font-bold">Image Classifier</h1>
          <p>Person Identified</p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          {results.map((result, index) => (
            <div key={index}>{JSON.stringify(result[0].class)}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Classification;
