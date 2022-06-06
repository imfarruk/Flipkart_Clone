import { Card, Box, Typography, Button, styled } from '@mui/material';
import {removeFromCart} from '../../redux/actions/cartActions';
import {useDispatch} from 'react-redux';
import { addEllipsis } from '../../utils/common-utils';
import GroupButton from './GroupButton';

const Component = styled(Card)`
    border-top: 2px solid #E5DCDA;
    border-radius: 0px;
    display: flex;
    background:#F4F1F0;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color:#000;
    font-weight:600;
`;

const CartItem = ({ item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
 const dispatch=useDispatch();
    const removeItemFromCart=(id)=>{
            dispatch(removeFromCart(id))
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 110 }} alt="cartImg"/>
                <GroupButton />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="cart-View"/></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)} >Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;