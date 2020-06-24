import React from "react";
import Link from "next/link";
import classes from "./PreCarousel.module.scss";

const preCarousel = ({isVideo, children, link, lang}) => {
    const content = {
        texts: ["Все сборники", "All compilations", "Barcha to'plamlar"]
    };
    return (
        <Link href={link}>
            <a>
                <div className={classes.PreCarousel}>
                    <div>
                        <div className={classes.Image}>
                            <img src={`/images/icons/${!isVideo ? "books.png" : "videos.png"}`}/>
                        </div>
                        <h3 className="text-accent">{children}</h3>
                        <p className={`text-small mt-auto ${isVideo && "text-bold"}`}>{content.texts[lang]}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default preCarousel;
