import { createSlice } from '@reduxjs/toolkit';
import {
	loginThunk,
	logoutThunk,
	refreshThunk,
	registerThunk,
} from './operations';

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: null,
	isLoading: false,
	isLogin: false,
	error: null,
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};
const handlePending = state => {
	state.isLoading = true;
	state.error = null;
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLogin = true;
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLogin = true;
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.user = {
					name: '',
					email: '',
				};
				state.token = null;
				state.isLogin = false;
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isLogin = true;
				console.log(payload);
			})
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				handleRejected
			)
			.addMatcher(
				action => action.type.endsWith('/pending'),
				handlePending
			)
			.addMatcher(
				action => action.type.endsWith('/fulfilled'),
				state => {
					state.isLoading = false;
					state.error = null;
				}
			);
	},
});

export const AuthReducer = authSlice.reducer;
