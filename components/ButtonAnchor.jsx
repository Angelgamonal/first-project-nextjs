import Link from 'next/link';

const ButtonAnchor = ({ children, to = '' }) => {
	return (
		<>
			<Link className="p-2 bg-white text-black m-2 rounded-lg" href={to}>
				{children}
			</Link>
		</>
	);
};

export default ButtonAnchor;
