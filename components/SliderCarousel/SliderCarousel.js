import React from "react";
import Carousel from "react-multi-carousel";
import classes from "./SliderCarousel.module.scss";
import Compilation from "../Compilations/Compilation/Compilation";
const sliderCarousel = ({ items, children, slidesPerPage }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	const icons = {
		arrowLeft: (
			<div className={[ classes.Icon, classes.Left ].join(" ")}>
				<img className="icon" src="/static/images/icons/arrow-left.png" alt="left" />
			</div>
		),
		arrowLeftDisabled: (
			<div className={[ classes.Icon, classes.Disabled ].join(" ")}>
				<img className="icon" src="/static/images/icons/arrow-left.png" alt="left" />
			</div>
		),
		arrowRight: (
			<div className={[ classes.Icon, classes.Right ].join(" ")}>
				<img className="icon" src="/static/images/icons/arrow-right.png" alt="right" />
			</div>
		),
		arrowRightDisabled: (
			<div className={[ classes.Icon, classes.Disabled ].join(" ")}>
				<img className="icon" src="/static/images/icons/arrow-right.png" alt="right" />
			</div>
		)
	};

	return (
		<div className={classes.Carousel}>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={[ "tablet", "mobile" ]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{items}
			</Carousel>{" "}
		</div>
	);
};

export default sliderCarousel;
