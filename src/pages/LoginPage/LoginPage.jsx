const { LoginForm } = require('components/LoginForm/LoginForm');
const { Section } = require('components/Section/Section');

const LoginPage = () => {
	return (
		<Section>
			<h2>Login</h2>
			<LoginForm />
		</Section>
	);
};
export default LoginPage;
