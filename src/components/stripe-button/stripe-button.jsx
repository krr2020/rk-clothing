import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51KT2GXSDfiSCuHCdx7R4d1wRi1vz1ZmK8wh8dUuXyxpT98lnJAGTC6zsPL9sY2mZwOjJvGwtTAXFaO8APnQmFmN300Ax5Nq6Rs";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Succesful!");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="RK Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
