import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";
import { googleSignInStart, emailSignInStart } from "../../redux/user/actions";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { signInWithEmail } = this.props;
		const { email, password } = this.state;

		signInWithEmail(email, password);
	};

	handleInputChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { email, password } = this.state;
		const { signInWithGoogle } = this.props;

		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={email}
						onChange={this.handleInputChange}
						required
					/>
					<FormInput
						label="Password"
						name="password"
						value={password}
						type="password"
						onChange={this.handleInputChange}
						required
					/>
					<ButtonsBarContainer>
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signInWithGoogle: () => dispatch(googleSignInStart()),
	signInWithEmail: (email, password) =>
		dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
