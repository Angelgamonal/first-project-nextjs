import Link from 'next/link';

const ButtonAnchor = ({ children, to = '' }) => {
	return (
		<>
			<Link className='m-2 rounded-lg bg-white p-2 text-black' href={to}>
				{children}
			</Link>
		</>
	);
};

export default ButtonAnchor;
