import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JustArrived from "./components/JustArrived";
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import TrendingNow from "./components/TrendingNow";
import Content from "./components/Content";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<SecondaryNav />
			<Banner />
			<JustArrived />
			<TrendingNow />
			<Content App />
			<Footer />
		</div>
	);
}

export default App;
