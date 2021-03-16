import React from "react";
import DESKTOP_Hero from "../images/DESKTOP_Hero.jpg";
import img2 from "../images/DESKTOP_Fat_Skinny.jpg";
import img3 from "../images/kids_filter_v3.jpg";
import img4 from "../images/kids_junior_filter_v3.jpg";
import img5 from "../images/kids_baby_filter_v2.jpg";
import "./Banner.css";
function Banner() {
	return (
		<div className='main__banner'>
			{/* 1 image */}
			<div className='main__img'>
				<img src={DESKTOP_Hero} alt='pic' />
			</div>

			{/* 2 image */}
			<div className='second__img'>
				<img src={img2} alt='' />
			</div>
			{/* grid 3 images */}
			<div className='gridy'>
				<img src={img3} alt='pic1' />
				<img src={img4} alt='pic2' />
				<img src={img5} alt='pic3' />
			</div>
		</div>
	);
}

export default Banner;
