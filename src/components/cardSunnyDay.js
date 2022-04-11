import * as React from "react";
//import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Card, CardMedia, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Sunny from "../images/sunny.png";
import cloudMIni from "../images/Cloud-mini.png";
import cloudSunMini from "../images/cloudSun-mini.png";
import sunMini from "../images/Sun-mini.png";
import {getCurrentDate} from "./getCurrentDate"

export default function CardSunny() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

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
          <a style={{ fontSize: 40 }}>23°</a>
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
          <a style={{ fontSize: 36 }}>Sunny</a>
          <a style={{ fontSize: 20 }}>West Jakarta</a>
        </div>
      </Grid>
      <CardMedia
        component="img"
        sx={{ width: 'auto', display: "unset", realizeMode:'contain' }}
        image={Sunny}
        alt="sunny"
      />
      <div style={{ justifyContent: "space-around" }}>
        <a
          style={{
            fontSize: 36,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 50,
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
