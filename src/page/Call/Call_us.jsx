import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import "./Call.css";
import CallIcon from "@mui/icons-material/Call";
const CallUs = () => {
  return (
    <Box sx={{ width: "75%", ml: "25%", mt: 15, bgcolor: "info.main" }}>
      <Typography variant="h5" color="white" component={"h1"}>
        <IconButton >
          <CallIcon sx={{color:"white"}}/>
        </IconButton>
      </Typography>
    </Box>
  );
};

export default CallUs;
