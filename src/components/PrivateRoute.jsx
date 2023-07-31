import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelector, tokenSelector } from 'redux/selectors';
import { Section } from './Section/Section';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const isLogin = useSelector(loginSelector);
	const Token = useSelector(tokenSelector);
	if (Token && !isLogin) {
		return (
			<Section>
				<b>Loading...</b>
			</Section>
		);
	}
	return isLogin && Token ? Component : <Navigate to={redirectTo} />;
};
