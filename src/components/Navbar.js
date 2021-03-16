import React from "react";
import "./Navbar.css";
function Navbar() {
	return (
		<div className='main__nav'>
			{/* title */}
			<h2 className='nav__title'>ZALORA</h2>
			{/* sub-items */}
			<ul className='nav__items'>
				<li>WOMEN</li>
				<li>MEN</li>
				<li>LUXURY</li>
				<li>BEAUTY</li>
				<li>KIDS</li>
				<li>LIFESTYLE</li>
			</ul>
			{/* search bar */}
			<input
				type='text'
				className='nav__search'
				placeholder='Search for products, trends and brands'
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='22'
				height='22'
				fill='currentColor'
				className='bi bi-search nav__search__icon'
				viewBox='0 0 16 16'
			>
				<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
			</svg>

			{/* 3 icons */}
			<ul className='nav__icons'>
				<li>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='white'
						className='bi bi-person nav__icon'
						viewBox='0 0 16 16'
					>
						<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
					</svg>
				</li>

				<li>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='white'
						className='bi bi-heart nav__icon'
						viewBox='0 0 16 16'
					>
						<path d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.824 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
					</svg>
				</li>

				<li>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='white'
						className='bi bi-bag nav__icon'
						viewBox='0 0 16 16'
					>
						<path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
					</svg>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
