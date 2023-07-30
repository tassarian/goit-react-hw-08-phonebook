import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelector, tokenSelector } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const isLogin = useSelector(loginSelector);
	const Token = useSelector(tokenSelector);
	if (Token && !isLogin) {
		return <b>Loading...</b>;
	}
	return isLogin && Token ? Component : <Navigate to={redirectTo} />;
};
