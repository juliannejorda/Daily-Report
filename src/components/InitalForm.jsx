import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import { Header } from './Header';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import Container from "react-bootstrap/Container";
import { StylesProvider } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import ParticleEffectButton from 'react-particle-effect-button'
import { motion } from "framer-motion";
import particlesConfig from "./particlesConfig";
import Particles from "react-particles-js";
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import Fade from "react-reveal/Fade"

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // background: "linear-gradient(to left bottom, #3494e6, #7a8ce7, #ab82dc, #d176c8, #ec6ead)",
    background: "#F0F8FF",
    opacity: "0.9",
    width: "800px",
    // marginLeft: "22%",
    marginLeft: "22vw",
    // padding: "5% 0"
    // height: ""
    borderRadius: "35px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "10px"
  },
  button: {
    // margin: theme.spacing(1),
    // background: 'blue',
    // padding: "5%",
    margin: "3%",
  boxShadow: "inset 0px 1px 0px 0px #85c1f5",
  background: "linear-gradient(to bottom, #61b0ff 5%, #80b5ea 100%)",
	backgroundColor: "#61b0ff",
	borderRadius: "6px",
	border: "1px solid #84bbf3",
	display: "inline-block",
	color: "#ffffff",
	fontSize: "20px",
	fontWeight: "bold",
	padding: "8px 30px",
	textDecoration: "none",
	textShadow: "0px 1px 0px #528ecc",
  },
  // inputText: {
  //   border: '1px solid rgba(252, 252, 252, 0.4)',
  //   background: 'rgba(252, 252, 252, 0.2)',
  //   width: "600px",
  //   // marginTop: "50%"
  // },
  // inner: {
  //   background: "linear-gradient(to right bottom, #a2d2ff, #b4ccff, #c9c5fc, #ddbdf3, #efb6e5, #f1b4df, #f2b2d9, #f3b0d3, #eab1d7, #e0b2d9, #d6b3db, #cdb4db)",
  //   height: "100vh"
  // }
  introText: {
    fontSize: "4rem",
    fontFamily:  "'Playfair Display', serif",
    verticalAlign: "middle"
  },
  mainText: {
    marginTop: "10%",
    textAlign: "center",
  
  },
  smallText: {
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: "20px"
  }
}));

const validationSchema = yup.object({
    name: yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters")
    .required("*Name is Required"),
    city: yup.string()
    .min(1, 'Enter valid city')
    .required('*Enter a valid city')
  });
  const state = {
    hidden: false
  }

  const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  return (
<>
<Particles 
// style={{position: "absolute"}} height="100vh" width="100vw" 
// style={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%"
//     }}
params={particlesConfig} />
<div  style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }} >
        {/* <motion.div
  // style={{
  //         width: "150px",
  //         height: "150px",
  //         background: "black"
  //       }}
  className={classes.mainText}
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.5
  }}
  > */}
  <div className={classes.mainText}>
   <Typewriter
      string='Hello There...'
      delay={120}
      className={classes.introText}
      id="introMainFont"
      stopBlinkinOnComplete
    />
  <br></br>
    <Typewriter
      string='Please complete the following form:'
      delay={70}
      stopBlinkinOnComplete
      className={classes.smallText}
    />
    </div>
    {/* <h1 className={classes.introText}>Hello there</h1> */}
  {/* </motion.div> */}
  <Fade bottom>
      <StylesProvider injectFirst>
      {/* <Header title='Enter User Details' /> */}
      <div className="forForm">
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
          
            <Field
              className="inputField"
              name='name'
              label='Enter Name'
              margin='normal'
              size="large"
              as={TextField}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
            className="inputField"
              name='city'
              label='Enter city'
              margin='normal'
              size="large"
              as={TextField}
              error={touched.city && errors.city}
              helperText={touched.city && errors.city}
            />
            {/* <motion.button
            whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} >
            <Button
            // id="button"
            // id="styledButton"
              type='submit'
              variant='contained'
              color='primary'
              // className={classes.button}
              size="large"
              
            >
              Submit
            </Button>
            </motion.button> */}
            <motion.button 
            whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} 
    type='submit'   variant='contained'
    className={classes.button}

    >Submit</motion.button>

            {/* <ParticleEffectButton
        
      >
        BUTTON CONTENT GOES HERE
      </ParticleEffectButton> */}

          </Form> 
        )}
      </Formik>
      </div>
      </StylesProvider>
      </Fade>
    </div>
    </>

  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default FormUserDetails;