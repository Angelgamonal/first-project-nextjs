const getCharacter = ({ api = 'https://rickandmortyapi.com/api/character' }) =>
	fetch(api)
		.then((resp) => resp.json())
		.then((data) => {
			console.log(data);
			if (!data.results && !data.id) throw new Error('Error in in getApi');
			return data;
		})
		.catch((error) => {
			console.log(error);
		});

export default getCharacter;
