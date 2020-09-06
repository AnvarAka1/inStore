import React from "react";
import {Button} from "react-bootstrap";
import classes from "./ProductDescription.module.scss";
import ReactHtmlParser from 'react-html-parser'
import {useTranslation} from "react-i18next";
import { prop } from 'ramda'

const MAX_LENGTH = 128;
const BOOK_TYPES = ["Аудиокнига", "Печатное издание", "Электронная книга"];

const productDescription = props => {
	const title = prop('title', props)
	const author = prop('author', props)
	const bookType = parseInt(prop('book_type', props))
	const description =	prop('description', props)
	const price = prop('price', props)
	const currentPrice = prop('current_price', props)
	const isInCart = prop('isInCart', props)
	const cartClicked =	prop('cartClicked', props)
	const favouriteClicked = prop('favouriteClicked', props)
	const inFavourites = prop('in_favourites', props)
	const isAuthorized = prop('isAuthorized', props)
	const isDescriptionExpanded = prop('isDescriptionExpanded', props)
	const expandDescription = prop('expandDescription', props)
	const bookFormat =	prop('book_format', props)
	const bought = prop('bought', props)

	const { t } = useTranslation()


	const getDiscount = () => {
		const disc = (1 - currentPrice / price) * 100
		if(disc.toString().indexOf('.') !== -1){
			return disc.toFixed(2)
		}
		return disc;
	}

	let desc = description;
	if (desc && desc.length > MAX_LENGTH) {
		desc = !isDescriptionExpanded ? (
			<React.Fragment>
				{ReactHtmlParser(description.substr(0, MAX_LENGTH))}
				<a role="button" className="text-accent ml-2" style={{ cursor: "pointer" }} onClick={expandDescription}>
					Подробнее »
				</a>
			</React.Fragment>
		) : (
			ReactHtmlParser(description)
		);
	}

	return (
		<div className={classes.ProductDescription}>
			<h2>{title}</h2>
			<div className="d-flex justify-content-between align-items-center">
				<h4 className="text-secondary mb-0">{author}</h4>
				<div className="d-flex ml-4">
					{isAuthorized && (
						<Button onClick={favouriteClicked} className="text-small mr-2" variant="secondary">
							<div className="d-flex align-items-center">
								<img src="/images/icons/star.png" className="icon mr-1" />
								{inFavourites ? "Убрать из избранного" : "Избранное"}
							</div>
						</Button>
					)}
					<p className="text-small btn btn-secondary">
						{bookFormat ? bookFormat : BOOK_TYPES[bookType - 1]}
					</p>
				</div>
			</div>
			<p className="text-md mt-3">
				<strong>Аннотация к книге "{title}"</strong>
			</p>
			<p className="text-md">{desc}</p>
			<div className="d-flex justify-content-between align-items-end mt-2 mb-4">
				<h2 className="mb-0 text-accent">{currentPrice} сум</h2>
				<div className="d-flex align-items-end ml-4">
					{parseInt(currentPrice) !== parseInt(price) && (
						<div className="text-center">
						<p className="text-crossed text-small text-black">{price} сум</p>
						<p className="btn btn-primary text-small">{getDiscount()}% Скидка</p>
					</div>
					)}
					{/* Читать фрагмент */}
					{bookType === 3 && (
						<Button onClick={null} className="text-small ml-2" variant="secondary">
							Читать фрагмент
						</Button>
					)}
				</div>
			</div>
			{!bought ? (
				<Button onClick={cartClicked} className="w-100">
					<img src="/images/icons/cart-white.png" className="icon icon-sm mr-1" />
					{isInCart
						? t('Remove from cart')
						: t('Add to cart')
					}
				</Button>
			) : (
				<Button className="w-100" disabled>
					{t('Bought')}
				</Button>
			)}
		</div>
	);
};
export default productDescription;
