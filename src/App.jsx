import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import GifsList from './components/GifsList';
import Pagination from './components/Pagination';

function App() {
	const [gifs, getGifs] = useState([]);
	const [info, setInfo] = useState({});
	function getNewGifsObjetc() {
		const apiURL = 'https://rickandmortyapi.com/api/character';
		return fetch(apiURL)
			.then((response) => response.json())
			.then((resp) => {
				const { results = [] } = resp;
				// const {info =[]}=resp;
				const gifs = results.map((personaje) => ({
					url: personaje.image,
					title: personaje.name,
					location: personaje.location.name,
				}));
				setInfo(resp.info);
				return gifs;
			});
	}

	const onPrevious = () => {
		getNewGifsObjetc(info.prev);
	};
	const onNext = () => {
		getNewGifsObjetc(info.next);
		console.log(getNewGifsObjetc(info.next))
	};

	useEffect(() => {
		getNewGifsObjetc().then((gifs) => getGifs(gifs));
	});
	// console.log(gifs.image)

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container mt-4">
				<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
				<GifsList listGifs={gifs} />
				<Pagination prev={info.prev} next={info.next} />
			</div>
		</>
	);
}

export default App;
