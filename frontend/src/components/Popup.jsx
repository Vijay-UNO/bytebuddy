import React, { useState } from "react";
import axios from "axios";
import RecommendationList from "./RecommendationList";

const Popup = () => {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/recommendations", { query });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations", error);
    }
  };

  return (
    <div className="popup-container">
      <input
        type="text"
        placeholder="Enter tech need..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getRecommendations}>Get Recommendations</button>
      <RecommendationList recommendations={recommendations} />
    </div>
  );
};

export default Popup;
