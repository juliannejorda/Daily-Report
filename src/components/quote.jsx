import {useEffect, useState} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Flip from "react-reveal/Flip";

const useStyles = makeStyles(theme => ({
    context: {
        // textAlign: "center",
        // width: "60%"
        fontStyle: "italic",
        fontWeight: "500",
        fontSize: "2rem",
        textShadow: "2px 2px white",
        marginTop: "2px"
    },
    quoteBody: {
        background: "#e6e6fa",
        textAlign: "center",
        // justifyContent: "center",
        // alignContent: "center"
        marginTop: "3%",
        width: "60%",
        margin: "auto",
        padding: "15px",
        borderRadius: "25px",
        fontFamily: "'Lato', serif",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        // opacity: "0.95",
    },
    author: {
        fontSize: "1.4rem",
        fontWeight: "580",
        marginTop: "2px",
        marginBottom: "0"
    }
  //   mainReport: {
  //     height: "100vh"
  //   }
  }));
  

function Quote() {
    const classes = useStyles();
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
  //  const [doneLoad, setDoneLoad] = useState(false);

    const url = "https://api.quotable.io/random";

    // const getQuote = () => {
    //     axios.get("https://api.quotable.io/random").then(
    //         (response) => {
    //             setQuote(response.data.content);
    //             setAuthor(response.data.author);
    //             setDoneLoad(true);
    //     })
    // }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setQuote(response.data.content);
                setAuthor(response.data.author);
            })
    }, [url])

    // const getNewQuote = async () => {
    //     try {
    //       const response = await fetch("https://api.quotable.io/random");
    //       const data = await response.json();
    //       if (!response.ok) throw new Error(data);
    //       this.setState({ data });
    //     } catch (error) {
    //       // If the API request failed, log the error to console and update state
    //       // so that the error will be reflected in the UI.
    //       console.error(error);
    //       this.setState({ data: { content: "Opps... Something went wrong" } });
    //     }
    //   };
    

    return  <Flip bottom duration="2250" delay="1250"><div className={classes.quoteBody}><h3 className={classes.context}>"{quote}"</h3>
    <p className={classes.author}>{author}</p></div></Flip>
    //<div><button onClick={getQuote}>Get a quote!</button>
   
}

export default Quote