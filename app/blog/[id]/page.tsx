'use client';
import { decrement, increment, reset } from "../../../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {useGetUsersQuery} from "../../../redux/services/userApi";

type pageProps = {
	params: {
		id: string;
	};
};

export default function Post(props: pageProps) {

	const count = useAppSelector((state) => state.counterReducer.value );
	const dispatch = useAppDispatch();
	const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

	const onIncrement = () => {
		dispatch(increment());
	};
	const onDecrement = () => {
		dispatch(decrement());
	};

	const onReset = () => {
		dispatch(reset());
	};


	return (
		<div>
			<h1>Post page {props.params.id}</h1>
			<h2>Counter: { count }</h2>
			<button onClick={onIncrement}>Увеличить счетчик </button>
			<button onClick={onDecrement}>Уменьшить счетчик </button>
			<button onClick={onReset}>Обнулить</button>
			{
				isLoading && <div>Loading data...</div>
			}
			{
				data ? data.map((user: any) => (
					<div key={user.id}>{user.name}</div>
				)) : <div>Ooops. Is not data</div>
			}

		</div>
	);
}
