import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link }from 'react-router-dom';
const Component = styled(Menu)`
  margin-top: 20px;
`;
const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClick={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
        <Link to={'/user-profile'} style={{textDecoration:'none',color:'inherit'}} onClick={()=>handleClose()}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Component>
    </>
  );
};

export default Profile;
