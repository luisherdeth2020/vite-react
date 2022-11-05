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
				setInfo(resp.info);
				setGifs(gifs);
			});
	}

	const onPrevious = () => {
		getNewGifsObjetc(info.prev);
	};
	const onNext = () => {
		getNewGifsObjetc(info.next);
	};

	useEffect(() => {
		getNewGifsObjetc(initialURL);
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container mt-4">
				<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
				<GifsList listGifs={gifs} />
				<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
			</div>
		</>
	);
}

export default App;
