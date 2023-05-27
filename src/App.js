import "./App.css";
import React, { useState } from "react";
import crypto from "crypto-js";
function App() {
  document.body.style.backgroundColor = "rgb(74 214 150)";
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const handelOnChange = (e) => {
    setText(e.target.value);
  };

  const handelMD5 = () => {
    let newOutput = crypto.MD5(text).toString();
    setOutput(newOutput);
  };

  const handelSha1 = () => {
    let newOutput = crypto.SHA1(text).toString();
    setOutput(newOutput);
  };

  const handelSha256 = () => {
    let newOutput = crypto.SHA256(text).toString();
    setOutput(newOutput);
  };
  const handleCopy = () => {
    var output = document.getElementById("exampleFormControlTextarea2");
    output.select();
    navigator.clipboard.writeText(output.value);
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>HashMaker</strong>
          </a>
        </div>
      </nav>

      {/* ------------------------------------------------------------- */}

      <div className="container my-3">
        <div className="mb-3">
          <h2>Enter a string to generate hash value: </h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="your data string goes here: "
            onChange={handelOnChange}
            value={text}
          ></textarea>
        </div>
      </div>

      <div className="container">
        <h3>Click on the button to generate hash value: </h3>
        <button type="button" class="btn btn-primary mx-3" onClick={handelMD5}>
          MD5
        </button>

        <button type="button" class="btn btn-primary mx-3" onClick={handelSha1}>
          SHA1
        </button>

        <button
          type="button"
          class="btn btn-primary mx-3"
          onClick={handelSha256}
        >
          SHA256
        </button>
      </div>

      <div className="container my-4">
        <h4>output: </h4>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="2"
          placeholder="your hash value will appear here: "
          value={output}
          disabled
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
    </div>
  );
}

export default App;
