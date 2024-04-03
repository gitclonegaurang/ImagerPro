// // import React, { useRef } from "react";
// // import styles from "./LowToHigh.module.css";

// // export default function LowToHigh() {
// //   const fileInputRef = useRef(null);

// //   const handleUploadImage = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         const imageDataUrl = e.target.result;
// //         // Now you can use `imageDataUrl` to display the selected image
// //         console.log("Image data URL:", imageDataUrl);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div
// //         className={`${styles.leftPanel} w-full lg:w-1/2`}
// //         onClick={handleUploadImage}
// //       >
// //         <div className={styles.imageContainer}>
// //           <p className="text-center">Drag and drop your image here</p>
// //           <input
// //             type="file"
// //             ref={fileInputRef}
// //             className="hidden"
// //             onChange={handleFileChange}
// //           />
// //         </div>
// //         <button className={styles.button} onClick={handleUploadImage}>
// //           Upload Image
// //         </button>
// //       </div>
// //       <div className={`${styles.rightPanel} w-full lg:w-1/2 bg-white`}>
// //         <div className={styles.imageContainer}>
// //           {/* Display the uploaded image here */}
// //           <img alt="Uploaded image" className={styles.image} src="" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useRef, useState } from "react";
// import styles from "./LowToHigh.module.css";
// import placeholder from "/images/placeholder.png";

// export default function LowToHigh() {
//   const fileInputRef = useRef(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleUploadImage = () => {
//     fileInputRef.current.click();
//   };

//   const handleSubmitImage = () => {
//     console.log("Flask api code");
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const imageDataUrl = e.target.result;
//         setSelectedImage(imageDataUrl); // Set the selected image
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-zinc-400 z-1 h-full w-screen pb-80" style={{
//       backgroundImage: 'url(\'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       overflow: 'hidden'
//     }}>
//       <header className="sticky top-0 text-xl  flex justify-between p-8 items-center bg-transparent bg-gray-800 text-white p-4">
//         <a href="http://localhost:5173/" className="flex items-center text-white font-bold">
//           <img
//             src="/images/logo.jpg"
//             alt="Mountain"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="text-xl font-bold text-white">ImagePro</span>
//         </a>
//         <nav className="flex space-x-4">
//           <a href="http://localhost:5173" className="nav-link">Home</a>
//           {/* <a href="#" className="nav-link">Features</a>
//           <a href="#" className="nav-link">Pricing</a> */}
//           <a href="http://localhost:5173/imagegallery" className="nav-link">Gallery</a>
//         </nav>
//       </header>
//       <div className={styles.container} >
//         <div className={`${styles.leftPanel} w-full lg:w-1/2`}>
//           <div className={styles.imageContainer} onClick={handleUploadImage}>
//             <p className="text-center text-white">Drag and drop your image here</p>
//             <input
//               type="file"
//               ref={fileInputRef}
//               className="hidden"
//               onChange={handleFileChange}
//             />
//             {selectedImage && (
//               <img
//                 alt="Selected image"
//                 className={styles.image}
//                 src={selectedImage}
//               />
//             )}
//           </div>
//           <button className={styles.button} onClick={handleSubmitImage}>
//             Upload Image
//           </button>
//         </div>
//         <div className={`${styles.rightPanel} w-full lg:w-1/2 bg-white`}>
//           <div className={styles.imageContainer}>
//             <img
//               alt="Uploaded image"
//               className={styles.image}
//               src={placeholder}
//             />
//           </div>
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
  const [highResImage, setHighResImage] = useState(null);

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleSubmitImage = async () => {
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("lowResImage", selectedImage);

        const response = await fetch(
          "http://localhost:5001/your-flask-endpoint",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          setHighResImage(data.highResImage); // Set the high resolution image URL
        } else {
          console.error("Failed to upload image:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // Set the selected image file
    }
  };

  return (
    <div
      className="bg-zinc-400 z-1 h-full w-screen pb-80"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <header className="sticky top-0 text-xl  flex justify-between p-8 items-center bg-transparent bg-gray-800 text-white p-4">
        <a
          href="http://localhost:5173/"
          className="flex items-center text-white font-bold"
        >
          <img src="/images/logo.jpg" alt="Mountain" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-white">ImagePro</span>
        </a>
        <nav className="flex space-x-4">
          <a href="http://localhost:5173" className="nav-link">
            Home
          </a>
          <a href="http://localhost:5173/imagegallery" className="nav-link">
            Gallery
          </a>
        </nav>
      </header>
      <div className={styles.container}>
        <div className={`${styles.leftPanel} w-full lg:w-1/2`}>
          <div className={styles.imageContainer} onClick={handleUploadImage}>
            <p className="text-center text-white">
              Drag and drop your image here
            </p>
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
                src={URL.createObjectURL(selectedImage)}
              />
            )}
          </div>
          <button className={styles.button} onClick={handleSubmitImage}>
            Upload Image
          </button>
        </div>
        <div className={`${styles.rightPanel} w-full lg:w-1/2 bg-white`}>
          <div className={styles.imageContainer}>
            {highResImage && (
              <img
                alt="High resolution image"
                className={styles.image}
                src={`data:image/png;base64,${highResImage}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
