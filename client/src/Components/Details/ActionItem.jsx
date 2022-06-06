import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import BuyNow from "./BuyNow";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  display: "flex",
  flexDirection: "column",
  marginRight: "15px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 20px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  padding: "15px",
  width: "95%",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
    width: "75%",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  border: "2px solid black",
  color: "black",
  fontWeight: 600,
  lineHeight: 1,
  display: "flex",
  justifyContent: "center",
  // alignItems:'center',

  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const addItemToBuy = () => {
    //  navigate('/purchase');
  };

  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <Image src={product.detailUrl} alt="detailPageImg" />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <StyledButton
          variant="contained"
          style={{ background: "#ff9f00" }}
          onClick={() => addItemToCart()}
        >
          {" "}
          <ShoppingCartIcon />
          Add to Cart
        </StyledButton>

        <StyledButton
          variant="contained"
          style={{ background: "#fb541b" }}
          onClick={() => addItemToBuy()}
        >
          <FlashOnIcon />
          Buy Now
        </StyledButton>
      </Box>
    </LeftContainer>
  );
};

export default ActionItem;
