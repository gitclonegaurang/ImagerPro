import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [predictions, setPredictions] = useState([]);
  const [inputData, setInputData] = useState({ features: [1.5, 2.0, 2.5] });

  const handlePredict = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        inputData
      );

      setPredictions(response.data.predictions);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1>Linear Regression Predictions</h1>
      <button onClick={handlePredict}>Predict</button>
      <div>
        <strong>Predictions:</strong>
        <ul>
          {predictions.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
