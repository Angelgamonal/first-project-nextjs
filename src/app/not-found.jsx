import Link from 'next/link';

export default function NotFount() {
	return (
		<section className='m-5 flex flex-col items-center gap-2'>
			<h1 className='text-center text-3xl font-bold'>404</h1>
			<p className='text-center text-lg'>Page not found</p>

			<Link
				href='/'
				className='w-32 rounded bg-red-600 p-1 text-center text-white '
			>
				Volver
			</Link>
		</section>
	);
}
