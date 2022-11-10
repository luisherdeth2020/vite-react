const Pagination = ({ anterior, siguiente, anteriorUrl, siguienteUrl }) => {
	const handlePrevious = () => {
		anteriorUrl();
	};
	const handleNext = () => {
		siguienteUrl();
	};
	return (
		<nav className="my-5">
			<ul className="pagination justify-content-center">
				{anterior ? (
					<li className="page-item">
						<button className="page-link me-1 rounded-3" onClick={handlePrevious}>
							Previous
						</button>
					</li>
				) : null}
				{siguiente ? (
					<li className="page-item">
						<button className="page-link ms-1 rounded-3" onClick={handleNext}>
							Next
						</button>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export default Pagination;
