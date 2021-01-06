import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

const useStyles = makeStyles(theme => ({
    time: {
        fontWeight: "450",
        fontSize: "8rem",
        
        display: "inline",
        background: "white",
        borderRadius: "10px",
        padding: "3px 18px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    },
    // theTime: {
    //     justifyContent: "center",
    //     background: "white",
    //     display: "inline"
    // }
    theTime: {
        textAlign: "center",
        marginTop: "10vh"
    },
    theDate: {
        marginTop: "20px",
        fontSize: "2.4rem",
        fontFamily: "'Source Sans Pro', sans-serif",
        fontStyle: "italic",
        fontWeight: "500",
        marginBottom: "20px",
        textShadow: "2px 2px 5px white"
        
    },
    theGreeting: {
        fontSize: "4rem",
        fontFamily: "'PT Serif', serif",
        fontWeight: "540",
        background: "#ff9aa2",
        color: "white",
        borderRadius: "10px",
        padding: "8px",
        textShadow: "2px 2px #DC143C"
    }

  }));

function Time(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const classes = useStyles();
    let now = new Date().toLocaleTimeString("en-US");
    const [time, setTime] = useState(now);
    var today = new Date()
    var curHr = today.getHours();
    var greeting;
    // var theDate = today.slice(0, 14);
    var month = today.getUTCMonth() + 1;
    var day = today.getUTCDate();
var year = today.getUTCFullYear();
    const newDate = today.toLocaleDateString(undefined, options);


    // const theDate = today.toDateString.slice(0,14)
    

    if (curHr < 12) {
      greeting = "Good Morning"
    } else if (curHr < 18) {
      greeting = 'Good Afternoon'
    } else {
      greeting = 'Good Evening'
    }

    const fullGreeting = greeting + ", " + props.name + "!"
    function updateTime() {
        const newTime = new Date().toLocaleTimeString("en-US");
        setTime(newTime);
    }
    
    setInterval(updateTime, 1000);

    return (
        <div className={classes.theTime}>  <h1 className={classes.time}>{time}</h1>
         
        <h3 className={classes.theDate}>  {newDate}</h3>
        {/* <p>{greeting({hours})} {hours}</p> */}
        {/* <h1 >{greeting}, {props.name}</h1> */}
        <Typewriter className={classes.theGreeting} string={fullGreeting}  delay={60}  stopBlinkinOnComplete />
         {/* <button onClick={updateTime}>Get Time</button> */}
        </div>
      );
}

export default Time;