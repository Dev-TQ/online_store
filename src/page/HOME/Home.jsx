
import "./Home.css"
import React from 'react';
import { Typography } from "@mui/material";
import theme from "Theme/Theme";
const Home = () => {
  
  return (

    <div>*--------------------------------
    <Typography noWrap  className="stayleHome" sx={{marginTop:"auto"}} color="primary" variant="h4" component="div">
  This is one way to use styles in MUI (external CSS + sx)

    </Typography>
    <Typography border="5px dotted yellow" p="20px" textAlign="center" color={"blue"} m={3} bgcolor={"red"} variant="body1" component={"div"}>
       this is tow way to use style in MUI ( bg----atribute)
    </Typography>
    <Typography variant="body1">this Theme</Typography>
    <Typography gutterBottom variant="body1" color="initial">ddddd</Typography>
    <Typography  variant="body1">ddddd</Typography>
    <Typography sx={{margin:"100px",color:theme.palette.secondary.main}}  variant="inherit" >this typographt</Typography>
    <p>welcom</p>
    </div>
  );
};
export default Home;
  