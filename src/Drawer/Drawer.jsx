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
import { useTheme } from "@emotion/react";
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
  const theme= useTheme();
  // @ts-ignore
  const coloricon=theme.palette.mode==="dark"?"light":"dark";
  // @ts-ignore
  const colortext=theme.palette.mode==="dark"?"#f1f1f1":"#222";
  return (
    <Box>
      <Drawer
        variant="persistent"
        hideBackdrop
        anchor="left"
        open={true}
        // @ts-ignore
        sx={{ "& .MuiDrawer-paper": { width: "25%",backgroundColor: theme.palette.mode === "dark" ? "#111" : "#fff" } }}
      >
      <Brightness4Icon sx={{my:"20px",mx:"auto",color:"yellow"}}  ></Brightness4Icon>
        
        <Divider />
        <List sx={{ color: "green", mt: 3}}>
          {/* Home */}
          <ListItem >
          <ListItemButton  component={RouterLink} to="/">
            <ListItemIcon sx={{ color: coloricon }}>
              <HomeIcon  />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }} primary="Home"  />
          </ListItemButton>
          </ListItem>
          {/* create */}
          <ListItem>
          <ListItemButton component={RouterLink} to="/create">
            <ListItemIcon>
              <CreateIcon sx={{ color: coloricon }} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }}  primary="Create"  />
          </ListItemButton>
          </ListItem>
            
          {/* call us*/}
          <ListItem>
          <ListItemButton component={RouterLink} to="/CallUs">
            <ListItemIcon>
              <CallIcon sx={{ color: coloricon }} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }} primary="Call us"  />
          </ListItemButton>
          </ListItem>
          {/* about*/}
          <ListItem>
          <ListItemButton component={RouterLink} to="/About">
            <ListItemIcon>
              <InfoIcon sx={{ color: coloricon }} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }} primary="About"  />
          </ListItemButton>
          </ListItem>
          {/* user */}
      <ListItem>
            <ListItemButton onClick={()=> navigate("/Home")}>
              <ListItemIcon>
                <IconButton>
                <AccountCircleIcon sx={{ color: coloricon }}/>
                </IconButton>
              </ListItemIcon>
                <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }} primary="User"/>
            </ListItemButton>
      </ListItem>
          {/* infoprodect */}
          <ListItem >
            <ListItemButton component={RouterLink} to="/InfoProducts">
              <ListItemIcon sx={{ color: coloricon }}>
                <DnsIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ sx: { color: colortext  } }} primary="Infoprodect"/>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MyDrawer;
