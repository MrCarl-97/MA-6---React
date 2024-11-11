import React, { useState } from "react";
import Box from "./Box";
import "./styles.css";

function Parent() {
  const [onCount, setOnCount] = useState(0);

  function handleToggle(isOn) {
    setOnCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  }

  return (
    <div className="parent">
      <h1>Count: {onCount}</h1>
      <div className="grid-container">
        <Box onToggle={handleToggle} />
        <Box onToggle={handleToggle} />
        <Box onToggle={handleToggle} />
        <Box onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Parent;
