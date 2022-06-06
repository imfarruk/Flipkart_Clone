import React ,{useState} from "react";
import { AppBar,List,ListItem,ListItemIcon,ListItemButton, Toolbar,Drawer, Box,Typography, styled,IconButton } from "@mui/material";
import Search from "./Search";
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const StyledHeader = styled(AppBar)`
  background: #874fff0;
  height: 56px;
  display:flex;
  justify-content: center;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin: '0 2% 0 2%',
 
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}));

const MenuButton=styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block',
    
  }
}))

const DrawerDesign=styled(Drawer)`
  height:'300px';
  background-color:'red';
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open,setOpen] =useState(false);

const handleOpen=()=>{
 setOpen(true);
}
const handleClose=()=>{
  setOpen(false);
}

const list=()=>(
  <Box  style={{ width: 200 }}>
    <List onClick={handleOpen}>
    <ListItem>
      
          <CustomButton/>
      
      </ListItem>
    </List>
 
  </Box>
);

  return (
    <StyledHeader>
      <Toolbar>
      <MenuButton style={{color:'inherit'}} onClick={handleOpen}>
        <MenuIcon/>
      </MenuButton>
      <DrawerDesign open={open} onClose={handleClose}>
      <Toolbar style={{fontSize:'18px',fontWeight:'600'}}>Welcome to Login</Toolbar>
      <Divider />
      {list()}
      </DrawerDesign>


      <Component to="/">
          <img src={logoURL} alt="flipkart_logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ff4" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>

        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
