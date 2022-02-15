import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/selectors";
import { selectCurrentUser } from "../../redux/user/selectors";
import { signOutStart } from "../../redux/user/actions";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./styles";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Header = ({ currentUser, cartHidden, signOut }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{!!currentUser ? (
					<OptionLink as="div" onClick={signOut}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/auth">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{cartHidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
