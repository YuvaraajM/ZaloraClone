import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JustArrived from "./components/JustArrived";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Banner />
			<JustArrived />
			<Footer />
		</div>
	);
}

export default App;
