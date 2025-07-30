// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import "./Infobox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';




// export default function InfoBox({info}){

// const INIT_URL="https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

 
// let COLD_URL="https://plus.unsplash.com/premium_photo-1674250732050-2e35973882e2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ";

// let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


// let RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


// let info = {
//   city:"Wonderland",
//   feekslike: 24.84,
//   temp:25.05,
//   tempMin:25.05,
//   tempMax:25.05,
//   humidity:47,
//   weather:"haze",
//     };





    


//  return (
//  <div className="InfoBox">
//     <h1>WeatherInfo-{info.weather}</h1>
//     <div className="cardContainer">
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={

//      info.humidity>80
//      ? RAIN_URL
//      : info.temp>15
//      ? HOT_URL
//      :COLD_URL





//         }
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//          {info.city}{
//           info.humidity>80
//      ?<ThunderstormIcon/>
//      :info.temp>15
//      ? <SunnyIcon/>
//      :<AcUnitIcon/>
// }



//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' component={"span"} }}>
//           <p>Temperature={info.temp}&deg;C</p>
//           <p>Humidity={info.humidity}</p>
//           <p>Min Temp={info.tempMin}</p>
//           <p>Max Temp={info.tempMax}</p>
//           <p>The weather can be described as  <i>{info.weather} </i>  and  feels like {info.feelslike}&deg;C</p>
//         </Typography>
//       </CardContent>
//     </Card>
//  </div>
//  </div>

//  )




//     }




import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/WbSunny"; // ✅ Corrected icon name
import "./Infobox.css";

export default function InfoBox({ info }) {
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1674250732050-2e35973882e2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const imageUrl =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={imageUrl} title="weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
