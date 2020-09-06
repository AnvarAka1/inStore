import React from "react";
import {Button} from "react-bootstrap";
import {Stars, TextOverflow} from "../../";
import classes from "./Product.module.scss";
import Link from "next/link";
import ClampLines from "react-clamp-lines";
import {useTranslation} from "react-i18next";

const product = (props) => {
    const {
        id,
        image,
        title,
        author,
        rate,
        current_price,
        price,
        onAddRemoveItem
    } = props

    const { t, i18n } = useTranslation()

    const path = `/books/[id]?l=${i18n.language}`
    const as = `/books/${id}?l=${i18n.language}`

    const isDiscount = parseInt(current_price) !== parseInt(price)
    return (
        <div>
            <div className={classes.Product}>
                <Link
                    href={path}
                    as={as}
                >
                    <a>
                        <div className={classes.Image}>
                            <img src={image} alt={title}/>
                        </div>
                    </a>
                </Link>
                <Link
                    href={path}
                    as={as}
                >
                    <a className="d-block w-100 h-100">
                        <ClampLines
                            text={title}
                            lines={2}
                            buttons={true}
                            delay={200}
                            ellipsis="..."
                            id={`${title}${author}${id}`}
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
                    href={path}
                    as={as}
                >
                    <a>
                        <TextOverflow>
                            <div className="d-flex align-items-end mt-1">
                            <p className="text-danger text-bold mb-0 mr-1 text-md">
                                {current_price} {t('so\'m')}
                            </p>
                            {isDiscount && (
                                <p className="text-xsmall text-crossed">{price}</p>
                            )}
                        </div>
                        </TextOverflow>
                    </a>
                </Link>
            </div>
            {onAddRemoveItem && (
                <Button
                    onClick={onAddRemoveItem}
                    variant="secondary text-small w-100"
                    className="mt-2"
                >
                    <TextOverflow>{t('Remove from cart')}</TextOverflow>
                </Button>
            )}
        </div>
    );
};

export default React.memo(product);
