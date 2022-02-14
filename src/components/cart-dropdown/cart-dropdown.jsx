import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/selectors";

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer,
} from "./styles";

const CartDropdown = ({ cartItems, history }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton inverted onClick={() => history.push("/checkout")}>
			GO TO CHECKOUT
		</CartDropdownButton>
	</CartDropdownContainer>
);

const mapstateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapstateToProps, null)(CartDropdown));
