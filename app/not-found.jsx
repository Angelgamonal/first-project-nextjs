import Link from "next/link";

export default function NotFount() {
	return (
		<section>
			<h1>404</h1>
			<p>Page not found</p>

			<Link
				href="/"
				style={{
					color: "#fff",
					background: "#c00",
					padding: "5px",
					borderRadius: "5px",
					textDecoration: "none",
				}}
			>
				Volver
			</Link>
		</section>
	);
}
