// function getNewGifsObjetc() {
// 	const apiURL = 'https://rickandmortyapi.com/api/character';
// 	return(
// 	 fetch(apiURL)
// 		.then((response) => response.json())
// 		.then((resp) => {
// 			const { results = [] } = resp;
// 			const {info =[]} = resp;
// 			const gifs = results.map((personaje) => ({
// 				url: personaje.image,
// 				title: personaje.name,
// 				location: personaje.location.name,
// 			}));
// 			return gifs;
// 		})
// 		)
// }

// export default getNewGifsObjetc;
