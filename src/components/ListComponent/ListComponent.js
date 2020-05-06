import React from "react";

export default function ListComponent({ images, onselected }) {
  return (
    <div>
      {images.map(image => (
        <div className="image-container" id={image.id} key={image.id}>
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
