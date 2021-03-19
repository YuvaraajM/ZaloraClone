import React from "react";
import "./FeaturedBrands.css";
import FB1 from "../images/FB1.jpg";
import FB2 from "../images/FB2.jpg";
import FB3 from "../images/FB3.jpg";
import FB4 from "../images/FB4.jpg";
import FB5 from "../images/FB5.jpg";
import FB6 from "../images/FB6.jpg";

var arr = [FB1, FB2, FB3, FB4, FB5, FB6];
function ImageRepeat({ img, id }) {
	return (
		<div className='main__images__FB'>
			<img src={img} alt='img' key={id} />
		</div>
	);
}
function FeaturedBrands() {
	return (
		<div className='main__brands'>
			{/* 6 images --> 2 rows */}
			<div className='container'>
				<h2>FEATURED BRANDS</h2>
				{arr.map((a, index) => (
					<ImageRepeat img={a} key={index} />
				))}
			</div>
		</div>
	);
}

export default FeaturedBrands;
