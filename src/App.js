import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JustArrived from "./components/JustArrived";
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import TrendingNow from "./components/TrendingNow";
import Content from "./components/Content";
import ThirdNav from "./components/ThirdNav";
import FeaturedBrands from "./components/FeaturedBrands";
import PromotionDeals from "./components/PromotionsDeals";
function App() {
	return (
		<div className='app'>
			<Navbar />
			<SecondaryNav />
			<ThirdNav />
			<Banner />
			<JustArrived />
			<TrendingNow />
			<FeaturedBrands />
			<PromotionDeals />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
