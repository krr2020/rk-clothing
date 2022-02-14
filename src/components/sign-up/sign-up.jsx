import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/utils";

import { SignUpContainer, SignUpTitle } from "./styles";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleInputChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<SignUpContainer>
				<SignUpTitle>I don't have an account</SignUpTitle>
				<span>Sign up with your email</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="Display Name"
						name="displayName"
						value={displayName}
						onChange={this.handleInputChange}
						required
					/>
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
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						type="password"
						onChange={this.handleInputChange}
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
