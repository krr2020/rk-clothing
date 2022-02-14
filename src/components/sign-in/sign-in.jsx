import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/utils";

import "./styles.scss";

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
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
				email: "",
				password: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleInputChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
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
					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
