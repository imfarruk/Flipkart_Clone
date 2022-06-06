import { useEffect } from 'react';

import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

// import { post } from '../../utils/paytm';
// import { payUsingPaytm } from '../../service/api';

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '25px 15px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '15px 5px'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #E5DCDA;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    ${'' /* background: #F4F1F0;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%); */}
    border-top: 1px solid  #E5DCDA;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    
    const { id } = useParams();

    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     if(cartItems && id !== cartItems.id)   
    //         dispatch(addToCart(id));
    //     console.log(cartItems);
    // }, [dispatch, id]);

    // const removeItemFromCart = (id) => {
    //     dispatch(removeFromCart(id));
    // }

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return (
        <>
        { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={8} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item} />
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton  variant="contained">Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Component> : 
            <EmptyCart />
        }
        </>

    )
}

export default Cart;