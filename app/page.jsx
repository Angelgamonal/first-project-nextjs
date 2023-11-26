'use client';

const PageHome = () => {
	return (
		<section>
			<h1 className="text-3xl font-bold underline text-cyan-500">PageHome</h1>
			<button
				onClick={() => {
					console.log('hola');
				}}
			>
				button
			</button>
		</section>
	);
};

export default PageHome;
