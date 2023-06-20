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
	const { isLoading, data } = useGetUsersQuery(null);

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
		<div className='container'>
			<h1>Post page {props.params.id}</h1>
			<h2>Counter: { count }</h2>
			<div className='btn-container'>
				<button onClick={onIncrement}>Увеличить счетчик </button>
				<button onClick={onDecrement}>Уменьшить счетчик </button>
				<button onClick={onReset}>Обнулить</button>
			</div>
			{
				isLoading && <div>Loading data...</div>
			}
			{
				data ? (
					<div className='name-list'>
						{data.map((user: any) => (
						<div key={user.id}>{user.name}</div>
						))}
					</div>
				) :
					<div>Ooops. Is not data</div>
			}

		</div>
	);
}

