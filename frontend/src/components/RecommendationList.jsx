import React from "react";

const RecommendationList = ({ recommendations }) => {
  return (
    <div>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
};

export default RecommendationList;
