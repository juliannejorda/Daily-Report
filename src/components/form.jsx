import {useState} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Formik } from "formik";
import * as yup from 'yup';
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Data from "./data"
import ReactDOM from "react";
import { StylesProvider } from "@material-ui/core/styles";



const schema = yup.object({
    name: yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters")
    .required("*Name is Required"),
    city: yup.string()
    .min(1, 'Enter valid city')
    .required('*Enter a valid city')
  });




function IntroForm() {
  // const [status, setStatus] = useState(true);
  const [data, setData] = useState();
  function finalSubmit(props) {
    console.log(props)
  }


    return(
      <StylesProvider injectFirst>
      <Button>Hook</Button>
      <h1>Hello</h1>
<div className="the-form">
  <h1 className="intro-text">PlaceHolder</h1>
    <Container  id="center-con">
  <Formik
  validationSchema={schema}
  initialValues={{
    name: "",
    city: "",
  }}
  onSubmit={(values, {setSubmitting}) => {
    setTimeout(() => {
      const formData = JSON.stringify(values, null, 2);
      console.log(formData)
     
     setData(formData)
      setSubmitting(false);
      // setStatus(false)


    }, 1000);
  }}>{( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
  <Form noValidate onSubmit={handleSubmit}  className="main-colour">
    <Form.Group controlId="validationFormik01">
      <Form.Label>Name</Form.Label>
      <Form.Control id="formInput" onChange={handleChange} name="name" size="lg" type="text" placeholder="Enter name" onBlur={handleBlur} value={values.name}
          />
            {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="validationFormik02">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={handleChange} name="city" type="text" placeholder="City" onBlue={handleBlur} value={values.city}/>
      { touched.city && errors.city ? (
        <div className="error-message">{errors.city}</div>
      ): null}
    </Form.Group>
    <Button onClick={(event) => {
      finalSubmit({data}.data)
    }} className="submit-button" variant="primary" type="submit"> 
  Submit
</Button>
  </Form>)}</Formik></Container> <Data info={data} />
</div>   </StylesProvider>
)} 


function Main() {
  const [submitted, setSubmitted] = useState(false);
  
  function submitForm() {
    setSubmitted(true)
  }

 

  return <div>{!submitted ? ( <IntroForm  /> ) : (<Data />)}


</div>
}


export default Main;
// false -> is submitting data -> render a diff component
// true render form
