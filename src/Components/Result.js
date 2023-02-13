import React from "react";
import { Card } from "react-bootstrap";
function Result({ values, values_personal_info}) {

  const { email, username, password, confirmpassword } = values;
  const { firstName, lastName, contact, altenatecontact } = values_personal_info;

  return ( 
    <>
      <div className="main_container " >
        <p className="text">
          SIGN UP YOUR ACCOUNT
          <span> fill all form field to go to next step</span>
        </p>
        <div className="result">
        <p>
          {" "}
          <strong> Email :</strong> {email}{" "}
        </p>
        <p>
          {" "}
          <strong>User Name :</strong> {username}{" "}
        </p>
        <p>
          {" "}
          <strong>Password :</strong> {password}{" "}
        </p>
        <p>
          {" "}
          <strong>Confirm Password :</strong> {confirmpassword}{" "}
        </p>
        <p>
          {" "}
          <strong> First Name :</strong> {firstName}{" "}
        </p>
        <p>
          {" "}
          <strong>Last Name :</strong> {lastName}{" "}
        </p>
        <p>
          {" "}
          <strong>Contact :</strong> {contact}{" "}
        </p>
        <p>
          {" "}
          <strong>Altenate Contact :</strong> {altenatecontact}{" "}
        </p>
        </div>
        
      </div>
    </>
  );
}
export default Result;
