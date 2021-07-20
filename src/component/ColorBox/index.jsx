import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const randomIndex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomIndex;
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
