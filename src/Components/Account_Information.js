import { useState } from "react";
import "./Account_information.css";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function Account_Information({ nextStep, handleFormData, values, nextState }) {

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    if (validator.isEmpty(values.email)) {
      setErrorEmail(true);
    }
    if (validator.isEmpty(values.username)) {
      setErrorUsername(true);
    }
    if (validator.isEmpty(values.password)) {
      setErrorPassword(true);
    }
    if (validator.isEmpty(values.confirmpassword)) {
      setErrorConfirmPassword(true);
    }
    if (values.password != values.confirmpassword) {
      setErrorPassword(false);
      setErrorConfirmPassword(true);
    }
    if (
      !validator.isEmpty(values.email) &&
      !validator.isEmpty(values.username) &&
      values.password === values.confirmpassword
    ) {
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
            <h2> Account Information</h2>
            <p> 1-4 step</p>
          </div>

          <div className="fields">
            <label> Email:*</label>
            <input
              type="email"
              name="email"
              defaultValue={values.email}
              placeholder="Enter your Email"
              onChange={handleFormData("email")}
            />
            {errorEmail ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              " "
            )}
          </div>
          <div className="fields">
            <label> User Name:*</label>
            <input
              type="text"
              name="username"
              defaultValue={values.username}
              placeholder="Enter your User Name"
              onChange={handleFormData("username")}
            />
            {errorUsername ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </div>
          <div className="fields">
            <label> Password:*</label>
            <input
              type="password"
              name="password"
              defaultValue={values.password}
              placeholder="Enter your password"
              onChange={handleFormData("password")}
            />
            {errorPassword ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </div>
          <div className="fields">
            <label> Confirm Password:*</label>
            <input
              type="password"
              name="confirmpassword"
              defaultValue={values.confirmpassword}
              placeholder="Enter your password"
              onChange={handleFormData("confirmpassword")}
            />
            {errorConfirmPassword ? (
              values.confirmpassword == "" ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                <Form.Text style={{ color: "red" }}>
                  Password does not match
                </Form.Text>
              )
            ) : (
              ""
            )}
          </div>
          <div className="button">
            <button type="submit" className="next_btn btn1 ">
              {" "}
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Account_Information;
