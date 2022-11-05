import { useState, useEffect } from 'react';
import getNewGifsObjetc from './getNewGifsObjetc';

const GifsList = () => {
	const [gifs, getGifs] = useState([]);

	useEffect(() => {
		getNewGifsObjetc().then((gifs) => getGifs(gifs));
	});
	// console.log(gifs.image)

	return (
		<div className="row">
			{/* creamos una expresión de JS */}
			{gifs.map((person, index) => (
				<div key={index} className="col mb-4">
					<div className="card" style={{ minWidth: '200px' }}>
						<img src={person.url} alt={person.title} />
						<div className="card-body">
							<h5 className="card-title">{person.title}</h5>
							<hr />
							<p>Location: {person.location}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default GifsList;
