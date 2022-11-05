import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import GifsList from './components/GifsList';
import Pagination from './components/Pagination';

function App() {
	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container mt-4">
				<Pagination />
				<GifsList />
				<Pagination />
			</div>
		</>
	);
}

export default App;
