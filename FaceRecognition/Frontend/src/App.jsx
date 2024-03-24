// // import Dashboard from "./Dashboard";

// import Component from "./pages/Component";

// import Component from "./ImageUploader";
// import ImageUploader from "./ImageUploader";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component from "./pages/Component";
import LowToHigh from "./pages/LowToHigh";
import Dashboard from "./Dashboard";
import ImageUploader from "./ImageUploader";
import Classification from "./pages/Classification";
import ImageGallery from "./pages/ImageGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/low-to-high-resolution" element={<LowToHigh />} />
        <Route path="/sample-low-to-high" element={<ImageUploader />} />
        <Route path="/image-classification" element={<Classification />} />
        <Route path="/filters-and-editing" element={<Component />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

// // export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [predictions, setPredictions] = useState([]);
//   const [inputData, setInputData] = useState({ features: [1.5, 2.0, 2.5] });

//   const handlePredict = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/predict', inputData);

//       setPredictions(response.data.predictions);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Linear Regression Predictions</h1>
//       <button onClick={handlePredict}>Predict</button>
//       <div>
//         <strong>Predictions:</strong>
//         <ul>
//           {predictions.map((value, index) => (
//             <li key={index}>{value}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default App;
