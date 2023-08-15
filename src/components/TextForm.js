import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    //   var newText = document.getElementById("myBox");
    //   newText.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
  };
  const handleExtraSpaceClick = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#454f52",
        }}
      >
        <h1 className="my-4"> {props.heading} </h1>{" "}
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "#454f52",
            }}
            value={text}
            id="myBox"
            rows="10"
            onChange={handleOnChange}
          ></textarea>{" "}
        </div>{" "}
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase{" "}
        </button>{" "}
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleDownClick}
        >
          Convert to Lowecase{" "}
        </button>{" "}
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleClearClick}
        >
          Clear{" "}
        </button>{" "}
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleCopyClick}
        >
          Copy{" "}
        </button>{" "}
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleExtraSpaceClick}
        >
          Remove Extra Space{" "}
        </button>{" "}
      </div>{" "}
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#454f52",
        }}
      >
        <h2> Your text summary </h2>{" "}
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length}
          characters{" "}
        </p>{" "}
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read{" "}
        </p>{" "}
        <h2> Preview </h2>{" "}
        <p> {text.length > 0 ? text : "Nothing to preview"} </p>{" "}
      </div>{" "}
    </>
  );
}
