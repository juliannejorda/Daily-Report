import { makeStyles } from '@material-ui/core/styles';
import Flip from "react-reveal/Flip";

const useStyles = makeStyles(theme => ({
    theCity: {
        color: "white",
        paddingTop: "10px",
        fontWeight: "510",
        textShadow: "2px 2px #696969",
        fontSize: "3.25rem"
    },
    main: {

        background: "rgba(201, 214, 255, 0.85)",
        // background: "#D6EAF8",
        marginTop: "3%",
        marginBottom: "2%",
        textAlign: "center",
        fontFamily: "'Lato', serif",
        width: "65%",
        margin: "auto",
        overflow: "auto",
        borderRadius: "20px",
        boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
        paddingBottom: "10px"
       },
    temp: {
        color: "white",
        float: "left",
        fontSize: "5rem",
        // verticalAlign: "center"
        lineHeight: "128px",
        textShadow: "2px 2px #696969",
    },
    icon: {
       float: "right",
       width: "150px",
       height: "auto",
       marginLeft: "22%"
    //    marginTop: "0",
    //    marginRight: "20%"
    //    width: "250px"
    // display: "block",
    // clear: "both"
    },
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)"
    },
    descrip: {
        color: "white",
        textAlign: "left",
        
    },
    descripTitle: {
        textShadow: "2px 2px #696969",
        fontSize: "3rem"
    },
    feels: {
        // whiteSpace: "nowrap",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    feelsHeading: {
        // textDecoration: "underline",
        textShadow: "2px 2px 5px #696969",
        fontSize: "1.7rem"

    },
    feelsP: {
        // textShadow: "2px 2px 5px #696969",
        fontSize: "1.7rem",
    }
    // feelsP: {
    //     fontSize: "1.3rem"
    // }

   //   mainReport: {
   //     height: "100vh"
   //   }
   }));


function ValidWeather(props) {
    const classes = useStyles();
    return <Flip bottom duration="2250" delay="2000"><div className={classes.main}>
        <h1 className={classes.theCity}>{props.city}</h1>
        <div className={classes.wrapper}>
        <h3 className={classes.temp}>{props.weather}°C</h3>
        <img className={classes.icon} src={props.img}></img>
        <div className={classes.descrip}><h3 className={classes.descripTitle}>{props.description}</h3>
        <div className={classes.feels}>
        <h5 className={classes.feelsHeading} >Feels like:</h5><h5 className={classes.feelsP}>{props.feelsLike}°C</h5>
        <h5 className={classes.feelsHeading}>Humidity:</h5><h5 className={classes.feelsP}>{props.humidity}%</h5>
        
        </div>

        </div>
        </div>
    </div>
    </Flip>
}

export default ValidWeather