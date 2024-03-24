// Example React component
import React, { useState } from "react";
import axios from "axios";

const ImageUploader = () => {
  const [lowResImage, setLowResImage] = useState(null);
  const [highResImage, setHighResImage] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("lowResImage", lowResImage);

    try {
      const response = await axios.post(
        "http://localhost:5001/your-flask-endpoint",
        formData
      );
      setHighResImage(response.data.highResImage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setLowResImage(e.target.files[0])} />
      <button onClick={handleUpload}>Generate High-Res Image</button>
      {highResImage && (
        <img
          src={`data:image/png;base64,${highResImage}`}
          alt="High-Res Image"
        />
      )}
    </div>
  );
};

export default ImageUploader;
