import "./Create.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import { Box, InputAdornment, TextField, IconButton, styled, Stack } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
const Create = () => {
  const Mybutton=styled(Button)({
    color:"white",
    backgroundColor:"teal"
    ,margin:"10px"
  })
  return (
    <Box sx={{my:5,background:"teal",p:5}} color={"red"} component={"form"}>

<Stack spacing={4}>


    <TextField fullWidth sx={{my:2}} placeholder="Enter your name" helperText="Please enter your name max 8 letters"  color="secondary" label="Name" variant="standard" />
  
<TextField  fullWidth sx={{my:2}} label="Email"  variant="standard"
inputProps={{
  type:`email`
}}
InputProps={{
  startAdornment:
  <InputAdornment position="start">
   <EmailIcon fontSize="inherit"/>
  </InputAdornment>
}}
placeholder="Enter your email"
/>

 <TextField fullWidth sx={{my:2}}
      label="password"
      variant="standard"
      helperText="this is email"
      inputProps={{
        type: `password`
        , maxLength: 9
      }}
      InputProps={{
        startAdornment:<InputAdornment position="start">
          <LockOpenIcon fontSize="inherit"/>
        </InputAdornment>
      }}
      placeholder="Enter your password"
      />



</Stack>







    <Stack direction={"row"} spacing={4} sx={{m:2}} >

        <Mybutton>
          send
          <IconButton  >
          <SendIcon fontSize="inherit" sx={{color:"white"}}/>  
          </IconButton>
        </Mybutton>
        <Mybutton>Delate
            <IconButton  >
          <DeleteIcon fontSize="inherit" sx={{color:"white"}}/>  
          </IconButton>
        </Mybutton>
        <Mybutton>
          <RefreshIcon sx={{color:"white"}}/>reste
        </Mybutton>
    </Stack>
    </Box>
      
  );
}

export default Create;
