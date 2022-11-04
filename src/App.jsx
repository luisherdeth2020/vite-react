import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import GifsList from './components/GifsList'

function App() {

  return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container mt-5">
				<GifsList />
			</div>
		</>
  );
}

export default App
