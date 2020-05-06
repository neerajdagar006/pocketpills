import React from "react";

export default function CartComponent({ images }) {
  return (
    <div>
      {images
        .filter(image => image.isSelected === true)
        .map(image => (
          <div className="image-container" key={image.id}>
            <img src={image.download_url} alt="image" />
          </div>
        ))}
    </div>
  );
}
