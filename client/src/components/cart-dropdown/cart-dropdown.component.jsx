import React from "react";

import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? 
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
                : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => 
            { history.push('./checkout');
              dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
