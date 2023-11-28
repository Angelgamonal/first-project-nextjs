'use client';

const PageHome = () => {
	return (
		<section>
			<h1 className='text-3xl font-bold text-cyan-500 underline'>PageHome</h1>
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
