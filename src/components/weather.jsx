import {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import ValidWeather from "./validWeather";


// function Weather(props) {
//     const [query, setQuery] = useState('');
//     const [weather, setWeather] = useState({});


//     const search = evt => {
//         if (evt.key === "Enter") {
//           fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//             .then(res => res.json())
//             .then(result => {
//               setWeather(result);
//               setQuery('');
//               console.log(result);
//             });
//         }
//       }

   
    

//     let today = new Date().toLocaleDateString() 

//     return (
//         <div>
//             {/* <h3>{setQuery(props.city)}</h3> */}
//             <main>
//             <h2>{props.city}</h2>
       
//     <p> {weather.name}</p>
    

        
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{today}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//         </div>
//     )
// }

const useStyles = makeStyles(theme => ({
    incorrect: {
        textAlign: "center",
        marginTop: "20px",
        background: "#C9D6FF",
        color: "white",
        textShadow: "2px 2px black",
        padding: "2%"
    }
  //   mainReport: {
  //     height: "100vh"
  //   }
  }));

function Weather(props){
    const classes = useStyles();
    const [weather, setWeather] = useState("");
    const [validCity, setValidCity] = useState(true);
    const [icon, setIcon] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [humidity, setHumidity] = useState("")
    
    const api = {
        key: "205f180b761c4200a0855b16bc61d9f8",
        base: "https://api.openweathermap.org/data/2.5/weather?q=",
        iconImg: "https://openweathermap.org/img/wn/"
    }

    const url = `${api.base}${props.city}&appid=${api.key}&units=metric`

    const imgURL = `${api.iconImg}${icon}@2x.png`

    // const weatherIcon = {
    //     if ({icon} === "undefined") {
    //         return null
    //     } else {
    //         return 
    //     }
    // }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const info = response.data
                setWeather(info.main.temp)
                
                setIcon(info.weather[0].icon)
                setCity(info.name + ", " + info.sys.country)
                setDescription(info.weather[0].description)
                setFeelsLike(info.main.feels_like)
                setHumidity(info.main.humidity)
                console.log(info)
                // setIcon(response.data.weather.[0].icon)
            }).catch((error) => {
                setWeather("Enter a valid city")
                // validCity = false
                setValidCity(false)
            })
        
    }, [url])



//    const getWeather = async (e) => {
//         const api_call = await fetch(`{http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api.key}&units=metric`);
//         const data = await api_call.json();
//         console.log(data)
//     }
useEffect( () => {
    console.log(validCity);
}, [validCity]);

    return (<div>
    {/* {validCity ?  (<validWeather weather={weather} img={imgURL}/>) : (<h1>Enter a valid city pls</h1> )} */}
        {validCity ? (<ValidWeather humidity={humidity} feelsLike={feelsLike} description={description} city={city} weather={weather} img={imgURL}/>) : <h1 className={classes.incorrect}>Please enter a valid city.</h1>}
        {/* <ValidWeather validCity={validCity} humidity={humidity} feelsLike={feelsLike} description={description} city={city} weather={weather} img={imgURL}/> */}
    {/* {validCity ? <h1>Hello</h1> : <p>Bye</p>} */}
    {/* <img src={`${api.iconImg}${icon}@2x.png"`} ></img> */}

    {/* <p>{imgURL}</p> */}

    {/* (<p>{weather}°C</p>) */}
  

    {/* { ({icon} === "") ? null : <img src={imgURL}></img>} */}
    
    </div>)
}

export default Weather;