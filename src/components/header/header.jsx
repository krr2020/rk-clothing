import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "../../firebase/utils";

import "./styles.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, cartHidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{!!currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/auth">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{cartHidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	cartHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
