import getCharacter from '@/utils/getCharacter';
import Image from 'next/image';
import Link from 'next/link';

const Page = async ({ params }) => {
	const character = await getCharacter({
		api: `https://rickandmortyapi.com/api/character/${params.id}`,
	});

	return (
		<>
			<h1 className="text-4xl text-center font-bold underline">
				Character ID: {params.id}{' '}
			</h1>

			<section className="flex gap-3 items-center justify-center mt-3 ">
				<Image src={character.image} alt={character.name} width={250} height={150} />
				<article className="flex flex-col gap-3">
					<span>
						Name: <strong>{character.name}</strong>
					</span>
					<span>
						Status: <strong>{character.status}</strong>
					</span>
					<span>
						Specie: <strong>{character.species}</strong>
					</span>
					<span>
						Gender: <strong>{character.gender}</strong>
					</span>
					<Link
						href="/posts"
						className="border border-white text-center rounded-lg p-1 hover:bg-white hover:text-black"
					>
						Regresar
					</Link>
				</article>
			</section>
		</>
	);
};

export default Page;
