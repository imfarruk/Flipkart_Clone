import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../Constant/data";

const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "50px 130px 0 130px",
  justifyContent: "space-around",
  alignItems: "center",
  overflow: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
  line-height: 0;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="navdata" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;
