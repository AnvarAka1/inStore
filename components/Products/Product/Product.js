import React from "react";
import {Button} from "react-bootstrap";
import {Stars, TextOverflow} from "../../";
import classes from "./Product.module.scss";
import Link from "next/link";
import ClampLines from "react-clamp-lines";

const product = ({id, image, title, author, rate, current_price, price, isVideo, onAddRemoveItem, lang}) => {
    const content = {
        remove: ["Удалить из корзины", "Remove from cart", "Savatdan olib tashlash"],
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
                            <img src={image} alt={title}/>
                        </div>
                    </a>
                </Link>
                <Link
                    href={`/${isVideo ? "videos" : "books"}/[id]?l=${lang}`}
                    as={`/${isVideo ? "videos" : "books"}/${id}?l=${lang}`}
                >
                    <a className="d-block w-100 h-100">
                        <ClampLines
                            text={title}
                            lines={2}
                            buttons={true}
                            delay={200}
                            ellipsis="..."
                            id={`${title[1]}${author[1]}${id}${Math.floor(Math.random() * 1000)}`}
                            innerElement="h5"
                            className={`text-black mb-1 mt-2 without-button`}
                        />
                        <TextOverflow>
                            <p className="text-small" title={author}>{author}</p>
                        </TextOverflow>
                        <Stars rate={Math.round(rate)}/>
                    </a>
                </Link>
                <Link
                    href={`/${isVideo ? "videos" : "books"}/[id]?l=${lang}`}
                    as={`/${isVideo ? "videos" : "books"}/${id}?l=${lang}`}
                >
                    <a>
                        <TextOverflow>
                            <div className="d-flex align-items-end mt-1">
                            <p className="text-danger text-bold mb-0 mr-1 text-md">{current_price} {content.currency[lang]}</p>
                            {parseInt(current_price) !== parseInt(price) &&
                            <p className="text-xsmall text-crossed">{price}</p>}
                        </div>
                        </TextOverflow>
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
