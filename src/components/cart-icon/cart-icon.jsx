import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";

import { CartContainer, ShoppingIcon, ItemCountContainer } from "./styles";

const CartIcon = ({ toggleCartHidden, count }) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<ItemCountContainer>{count}</ItemCountContainer>
	</CartContainer>
);

const mapstateToProps = createStructuredSelector({
	count: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapstateToProps, mapDispatchToProps)(CartIcon);
