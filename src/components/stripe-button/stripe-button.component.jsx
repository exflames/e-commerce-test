import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_zopBHurWacCnHonQ4eaQRogT00gwFEuFHK';

    const onToken = token => {
        console.log(token);
        alert ('Payment Successfull');
    }

    return(
        <StripeCheckout
            label = 'Pay now'
            name = 'ECOMMERCE TEST'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is £${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken} 
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;