import React from "react";

export default function ListComponent({ images, onselected }) {
  console.log(images);
  return (
    <div>
      <h2>List of products</h2>
      {images.map(image => (
        <div className="image-container">
          <img src={image.download_url} alt="image" />
          <input
            type="checkbox"
            onChange={() => onselected(image)}
            checked={Boolean(image.isSelected)}
            value="Select"
          />
        </div>
      ))}
    </div>
  );
}
