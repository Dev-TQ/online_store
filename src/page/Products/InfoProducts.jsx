import { Box, Paper, Typography, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const InfoProducts = () => {
  return (
    <Box sx={{my:2}}>
  <Paper sx={{position:"relative",mt:2,width:"250px",display:"flex",justifyContent:"space-between",px:"20px",py:"15px"}}>
    <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"100%"}}>

    <Typography variant="body1" color="initial">rice</Typography>
    <Typography variant="body1" color="initial">$100</Typography>
    </div>

<IconButton sx={{position:"absolute",top:"1px",right:0}}>
  <CloseIcon></CloseIcon>
</IconButton>
  </Paper>
  <Paper sx={{position:"relative",width:"250px",display:"flex",mt:2,justifyContent:"space-between",px:"20px",py:"15px"}}>
    <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"100%"}}>

    <Typography variant="body1" color="initial">drinks</Typography>
    <Typography variant="body1" color="initial">$200</Typography>
    </div>

<IconButton sx={{position:"absolute",top:"1px",right:0}}>
  <CloseIcon></CloseIcon>
</IconButton>
  </Paper>
    </Box>
  );
}
export default InfoProducts;
