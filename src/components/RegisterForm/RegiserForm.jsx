import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import { Button, Input, InputTitle, StyledForm } from './RegisterForm.styled';

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		const userData = {
			email: form.elements.email.value,
			name: form.elements.name.value,
			password: form.elements.password.value,
		};
		dispatch(registerThunk(userData));
		form.reset();
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<InputTitle htmlFor="email">email</InputTitle>
			<Input type="email" name="email" />

			<InputTitle htmlFor="name">name</InputTitle>
			<Input type="text" name="name" />

			<InputTitle htmlFor="password">password</InputTitle>
			<Input type="password" name="password" />

			<Button type="submit">Sign Up</Button>
		</StyledForm>
	);
};
