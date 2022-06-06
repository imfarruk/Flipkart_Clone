import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { styled, Box, Typography, Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
import { getProductById } from "../../service/api";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";

const Component = styled(Box)`
  margin: 25px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    justifyContent: "center",
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

const DetailsView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailsView;
