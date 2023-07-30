import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const registerThunk = createAsyncThunk(
	'auth/signup',
	async (userData, { rejectWithValue }) => {
		try {
			const res = await axios.post('users/signup', userData);
			token.set(res.data.token);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (userData, { rejectWithValue }) => {
		try {
			const res = await axios.post('users/login', userData);
			token.set(res.data.token);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const logoutThunk = createAsyncThunk(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			await axios.post('users/logout');
			token.unset();
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const savedToken = useState().auth.token;
		if (!savedToken) {
			thunkAPI.rejectWithValue('No Token!');
		}
		try {
			const res = axios.get('users/current');
			token.set(savedToken);
			return res.data;
		} catch (err) {
			thunkAPI.rejectWithValue(err.message);
		}
	}
);
