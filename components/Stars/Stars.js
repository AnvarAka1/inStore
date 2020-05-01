import React from "react";
const MAX_STARS = 5;
const stars = ({ rate }) => {
	if (rate > MAX_STARS) {
		return;
	}
	let starsArray = [];
	for (let i = 0; i < MAX_STARS; i++) {
		starsArray.push(
			<div key={i} className="mr-1">
				<img src="/static/images/icons/star.png" className="icon" alt="star" />
			</div>
		);
	}
	for (let i = 0; i < rate; i++) {
		starsArray[i] = (
			<div key={i} className="mr-1">
				<img src="/static/images/icons/star-gold.png" className="icon" alt="star-gold" />
			</div>
		);
	}
	return <div className="d-flex align-items-center">{starsArray}</div>;
};

export default stars;
