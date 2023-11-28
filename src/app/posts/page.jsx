import ButtonAnchor from '@/components/ButtonAnchor';
import getCharacter from '@/utils/getCharacter';
import Image from 'next/image';

// const getApi = async () => {
// 	const resp = await fetch("https://rickandmortyapi.com/api/character");
// 	const data = await resp.json();
// 	return data;
// };

const Posts = async () => {
  const data = await getCharacter({
    api: 'https://rickandmortyapi.com/api/character',
  });

  return (
    <section>
      <ul
        style={{
          display: 'grid',
          gap: '1.2em',
          gridTemplateColumns: 'repeat(auto-fit, minmax(15em, auto))',
        }}
      >
        {data?.results ? (
          data.results.map((item) => (
            <li key={item.id} className='flex flex-col place-items-center'>
              <h2 className='p-2 text-2xl font-bold'>{item.name}</h2>
              <Image
                alt={item?.name}
                src={item?.image}
                width={250}
                height={150}
                style={{ objectFit: 'contain' }}
                priority
                className='h-auto w-60'
              />
              <ButtonAnchor to={`posts/${item.id}`}>Ver mas...</ButtonAnchor>
            </li>
          ))
        ) : (
          <span>Hubo un error :c</span>
        )}
      </ul>
    </section>
  );
};

export default Posts;
