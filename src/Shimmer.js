import React from 'react';

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(18).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-line shimmer-line-title"></div>
          <div className="shimmer-line shimmer-line-subtitle"></div>
          <div className="shimmer-line shimmer-line-description"></div>
        </div>
      ))}
    </div> 
  );
};

export default Shimmer;

