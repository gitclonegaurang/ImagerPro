import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
<div className="bg-zinc-400 z-0 h-full w-screen pb-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow:'hidden'}}>        
    <header className="sticky top-0 text-xl z-50 flex justify-between p-8 items-center bg-transparent bg-gray-800 text-white p-4">
          <a href="http://localhost:5173/" className="flex items-center text-white font-bold">
            <img
              src="/images/logo.jpg"
              alt="Mountain"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-bold text-white">ImagePro</span>
          </a>
          <nav className="flex space-x-4">
            <a href="http://localhost:5173" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Features
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="http://localhost:5173/imagegallery" className="nav-link">
              Gallery
            </a>
          </nav>
        </header>
        <div className="flex flex-col items-center z-1">
        <div className="bg-gray-400 p-9 md:p-20 rounded-lg mt-6 shadow-md text-center">
  <h1 className="text-3xl md:text-5xl mb-4 font-bold">Image Classifier</h1>
  <p className="text-3xl mb-6 font-bold">Person Identified</p>
  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageUpload}
    className="bg-[#003C47] text-white rounded-lg p-2 shadow-md mb-6"
  />
  {results.map((result, index) => (
    <div key={index}>{JSON.stringify(result[0].class)}</div>
  ))}
</div>

          <Link
            to="/imagegallery"
            className="bg-green-400 font-bold text-grey mt-6 p-6 text-3xl rounded-full"
          >
            Go to Gallery{" "}
          </Link>
          {/* <button className="bg-green-400 m-2 p-2 rounded">Go to Gallary</button> */}
        </div>
        <footer className="bg-[#003C47] text-white p-4 text-center fixed bottom-0 w-full">
          <p className="font-bold text-xl">&copy; 2024 ImagePro. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}

export default Classification;
