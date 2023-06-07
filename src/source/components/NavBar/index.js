import * as React from 'react';
import "./style.css"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import zIndex from '@mui/material/styles/zIndex';
const Logo = require("../../../assets/BrandLogo.png");




const drawerWidth = 240;
// const navItems = ['Services', 'Vendors', 'Why Us','About Us'];
const navItems = [
  {
  id: 1,
  name: "Home",
  link: "/"
},
{
  id: 2,
  name: "Services",
  link: "/services"
}, {
  id: 3,
  name: "Vendors",
  link: "/Vendors"
}, {
  id: 4,
  name: "Why Us",
  link: "/Whyus"
}, {
  id: 5,
  name: "About Us",
  link: "/AboutUs"
},
{
  id: 6,
  name: "Contact us",
  link: "/Contactus"
}
];
function NavBarComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className={"ylevel"}>

      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} className='logoNav' onClick={()=>navigate("/")}/>
      </Typography>
      <Divider />
      <List>
        {

          navItems.map((item, I) => (
            <ListItem key={item.id} disablePadding onClick={() => navigate(item.link)}>
              <ListItemButton className='font-gilroy' sx={{ textAlign: 'center' }} >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className={"ylevel"}> 


      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#00000032" }} className='NavBg'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' , md:"none" ,xl:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          {/* <img src={Logo} className='logoNav'/> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {xs:"flex",sm:"flex", md:"block" ,xl:"block" } ,alignItems:"center", justifyContent :"center", marginInline: "50px" }}
          >
            <img src={Logo} className='logoNav' onClick={()=>navigate("/")}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none',md:"block",xl:"block" }, marginInline:{md: "50px" , sm: "30px"}, zIndex : "9999 !important"}} className={"ylevel"}>
            {navItems.map((item) => (
              <Button key={item.id} className='font-gilroy navbtn' sx={{ color: '#fff' }} onClick={() => navigate(item.link)}>
                {item.name}
              </Button>
            ))}

          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}

          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className='font-gilroy'
          sx={{
            display: { xs: 'block', sm: 'block' , md:'block' , xl:'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.87)" },
          }}

        >

          {drawer}

        </Drawer>

      </Box>

    </Box>
  );
}

NavBarComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export { NavBarComponent };
