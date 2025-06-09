import { Opacity } from "@mui/icons-material";
import { colors } from "@mui/material";
import { useContext } from "react";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette :{
    mode:"light",
    primary:{
      main:"#2196f3"
    },
    secondary :{
      main:"##f50057"
    }
  },

components:{
  MuiButton:{
    styleOverrides:{
      root:{
        borderRadius:"2px",
      
        // fontWeight:"bold",
    textTransform:"lowercase",
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
    
      // backgroundColor:"black",
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
