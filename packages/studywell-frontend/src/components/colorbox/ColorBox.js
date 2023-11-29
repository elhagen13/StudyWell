import React, { useState } from "react";
import "./ColorBoxContainer.css"; // You can create this CSS file for styling

const ColorBox = ({ color, onClick }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

const ColorBoxContainer = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    document.body.style.backgroundColor,
  ); // Initial background color

  const colors = [
    "#374954",
    "#568EA3",
    "#797596",
    "#CE6C47",
    "#558B6E",
    "#654597",
    "#704C5E",
    "#0C7C59",
    "#6C0E23",
  ];

  const handleColorBoxClick = (newColor) => {
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor; // Set background color on the body
  };

  return (
    <div>
      <div className="color-box-container" style={{ backgroundColor }}>
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            onClick={() => handleColorBoxClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBoxContainer;
