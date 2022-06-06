// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import  {getProductDetails } from '../../redux/actions/productActions';
// import { Typography, Box } from "@mui/material";
// import ActionItem from './ActionItem';

// const DetailsView = () => {
//   const { id } = useParams();
//   const { loading, product } = useSelector((state) => state.getProductDetails);
//   const dispatch = useDispatch();

//   useEffect(() => {
//       if (product && id !== product.id){
//         dispatch(getProductDetails(id));
//       } 
//     },
//     [dispatch, id, product, loading]);

//     console.log(product);
//   return (
//     <box>
//       {product && Object.keys(product).length &&
//         <Box>
//           <Box>
//             <ActionItem product={product}/>
//           </Box>
//           <Box>
//             <Typography>{product.title.longTitle}</Typography>
//           </Box>
//         </Box>
//       }
//     </box>
//   );
// };

// export default DetailsView;


import { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import { styled, Box, Typography, Grid } from '@mui/material';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productActions';

const Component = styled(Box)`
    margin: 25px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0,
        justifyContent:"center",
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailsView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);

    return (
        <Component>
            {/* <Box>Sorry No Product available</Box> */}
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        {/* <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                            <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
                        </Typography> */}
                        <ProductDetails product={product} />
                    </RightContainer>
                </Container>
            }   
        </Component>
    )
}

export default DetailsView;