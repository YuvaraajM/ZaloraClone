import React from "react";
import "./PromotionDeals.css";
import PD1 from "../images/PD1.jpg";
import PD2 from "../images/PD2.jpg";
import PD3 from "../images/PD3.jpg";

var arr = [PD1, PD2, PD3];

function ImageRepeat({ img, id }) {
	return (
		<div className='main__images__PD'>
			<img src={img} alt='img' key={id} />
		</div>
	);
}
function PromotionsDeals() {
	return (
		<div className='promotions__banner'>
			{/* 6 images --> 2 rows */}
			<div className='container'>
				<h2>PROMOTIONS & DEALS</h2>
				{arr.map((a, index) => (
					<ImageRepeat img={a} key={index} />
				))}
			</div>
		</div>
	);
}

export default PromotionsDeals;
