import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/selectors";

import "./App.scss";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/auth/auth";
import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header";

import { checkUserSession } from "./redux/user/actions";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;

		checkUserSession();
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />

					<Route
						exact
						path="/auth"
						render={() => {
							return currentUser ? <Redirect to="/" /> : <AuthPage />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
