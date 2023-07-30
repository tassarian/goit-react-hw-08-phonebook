import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import { Button, Input, InputTitle, StyledForm } from './RegisterForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const userData = {
			email,
			name,
			password,
		};
		dispatch(registerThunk(userData));
		setEmail('');
		setName('');
		setPassword('');
	};

	return (
		<StyledForm onChange={handleSubmit}>
			<InputTitle htmlFor="email">email</InputTitle>
			<Input
				type="email"
				name="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>

			<InputTitle htmlFor="name">name</InputTitle>
			<Input
				type="text"
				name="name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>

			<InputTitle htmlFor="password">password</InputTitle>
			<Input
				type="password"
				name="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>

			<Button type="submit">Sign Up</Button>
		</StyledForm>
	);
};
