import React from 'react';
import { connect } from 'react-redux'; 
import { toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { CartContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)}
);

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
