import React from "react";
import JA1 from "../images/JA1.jpg";
import JA2 from "../images/JA2.jpg";

import "./JustArrived.css";
function JustArrived() {
	return (
		<div className='main'>
			<div className='title'>
				<h2>JUST ARRIVED</h2>
			</div>
			<div className='justArrived__images'>
				<img src={JA1} alt='JA1' />
				<img src={JA2} alt='JA2' />
			</div>
		</div>
	);
}

export default JustArrived;
