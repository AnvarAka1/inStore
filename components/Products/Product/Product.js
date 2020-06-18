import React from "react";
import { Button } from "react-bootstrap";
import { Stars, TextOverflow } from "../../";
import classes from "./Product.module.scss";
import Link from "next/link";

const product = ({ id, image, title, author, rate, current_price, price, isVideo, onAddRemoveItem, lang }) => {
	const content = {
		remove: ["Удалить из корзины", "Remove from cart", "Uzb"],
		currency: ["сум", "so'm", "so'm"]
	};
	return (
		<div>
			<div className={classes.Product}>
				<Link
					href={`/${isVideo ? "videos" : "books"}/[id]?l=${lang}`}
					as={`/${isVideo ? "videos" : "books"}/${id}?l=${lang}`}
				>
					<a>
						<div className={classes.Image}>
							<img src={image} alt={title} />
						</div>
					</a>
				</Link>
				<Link
					href={`/${isVideo ? "videos" : "books"}/[id]?l=${lang}`}
					as={`/${isVideo ? "videos" : "books"}/${id}?l=${lang}`}
				>
					<a>
						<h5 className="text-black mb-1 mt-2">{title}</h5>
						<p className="text-small">{author}</p>
						<Stars rate={Math.round(rate)} />
					</a>
				</Link>
				<Link
					href={`/${isVideo ? "videos" : "books"}/[id]?l=${lang}`}
					as={`/${isVideo ? "videos" : "books"}/${id}?l=${lang}`}
				>
					<a>
						<div className="d-flex align-items-end mt-1">
							<p className="text-danger text-bold mb-0 mr-1 text-md">{current_price} {content.currency[lang]}</p>
							<p className="text-xsmall text-crossed">{price}</p>
						</div>
					</a>
				</Link>
			</div>
			{onAddRemoveItem && (
				<Button onClick={onAddRemoveItem} variant="secondary text-small w-100" className="mt-2">
					<TextOverflow>{content.remove[lang]}</TextOverflow>
				</Button>
			)}
		</div>
	);
};

export default React.memo(product);
