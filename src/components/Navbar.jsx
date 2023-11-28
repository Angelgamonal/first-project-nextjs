import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='flex justify-between bg-slate-600 p-5'>
			<Link href='/'>
				<h1 className='text-3xl font-bold'>NextSite</h1>
			</Link>

			<ul className='flex justify-center gap-3 pr-3 '>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/posts'>Posts</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
