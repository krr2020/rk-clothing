import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/selectors";

import "./styles.scss";

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton inverted>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapstateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapstateToProps, null)(CartDropdown);
