import React from "react";
import { useState } from "react";
import { Validator } from "react";

function Image_Information({ nextStep, prevStep }) {

  let length_imag = "";
  let value_imag = "";
  let length_signatur_imag = "";
  let value_signatur_imag= "";

  const fileChange = (event) => {
    length_imag = event.target.value.length;
    value_imag = event.target.value;
  };

  const file2Change = (event) => {
    length_signatur_imag = event.target.value.length;
    value_signatur_imag= event.target.value;
  };

  let [error, setError] = useState("");
  const submitFormData = (e) => {
    e.preventDefault();

    if (length_imag< 1) {
      setError("This is requird field");
      console.log(error);
    } else if (length_signatur_imag < 1) {
      setError("This is requird field");
    } else {
      nextStep();
    }
  };
  return (
    <>
      <div className="main_container">
        <p className="text">
          SIGN UP YOUR ACCOUNT{" "}
          <span> fill all form field to go to next step</span>
        </p>
      
        <form onSubmit={submitFormData}>
          <div className="heading">
            <h2>Image Upload</h2>
            <p>3-4 step</p>
          </div>
          <div className="fields">
            <label> Upload image</label>
            <input type="file" name="uploadimage" onChange={fileChange} />
            <p style={{ color: "red" }}>{error} </p>
          </div>
          <div className="fields">
            <label> Upload Signature Photo</label>
            <input
              type="file"
              name="uploadsignatur"
              placeholder="upload your Signature Photo"
              onChange={file2Change}
            />
            <p style={{ color: "red" }}>{error} </p>
          </div>
          <div className="button">
            <button type="submit" className="next_btn  btn1">
              {" "}
              Submit{" "}
            </button>
            <button
              variant="primary"
              className="next_btn   btn2 "
              onClick={prevStep}
            >
              {" "}
              previous{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Image_Information;
