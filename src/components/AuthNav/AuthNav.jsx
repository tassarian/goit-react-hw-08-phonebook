import { AuthNavLink, StyledAuthNavList } from './AuthNav.styled';

export const AuthNav = () => {
	return (
		<StyledAuthNavList>
			<AuthNavLink to="/signup">Sign Up</AuthNavLink>
			<AuthNavLink to="/login">Log In</AuthNavLink>
		</StyledAuthNavList>
	);
};
