import { combineReducers, configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { usersApi } from './users/usersApi';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
	return configureStore({
		reducer: combineReducers({
			[usersApi.reducerPath]: usersApi.reducer,
		}),
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([usersApi.middleware]),
		devTools: true,
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useRequiredAppSelector = <TResult>(select: (state: RootState) => TResult | undefined | null): TResult => {
	const result = useAppSelector(select);
	if (!result) throw new Error('Required service is undefined');
	return result;
};

export const wrapper = createWrapper<AppStore>(makeStore);
