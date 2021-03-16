import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JustArrived from "./components/JustArrived";
import Navbar from "./components/Navbar";
import TrendingNow from "./components/TrendingNow";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Banner />
			<JustArrived />
			<TrendingNow />
			<Footer />
		</div>
	);
}

export default App;
