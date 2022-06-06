import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  width:'100%',
  justifyContent: 'center',
  textTransform:'capitalize',
  alignItems: 'center',
  margin: '0 3% 0 auto',
  '& > *': {
    marginRight: '40px !important',
    fontSize: '14px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]:{
   display:'block',
  }
}));

const Container = styled(Link)(({theme})=>({
  display:'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    // display:'block',
  }
}));
  

const LoginButton = styled(Button)`
  color: #2874f0;
  background: grey;
  text-transform: none;
  padding: 5px 15px;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 600;
  color:#fff;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
const {cartItems} =useSelector(state=>state.cart);
  const { account, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()} >
        <LoginIcon style={{paddingRight: '10px'}}/>
          Login
         
        </LoginButton>
      )}
  
      <Typography style={{cursor:'pointer'}}>
        Become a Seller
      </Typography>
      <Typography style={{cursor:'pointer'}}>More</Typography>
      <Container to='/Cart'>
      <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
        
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
