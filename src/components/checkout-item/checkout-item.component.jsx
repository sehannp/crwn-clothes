import React from 'react';
import  { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer , RemoveButtonContainer } from './checkout-item.styles';


const CheckoutItem = ({cartItem, dispatch}) => {
    const {name,imageUrl, price, quantity} = cartItem;
    return(
        <CheckoutItemContainer>
            
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>

            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>    
                <span>{quantity}</span>
                <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>  
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>

            <RemoveButtonContainer 
                 onClick={() => dispatch(clearItemFromCart(cartItem))}>
                &#10005;
            </RemoveButtonContainer>

        </CheckoutItemContainer>
    )};

export default connect(null)(CheckoutItem);