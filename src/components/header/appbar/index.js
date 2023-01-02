import React from "react";
import AppBar from "@mui/material/AppBar";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ResponsiveAppBar = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        paddingTop: "10px",
        color: "black",
      }}
    >
      <Toolbar>
        <Typography sx={{ marginLeft: "10px" }}>
          <img width="45px" src={props.img1} />
        </Typography>

        <Typography
          sx={{
            color: "#16D5FF",
            fontSize: "33px",
            paddingLeft: "5px",
            paddingBottom: "10px",
          }}
        >
          <b>CryptoCoin</b>
        </Typography>
        <Tabs label="Home" sx={{ marginLeft: "auto" }}>
          <Tab sx={{ color: "black" }} label="Home" />
        </Tabs>
        <Tabs label="Home" sx={{ color: "black" }}>
          <Tab sx={{ color: "black" }} label="About" />
        </Tabs>
        <Tabs label="" sx={{ color: "black" }}>
          <Tab sx={{ color: "black" }} label="Service" />
        </Tabs>
        <Tabs label="" sx={{ color: "black" }}>
          <Tab sx={{ color: "black" }} label="RoadMap" />
        </Tabs>
        <Tabs>
          <Box sx={{ width: "100px" }}>
            <FormControl fullWidth>
              <InputLabel sx={{ border: "none", color: "black" }}>
                Pages
              </InputLabel>
              <Select
                sx={{ border: "0px" }}
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem sx={{ border: "none" }} value={10}>
                  Feature
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Tabs>
        <Tabs label="" sx={{ color: "black" }}>
          <Tab sx={{ color: "black" }} label="Contact" />
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <TwitterIcon />
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <FacebookSharpIcon />
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <LinkedInIcon />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
