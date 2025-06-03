import { Opacity } from "@mui/icons-material";
import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({

  palette :{
    primary:{
      main:"#7fffd4"
    },
    secondary :{
      main:"#800000"
    }
  },

components:{
  MuiButton:{
    styleOverrides:{
      root:{
        borderRadius:"2px",
        backgroundColor:"#800000" ,
        fontWeight:"bold",
        color:"white",

        "&:hover":{
          color:"red",
            backgroundColor:"white"
        },
      }
    },
    defaultProps:{
      variant:"contained",
      color:"primary"
    }
  },
  MuiTypography:{
  styleOverrides:{
    root:{
      fontSize:"15px",
    
      backgroundColor:"black",
      color:"white",
    padding:"10px",
    textAlign:"center",
    "&:hover":{
      color:"red"
    }
    }
  }
  }
  
}
})
  
export default theme;
