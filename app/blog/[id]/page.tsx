'use client';

type pageProps = {
	params: {
		id: string;
	};
};

export default function Post(props: pageProps) {
	const onClickHandler = () => {
		alert(props.params.id);
	};

	return (
		<div>
			<h1>Post page {props.params.id}</h1>
			<button onClick={onClickHandler}>Click</button>
		</div>
	);
}
