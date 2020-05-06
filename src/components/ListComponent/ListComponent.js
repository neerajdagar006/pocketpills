import React from "react";

export default function ListComponent({ images, onselected }) {
  return (
    <div>
      {images.map(image => (
        <div className="image-container" id={image.id} key={image.id}>
          {image.isVisible ? (
            <img src={image.download_url} alt="image" />
          ) : null}
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
