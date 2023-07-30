import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import { Button, Input, InputTitle, StyledForm } from './LoginForm.styled';
import { useState } from 'react';

export const LoginForm = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const userData = {
			email,
			password,
		};
		dispatch(loginThunk(userData));
		setEmail('');
		setPassword('');
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<InputTitle htmlFor="email">email</InputTitle>
			<Input
				type="email"
				name="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>

			<InputTitle htmlFor="password">password</InputTitle>
			<Input
				type="password"
				name="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>

			<Button type="submit">Log In</Button>
		</StyledForm>
	);
};
