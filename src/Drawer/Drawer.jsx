import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,Toolbar,
  ListItemButton,
  ListItemIcon,
  Divider, Typography,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from "@mui/icons-material/Info";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link as RouterLink } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import { Home as HomeIcon, Create as CreateIcon, Margin } from "@mui/icons-material";
import { useNavigate } from "react-router";
import DnsIcon from '@mui/icons-material/Dns';
const MyDrawer = () => {
  let navigate = useNavigate();
  return (
    <Box>
      <Drawer
        variant="persistent"
        hideBackdrop
        anchor="left"
        open={true}
        sx={{ "& .MuiDrawer-paper": { width: "25%", background: "teal  " } }}
      >
      <Brightness4Icon sx={{my:"20px",mx:"auto",color:"yellow"}} ></Brightness4Icon>
        
        <Divider />
        <List sx={{ color: "green", mt: 3}}>
          {/* Home */}
          <ListItem>
          <ListItemButton component={RouterLink} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "white" }} />
          </ListItemButton>
          </ListItem>
          {/* create */}
          <ListItem>
          <ListItemButton component={RouterLink} to="/create">
            <ListItemIcon>
              <CreateIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Create" sx={{ color: "white" }} />
          </ListItemButton>
          </ListItem>
            
          {/* call us*/}
          <ListItem>
          <ListItemButton component={RouterLink} to="/CallUs">
            <ListItemIcon>
              <CallIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Call us" sx={{ color: "white" }} />
          </ListItemButton>
          </ListItem>
          {/* about*/}
          <ListItem>
          <ListItemButton component={RouterLink} to="/About">
            <ListItemIcon>
              <InfoIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="About" sx={{ color: "white" }} />
          </ListItemButton>
          </ListItem>
          {/* user */}
      <ListItem>
            <ListItemButton onClick={()=> navigate("/Home")}>
              <ListItemIcon>
                <IconButton>
                <AccountCircleIcon sx={{color:"white"}}/>
                </IconButton>
              </ListItemIcon>
                <ListItemText primary="User"/>
            </ListItemButton>
      </ListItem>
          {/* infoprodect */}
          <ListItem >
            <ListItemButton component={RouterLink} to="/InfoProducts">
              <ListItemIcon sx={{color:"white"}}>
                <DnsIcon />
              </ListItemIcon>
              <ListItemText primary="Infoprodect"/>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MyDrawer;
