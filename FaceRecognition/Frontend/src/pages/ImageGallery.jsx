/* eslint-disable react/no-unknown-property */
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ImageGallery() {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     // Fetch image data from the backend when the component mounts
//     const fetchImageData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/get_all_data");
//         setCollections(response.data);
//       } catch (error) {
//         console.error("Error while fetching image data:", error);
//       }
//     };

//     fetchImageData();
//   }, []);

//   const renderImages = () => {
//     return collections.map((collection, index) => (
//       <div key={index}>
//         <h2>{collection.collectionName}</h2>
//         <div className="image-container">
//           <div className="image-items">
//             {collection.collectionData.map((image, i) => (
//               <div key={i} className="image-item">
//                 <img
//                   src={`data:image/jpeg;base64,${image.image_data}`}
//                   alt={`Image ${i}`}
//                   style={{ width: "300px", height: "200px" }} // Fixed size for images
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="gallery-container">{renderImages()}</div>
//       <style jsx>{`
//         .image-items {
//           display: flex;
//           flex-wrap: wrap;
//         }
//         .image-item {
//           margin: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ImageGallery;
import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageGallery() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);

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

  const openModal = (collectionName) => {
    setSelectedCollection(collectionName);
  };

  const closeModal = () => {
    setSelectedCollection(null);
  };

  const renderImagesInModal = () => {
    if (!selectedCollection) return null;

    const collection = collections.find(
      (collection) => collection.collectionName === selectedCollection
    );

    if (!collection) return null;

    return (
      <div className="modal">
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <h2>{selectedCollection}</h2>
          <div className="image-container">
            {collection.collectionData.map((image, i) => (
              <div key={i} className="image-item">
                <img
                  src={`data:image/jpeg;base64,${image.image_data}`}
                  alt={`Image ${i}`}
                  style={{ width: "300px", height: "200px" }} // Fixed size for images
                />
                <div className="download-button">
                  <a
                    href={`data:image/jpeg;base64,${image.image_data}`}
                    download={`Image_${i}.jpg`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderFolders = () => {
    return collections.map((collection, index) => (
      <button
        key={index}
        className="folder-button"
        onClick={() => openModal(collection.collectionName)}
      >
        {collection.collectionName}
      </button>
    ));
  };

  return (
<div className="bg-zinc-400 z-0 h-full w-screen pb-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow:'hidden'}}>        
      <header className="sticky top-0 text-xl z-50 flex justify-between p-8 mt-4 items-center bg-transparent bg-gray-800 text-white p-4">
          <a href="#" className="flex items-center text-white font-bold">
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

      <div className="flex justify-center items-center h-screen">
        <div className="border p-4">
          <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
          <div className="folders-container">{renderFolders()}</div>
          {renderImagesInModal()}
        </div>
        <style jsx>{`
      .folders-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
      }
      .folder-button {
        padding: 12px 24px;
        background-color: #4a90e2;
        width:100%
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 10px;
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000; // Ensure the overlay is above other content
      }
      .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        overflow-y: auto;
        max-height: 80%;
        z-index: 1001; // Ensure the content is above the overlay
        position: relative; // Allow positioning the close button
      }
      .image-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
      }
      .image-item {
        margin: 0 10px 10px 0;
      }
      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 6px 12px;
        background-color: #4a90e2;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .close-button:hover {
        background-color: #3578c4; // Darken the color on hover
      }
      .download-button {
        margin-top: 10px;
      }
    `}</style>
      </div>
      <footer className="bg-zinc-800 text-white p-4 text-center fixed bottom-0 w-full">
          <p className="font-bold text-xl">&copy; 2024 ImagePro. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default ImageGallery;
