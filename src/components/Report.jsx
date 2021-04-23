import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Weather from "./weather";
// import { Header } from './Header';
import Quote from "./quote";
import Time from "./timer";
import particlesConfig from "./particlesConfig";
import Particles from "react-particles-js";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import "./Report.css";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
  //   main: {
  //       width: "100vw"
  //   },
  button: {
    // margin: theme.spacing(1),
    // background: 'blue',
    // padding: "5%",
    marginBottom: "2%",
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
  //   mainReport: {
  //     height: "100vh"
  //   }
}));

const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const { name, city } = formData;
  // className={classes.main}
  return (
    <div className="reportPage">
      <Particles
        // style={{position: "absolute"}} height="100vh" width="100vw"
        // style={{
        //       position: "absolute",
        //       top: 0,
        //       left: 0,
        //       width: "100%",
        //       height: "100%"
        //     }}
        params={particlesConfig}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Time name={name} />
        <Quote />

        {/* <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={name}
              className={classes.textCenter}
            />
          </ListItem>


          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
        </List> */}

        <Weather city={city} />
        {/* className={classes.textCenter} */}
        <div className={classes.textCenter}>
          {/* <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button> */}
          <Fade bottom delay="3000">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={() => prevStep()}
            >
              Back
            </motion.button>
          </Fade>

          {/* <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button> */}
        </div>
      </div>
    </div>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Confirm;
