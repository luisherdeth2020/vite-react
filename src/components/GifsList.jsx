const GifsList = ({ listGifs }) => {
	return (
		<div className="row">
			{listGifs.map((person, index) => (
				<div key={index} className="col mb-4">
					<div className="card rounded" style={{ minWidth: '200px', minHeight: '460px' }}>
						<img className="rounded" src={person.url} alt={person.title} />
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
