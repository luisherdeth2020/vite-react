import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GifsList from './components/GifsList';
import Pagination from './components/Pagination';

const convertGifsArray = (array) => {
	const newGifsArray = array.map((item) => ({
		url: item.image,
		title: item.name,
		location: item.location.name,
	}));
	return newGifsArray;
};

function App() {
	const [gifs, setGifs] = useState([]);
	const [info, setInfo] = useState({});

	const initialURL = 'https://rickandmortyapi.com/api/character';

	function getNewGifsObjetc(apiURL) {
		return fetch(apiURL)
			.then((response) => response.json())
			.then((resp) => {
				const { results = [] } = resp;
				const gifs = convertGifsArray(results);
				setGifs(gifs);
				setInfo(resp.info);
			});
	}

	const anteriorUrl = () => {
		getNewGifsObjetc(info.prev);
	};
	const siguienteUrl = () => {
		getNewGifsObjetc(info.next);
	};

	useEffect(() => {
		getNewGifsObjetc(initialURL);
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />

			<div className="container">
				<Pagination
					anterior={info.prev}
					siguiente={info.next}
					anteriorUrl={anteriorUrl}
					siguienteUrl={siguienteUrl}
				/>
				<GifsList listGifs={gifs} />
				<Pagination
					anterior={info.prev}
					siguiente={info.next}
					anteriorUrl={anteriorUrl}
					siguienteUrl={siguienteUrl}
				/>
			</div>
		</>
	);
}

export default App;
