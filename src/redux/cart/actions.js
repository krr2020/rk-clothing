import cartActionTypes from "./constants";

export const toggleCartHidden = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_HIDDEN,
	};
};
