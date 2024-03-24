import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageGallery() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch image data from the backend when the component mounts
    const fetchImageData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get_all_data");
        setCollections(response.data);
      } catch (error) {
        console.error("Error while fetching image data:", error);
      }
    };

    fetchImageData();
  }, []);

  const renderImages = () => {
    return collections.map((collection, index) => (
      <div key={index}>
        <h2>{collection.collectionName}</h2>
        <div className="image-container">
          {collection.collectionData.map((image, i) => (
            <div key={i} className="image-item">
              <img
                src={`data:image/jpeg;base64,${image.image_data}`}
                alt={`Image ${i}`}
                style={{ width: "400px", height: "300px" }} // Fixed size for images
              />
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>{renderImages()}</div>
    </div>
  );
}

export default ImageGallery;
