import { useSelector } from 'react-redux';
import { loginSelector } from 'redux/selectors';
import {
	StyledHeader,
	StyledNavItem,
	StyledNavList,
} from './Header.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
	const isLoggedIn = useSelector(loginSelector);
	return (
		<StyledHeader>
			<b>YouContacts</b>
			<StyledNavList>
				<StyledNavItem to="/">Home</StyledNavItem>
				{isLoggedIn && (
					<StyledNavItem to="/contacts">Contacts</StyledNavItem>
				)}
			</StyledNavList>
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</StyledHeader>
	);
};
