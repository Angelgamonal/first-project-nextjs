import Image from "next/image";

// const getApi = async () => {
// 	const resp = await fetch("https://rickandmortyapi.com/api/character");
// 	const data = await resp.json();
// 	return data;
// };

const getApi = () =>
	fetch("https://rickandmortyapi.com/api/character")
		.then((resp) => resp.json())
		.then((data) => data);

const Posts = async () => {
	const data = await getApi();

	const { results } = data;

	return (
		<section>
			<ul>
				{results?.map((item) => (
					<li key={item.id}>
						<h4>{item.name}</h4>
						{/* <Image
							alt="img"
							src={item.image}
							width={100}
							height={50}
						/> */}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Posts;
