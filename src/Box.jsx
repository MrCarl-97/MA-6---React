import React, { useState } from "react";
function Box({ onToggle }) {
  const [isBlack, setIsBlack] = useState(false);
  function handleClick() {
    const newIsBlack = !isBlack;
    setIsBlack(newIsBlack);
    onToggle(newIsBlack);
  }
  return (
    <div
      onClick={handleClick}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid gray",
        backgroundColor: isBlack ? "black" : "white",
      }}
    ></div>
  );
}

export default Box;
