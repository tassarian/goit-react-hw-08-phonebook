import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import { Button, Input, InputTitle, StyledForm } from './LoginForm.styled';

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const userData = {
			email: form.elements.email.value,
			password: form.elements.password.value,
		};
		dispatch(loginThunk(userData));
		form.reset();
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<InputTitle htmlFor="email">email</InputTitle>
			<Input type="email" name="email" />

			<InputTitle htmlFor="password">password</InputTitle>
			<Input type="password" name="password" />

			<Button type="submit">Log In</Button>
		</StyledForm>
	);
};
