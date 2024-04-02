// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Classification() {
//   const [imageData, setImageData] = useState("");
//   const [result, setResult] = useState("");

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = async () => {
//       const imageData = reader.result;

//       try {
//         const response = await axios.post(
//           "http://localhost:5000/classify_image",
//           {
//             image_data: imageData,
//           }
//         );

//         setResult(response.data);
//         console.log(result);
//       } catch (error) {
//         console.error("Error while uploading image:", error);
//         setResult("Error occurred during image upload");
//       }
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
//   useEffect(() => {
//     console.log("Result:", result);
//   }, [result]);
//   return (
//     <div>
//       <h1>Image Classifier</h1>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       {result && <div>{JSON.stringify(result)}</div>}
//     </div>
//   );
// }

// export default Classification;
import React, { useState, useEffect } from "react";
import axios from "axios";

function Classification() {
  const [imageData, setImageData] = useState("");
  const [result, setResult] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      const imageData = reader.result;

      try {
        const response = await axios.post(
          "http://localhost:5000/classify_image",
          {
            image_data: imageData,
          }
        );

        setResult(response.data);

        // After receiving the result, send the image data and the identified person's name to Flask
        const personName = response.data[0].class; // Assuming the person's name is the first class in the result
        // console.log("person name", imageData);
        sendImageToServer(imageData, personName);
      } catch (error) {
        console.error("Error while uploading image:", error);
        setResult("Error occurred during image upload");
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const sendImageToServer = async (imageData, personName) => {
    try {
      // Convert the image data to base64 string
      const base64ImageData = imageData.split(",")[1]; // Remove data URL prefix
      // console.log("Base64 Image Data:", base64ImageData);

      await axios.post("http://localhost:3000/store_image", {
        // Send the base64-encoded image data and the person's name to the backend
        image_data: base64ImageData,
        person_name: personName,
      });

      console.log("Image stored successfully in MongoDB");
    } catch (error) {
      console.error("Error while storing image in MongoDB:", error);
    }
  };

  useEffect(() => {
    console.log("The identified person is :", result);
  }, [result]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 p-6 rounded-lg mt-6 shadow-md">
        <h1 className="text-xl font-bold">Image Classifier</h1>
        <p>Person Identified</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {result && <div>{JSON.stringify(result[0].class)}</div>}
      </div>
    </div>
  );
}

export default Classification;
