import  React, { useState, useEffect } from "react";
//import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Card, CardMedia, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import clouds from "../images/Clouds.png";
import cloudMIni from "../images/Cloud-mini.png";
import cloudSunMini from "../images/cloudSun-mini.png";
import sunMini from "../images/Sun-mini.png";
import {getCurrentDate} from "./getCurrentDate"


export default function CardCloudy() {
  const [spacing, setSpacing] = React.useState(2);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  React.useEffect(() => {

    fetch("http://api.airvisual.com/v2/nearest_city?key=17285dc4-8d4e-48b1-9f26-faf1866cae0f")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data)
        alert(result.data.city);
        },
    
      )
  }, [])


  const jsx = `
  <Grid container spacing={${spacing}}>
  `;

  return (
    <Card
      sx={{ width: 360, height: 640,  borderRadius:15 }}
      style={{
        background:
          "linear-gradient(180deg, rgba(28, 153, 223, 0.57) 2.08%, rgba(50, 181, 255, 0.1482) 81.77%)",
      }}
    >
      <Grid container style={{ margin: 20 }}>
        <div style={{ marginRight: 15 }}>
          <a style={{ fontSize: 40 }}>{items.current.weather.tp}°C</a>
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ height: 75 }}
        />
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}
        >
        
          <a style={{ fontSize: 36 }}>Cloudy</a>
          <a style={{ fontSize: 20 }}>{items.city}</a>
        </div>
      </Grid>
      <CardMedia
        component="img"
        sx={{ width: 'auto', display: "unset" }}
        image={clouds}
        alt="clouds"
      />
      <div style={{ justifyContent: "space-around" }}>
        <a
          style={{
            fontSize: 36,
            margin: 50,
            display: "flex",
            color: "#7DA6BB",
          }}
        >
          {getCurrentDate()}
        </a>
      </div>
      <div style={{justifyContent:'space-around', display:'flex'}}>
        <div style={{flexDirection: 'column', display:'flex'}}>
          <a>Agora</a>
          <img  src={cloudMIni}/>
          <a>20°</a>
        </div>
        <div style={{flexDirection: 'column', display:'flex'}}>
          <a>07:00</a>
          <img  src={cloudMIni}/>
          <a>23°</a>
        </div>
        <div style={{flexDirection: 'column', display:'flex'}}>
          <a>09:00</a>
          <img  src={cloudSunMini}/>
          <a>25°</a>
        </div>
        <div style={{flexDirection: 'column', display:'flex'}}>
          <a>11:00</a>
          <img  src={sunMini}/>
          <a>26°</a>
        </div>
      </div>
    </Card>
  );
}
