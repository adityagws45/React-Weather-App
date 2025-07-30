// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./SearchBox.css";

// export default function SearchBox() {
//   let [city, setCity] = useState("");

//   let handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   let handleSubmit = (evt)=>{
//     evt.preventDefault();
//     console.log(city);
//     setCity("");
//   };


//   return (
//     <div className="SearchBox">
//       <h3>Search for the weather</h3>
//       <form  onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="city Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br></br>
//         <br></br>
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }




// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./SearchBox.css";

// export default function SearchBox() {
//   const [city, setCity] = useState("");
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "bfa5918adea7e8435a0a25c2aab4117d"; // ✅ Typo: 'API_kEY' → 'API_KEY'

//   const getWeatherInfo = async () => {
//     try {
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );

//       if (!response.ok) {
//         throw new Error("City not found or API error");
//       }

//       let jsonResponse = await response.json();
//       let result = {
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };

//       console.log(result); // ✅ You can later set this to state and display on UI
//     } catch (error) {
//       console.error("Error fetching weather data:", error.message);
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     if (city.trim() === "") return; // Avoid empty input
//     getWeatherInfo();
//     setCity(""); // Clear input after fetching
//   };

//   return (
//     <div className="SearchBox">
//       <h3>Search for the weather</h3>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }





// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./SearchBox.css";

// export default function SearchBox() {
//   const [city, setCity] = useState("");
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "bfa5918adea7e8435a0a25c2aab4117d"; // ✅ Typo: 'API_kEY' → 'API_KEY'

//   const getWeatherInfo = async ({updateInfo}) => {
//     try {
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );

//       if (!response.ok) {
//         throw new Error("City not found or API error");
//       }

//       let jsonResponse = await response.json();
//       let result = {
//         city:city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };

//       console.log(result); // ✅ You can later set this to state and display on UI
//     } catch (error) {
//       console.error("Error fetching weather data:", error.message);
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     if (city.trim() === "") return; // Avoid empty input
//     getWeatherInfo();
//     setCity(""); // Clear input after fetching
//   };

//   return (
//     <div className="SearchBox">
//       <h3>Search for the weather</h3>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }









// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./SearchBox.css";

// export default function SearchBox({updateInfo}) {
//   const [city, setCity] = useState("");
//   let [error,setError] = useState("false");
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "bfa5918adea7e8435a0a25c2aab4117d"; // ✅ Typo: 'API_kEY' → 'API_KEY'

//   const getWeatherInfo = async () => {
//     try {
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );

//       if (!response.ok) {
//         throw new Error("City not found or API error");
//       }

//       let jsonResponse = await response.json();
//       let result = {
//         city:city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };

//       console.log(result);
//       return  result; // ✅ You can later set this to state and display on UI
//     } catch (error) {
//      throw err;
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   const handleSubmit = async (evt) => {

//     try{

      
//     evt.preventDefault();
//     if (city.trim() === "") return; // Avoid empty input
//     getWeatherInfo();
//     setCity(""); // Clear input after fetching
//     let newInfo = await getWeatherInfo();
//     updateInfo(newInfo);
//     } catch(err){
//         setError("true");
//     }



//   };

//   return (
//     <div className="SearchBox">
//       <h3>Search for the weather</h3>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && <p style={{color:"red"}}>No such place exists</p>}
//       </form>
//     </div>
//   );
// }




import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false); // use Boolean not string
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bfa5918adea7e8435a0a25c2aab4117d";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const jsonResponse = await response.json();

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (city.trim() === "") return;

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
