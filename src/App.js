import React, { useState, useEffect } from "react";
import "./App.css";
import CardCloudy from "./components/cardCloudyDay";
import CardRanning from "./components/cardRainningDay";
import CardSunny from "./components/cardSunnyDay";
import CardThunderstorm from "./components/cardThunderstormDay";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import NavBarComponent from "./components/NavBar";

function App() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;


  return (
    <div className="App">
      <NavBarComponent />
      <Grid sx={{ flexGrow: 1, marginTop: 10, paddingLeft:5, paddingRight:5 }} container spacing={8}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <CardCloudy />
            </Grid>
            <Grid item>
              <CardRanning />
            </Grid>
            <Grid item>
              <CardSunny />
            </Grid>
            <Grid item>
              <CardThunderstorm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* {data.map((item)=><p>{item.city}</p>)} */}
    </div>
  );
}

export default App;
