import Link from 'next/link';

export default function NotFount() {
	return (
		<section className="flex flex-col gap-2 items-center m-5">
			<h1 className="text-center text-3xl font-bold">404</h1>
			<p className="text-center text-lg">Page not found</p>

			<Link href="/" className="text-white bg-red-600 p-1 rounded text-center w-32 ">
				Volver
			</Link>
		</section>
	);
}
