import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { tokenSelector } from 'redux/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
	import('../pages/RegistrationPage/RegistrationPage')
);

const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(tokenSelector);

	useEffect(() => {
		if (token) {
			dispatch(refreshThunk());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route
					path="/signup"
					element={
						<PublicRoute
							redirectTo="/contacts"
							component={<RegistrationPage />}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<PublicRoute
							redirectTo="/contacts"
							component={<LoginPage />}
						/>
					}
				/>
				<Route
					path="/contacts"
					element={
						<PrivateRoute
							redirectTo="/login"
							component={<ContactsPage />}
						/>
					}
				/>
				<Route path="*" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

// 21312412

export default App;
