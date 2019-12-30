import React from 'react';
import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-styles.styles';
import { connect } from 'react-redux';
import {  addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const {name,price,imageUrl} = item;
    return(
    <CollectionItemContainer>
        <BackgroundImage  className='image'
             imageUrl={imageUrl}>
        </BackgroundImage>
        <CollectionFooterContainer>
            <NameContainer className='name'>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted >ADD TO CART</AddButton>
    </CollectionItemContainer>
);
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);