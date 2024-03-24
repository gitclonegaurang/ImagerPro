// import React, { useRef } from "react";
// import styles from "./LowToHigh.module.css";

// export default function LowToHigh() {
//   const fileInputRef = useRef(null);

//   const handleUploadImage = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const imageDataUrl = e.target.result;
//         // Now you can use `imageDataUrl` to display the selected image
//         console.log("Image data URL:", imageDataUrl);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div
//         className={`${styles.leftPanel} w-full lg:w-1/2`}
//         onClick={handleUploadImage}
//       >
//         <div className={styles.imageContainer}>
//           <p className="text-center">Drag and drop your image here</p>
//           <input
//             type="file"
//             ref={fileInputRef}
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button className={styles.button} onClick={handleUploadImage}>
//           Upload Image
//         </button>
//       </div>
//       <div className={`${styles.rightPanel} w-full lg:w-1/2 bg-white`}>
//         <div className={styles.imageContainer}>
//           {/* Display the uploaded image here */}
//           <img alt="Uploaded image" className={styles.image} src="" />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import styles from "./LowToHigh.module.css";
import placeholder from "/images/placeholder.png";

export default function LowToHigh() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleSubmitImage = () => {
    console.log("Flask api code");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        setSelectedImage(imageDataUrl); // Set the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.leftPanel} w-full lg:w-1/2`}>
        <div className={styles.imageContainer} onClick={handleUploadImage}>
          <p className="text-center">Drag and drop your image here</p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          {selectedImage && (
            <img
              alt="Selected image"
              className={styles.image}
              src={selectedImage}
            />
          )}
        </div>
        <button className={styles.button} onClick={handleSubmitImage}>
          Upload Image
        </button>
      </div>
      <div className={`${styles.rightPanel} w-full lg:w-1/2 bg-white`}>
        <div className={styles.imageContainer}>
          <img
            alt="Uploaded image"
            className={styles.image}
            src={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
