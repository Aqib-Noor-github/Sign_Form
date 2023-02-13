import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function Personal_Information({ nextStep, handleFormData_personal_info, values, prevStep }) {

  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [errorAltenatecontact, setErrorAltenateContact] = useState(false);

  const submitFormData_personal_info = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.firstName)) {
      setErrorFirstName(true);
    }
    if (validator.isEmpty(values.lastName)) {
      setErrorLastName(true);
    }
    if (validator.isEmpty(values.contact)) {
      setErrorContact(true);
    }
    if (validator.isEmpty(values.altenatecontact)) {
      setErrorAltenateContact(true);
    }
    if (
      !validator.isEmpty(values.firstName) &&
      !validator.isEmpty(values.lastName) &&
      !validator.isEmpty(values.contact) &&
      !validator.isEmpty(values.altenatecontact)
    ) {
      nextStep();
    }
  };
  return (
    <>
      <div className="main_container">
        <p className="text">
          SIGN UP YOUR ACCOUNT
          <span> fill all form field to go to next step</span>
        </p>
        <form onSubmit={submitFormData_personal_info}>
          <div className="heading">
            <h2> Prsonal Information</h2>
            <p>2-4 step</p>
          </div>
          <div className="fields">
            <label> First Name:*</label>
            <input
              type="text"
              name="firstName"
              defaultValue={values.firstName}
              placeholder="Enter your first name"
              onChange={handleFormData_personal_info("firstName")}
            />
            {errorFirstName ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              " "
            )}
          </div>
          <div className="fields">
            <label> Last Name:*</label>
            <input
              type="text"
              name="lastName"
              defaultValue={values.lastName}
              placeholder="Enter your last Name"
              onChange={handleFormData_personal_info("lastName")}
            />
            {errorLastName ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              " "
            )}
          </div>
          <div className="fields">
            <label> Contact:*</label>
            <input
              type="number"
              name="contact"
              defaultValue={values.contact}
              placeholder="Enter your contact"
              onChange={handleFormData_personal_info("contact")}
            />
            {errorContact ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              " "
            )}
          </div>
          <div className="fields">
            <label> altenate contact:*</label>
            <input
              type="number"
              name="altenatecontact"
              defaultValue={values.altenatecontact}
              placeholder="Enter your altenate contact"
              onChange={handleFormData_personal_info("altenatecontact")}
            />
            {errorAltenatecontact ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              " "
            )}
          </div>
          <div className="button">
            <button type="submit" className="next_btn  btn1">
              {" "}
              Next{" "}
            </button>
            <button className="next_btn   btn2 " onClick={prevStep}>
              {" "}
              previous{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Personal_Information;
