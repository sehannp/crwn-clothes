import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_J9cwMwWr5aQ3EvhSRADm5w8j002jsB6nuG';

    const onToken = token => {
        ///backend calls for processing payment
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your togal is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
};

export default StripeCheckoutButton;