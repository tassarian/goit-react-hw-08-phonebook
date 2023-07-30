import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelector } from 'redux/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
	const isLoggedIn = useSelector(loginSelector);

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
