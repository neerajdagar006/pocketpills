import React from "react";

export default function CartComponent({ images }) {
  return (
    <div>
      <h2>List of selected products</h2>

      {images
        .filter(image => image.isSelected === true)
        .map(image => (
          <div className="image-container">
            <img src={image.download_url} alt="image" />
          </div>
        ))}
    </div>
  );
}
