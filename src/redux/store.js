import { configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
	persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/slice';
import { AuthReducer } from './auth/slice';

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		auth: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});
export const persistor = persistStore(store);
