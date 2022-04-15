import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Show from './components/Show';
import './App.css';

const App = () => {
	return (
		<div id="app" className="app">
			<Header />

			<main>
				<Show />
			</main>

			<Footer />
		</div>
	);
};

export default App;
