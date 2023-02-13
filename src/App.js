import "./App.css";
import { useState } from "react";
import { Stepper } from "react-form-stepper";
import { Progress } from "antd";

import Personal_Information from "./Components/Personal_Information";
import Image_Information from "./Components/Image_Information";
import Result from "./Components/Result";
import Account_Information from "./Components/Account_Information";
import Stepper_code from "./Components/Stepper_code";


function App() {

  const [step, setstep] = useState(1);
  let stepupdate = step;
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [FormData_personal_info, setFormData_personal_info] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    altenatecontact: "",
  });

  const [state, setstate] = useState(1);

  const nextState = () => {
    setstate(state + 1);
    console.log(state);
    return nextState;
  };

  const nextStep = () => {
    setstep(step + 1);
    console.log(step);
  };
  const prevStep = () => {
    setstep(stepupdate - 1);
    console.log(stepupdate);
  };
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;
    console.log(value);
    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  const handleInputData_personal_info = (input) => (e) => {
    // input value from the form
    const { value } = e.target;
    console.log(value);
    //updating for data state taking previous state and then adding new value to create new object
    setFormData_personal_info((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    case 1:
      return (
        <>
          <Stepper_code currentStep={step} />
          <Progress strokeLinecap="butt" percent={25} style={{ width:"60%" , position:"absolute" , top:"170px"  ,left: "280px"}} />

          <Account_Information
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </>
      );
    case 2:
      return (
        <>
          <Stepper_code currentStep={step} style={{ color: 'blue', lineHeight : 10, padding: 20 }}/>
          <Progress strokeLinecap="butt" percent={50}  style={{ width:"60%" , position:"absolute" , top:"170px"  ,left: "280px"}}/>

          <Personal_Information
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData_personal_info={handleInputData_personal_info}
            values={FormData_personal_info}
            nextState={nextState}
          />
        </>
      );
    case 3:
      return (
        <>
          <Stepper_code currentStep={step} style={{ color: 'blue', lineHeight : 10, padding: 20 }} />
          <Progress strokeLinecap="butt" percent={75} style={{ width:"60%" , position:"absolute" , top:"170px"  ,left: "280px"}}/>

          <Image_Information nextStep={nextStep} prevStep={prevStep} />
        </>
      );
    case 4:
      return (
        <>
          <Stepper_code currentStep={step} className="progress_line" />
          <Progress strokeLinecap="butt" percent={100} style={{ width:"60%" , position:"absolute" , top:"170px"  ,left: "280px"}} />
          <Result values={formData} values_personal_info={FormData_personal_info} />
        </>
      );
    default:
      return <div className="App"></div>;
  }
}

export default App;
