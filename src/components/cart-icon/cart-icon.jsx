import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./styles.scss";

const CartIcon = ({ toggleCartHidden, count }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{count}</span>
	</div>
);

const mapstateToProps = createStructuredSelector({
	count: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapstateToProps, mapDispatchToProps)(CartIcon);
