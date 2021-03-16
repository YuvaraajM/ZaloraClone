import React from "react";
import "./TrendingNow.css";
import TN1 from "../images/TN1.jpg";
import TN2 from "../images/TN2.jpg";
import TN3 from "../images/TN3.jpg";
import TN4 from "../images/TN4.jpg";

var arr = [TN1, TN2, TN3, TN4];
function ImageRepeat({ img ,id}) {
	return (
		<div className="main__images__TD">
			<img src={img} alt='img' />
		</div>
	);
}

function TrendingNow() {
	return (
		<div className='container'>
            <h2>TRENDING NOW</h2>
			{arr.map((a,index) => (
				<ImageRepeat img={a} key={index}/>
			))}
		</div>
	);
}

export default TrendingNow;
