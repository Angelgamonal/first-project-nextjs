const getCharacter = ({ api = 'https://rickandmortyapi.com/api/character' }) =>
	fetch(api)
		.then((resp) => resp.json())
		.then((data) => {
			if (!data.results && !data.id)
				throw new Error('Error in in getCharacter->');
			return data;
		})
		.catch((error) => {
			console.log(error);
		});

export default getCharacter;
