import React from "react";

const Error = ({ title, message }) => {
  return (
    <div
      style={{
        border: "1px solid darkred",
        background: "salmon",
        textAlign: "center",
      }}>
      <i>&#9888;</i> ERROR!
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
