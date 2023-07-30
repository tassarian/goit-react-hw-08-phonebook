import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { nameSelector } from 'redux/selectors';
import { Button, StyledName, StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
	const userName = useSelector(nameSelector);
	const dispatch = useDispatch();
	return (
		<StyledUserMenu>
			<StyledName>{userName}</StyledName>
			<Button type="button" onClick={() => dispatch(logoutThunk())}>
				Logout
			</Button>
		</StyledUserMenu>
	);
};
