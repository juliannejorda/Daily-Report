import React, { useState } from 'react';
// import { FormUserDetails } from './FormUserDetails';
// import { FormPersonalDetails } from './FormPersonalDetails';
// import { Confirm } from './Confirm';
// import { Success } from './Success';
import FormUserDetails from "./InitalForm";
import Report from "./Report"


const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    city: ''
  });
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => {setStep(prev => prev - 1)
setFormData({
    name: '',
    city: ''
  })}
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
        
      );
    case 2:
      return (<Report
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
  
    default:
      return <h1>Sorry not found, refresh please.</h1>;
  }
};

export default UserForm;