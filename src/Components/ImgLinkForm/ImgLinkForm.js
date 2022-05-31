import React from "react";
import "./imglinkform.css";

const ImgLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <>
      <div>
        <h1>{"This is a img face detection"}</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onInputChange} />
        <button onClick={onSubmit}>Detect</button>
      </div>
    </>
  );
};

export default ImgLinkForm;
