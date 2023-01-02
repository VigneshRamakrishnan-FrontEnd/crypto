import { Box, Button, Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";

export const Layout1 = (props) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "140px",
        }}
      >
        <Box sx={{ marginLeft: "55px", marginTop: "125px" }}>
          <Typography sx={{ fontSize: "52px" }}>
            <b>
              Make Better Life With
              <br />
              Trusted CryptoCoin
            </b>
          </Typography>

          <br />

          <Typography sx={{ color: "  #989898" }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam
            <br /> et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
            clita duo justo magna <br /> dolore erat amet
          </Typography>
          <Button
            sx={{
              marginTop: "20px",
              background: "#16D5FF",
              color: "white",
              width: "150px",
              height: "60px",
            }}
          >
            Explore More
          </Button>
        </Box>
        <Box>
          <img src={props.img2} width="650px" height="550px" />
        </Box>
      </Box>
    </div>
  );
};
