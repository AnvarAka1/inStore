import React from 'react';
import Product from "./Product/Product";
import {SliderCarousel} from "../index";
import {Tab, Tabs} from "react-bootstrap";

function VideoProductsCarousel(props) {
    const {
        activeKey,
        productItems,
        categoryItems,
        onCategoryClick
    } = props


    const resp = {
        xl: 6,
        lg: 4,
        sm: 3,
        xs: 2
    };

    const productsView = productItems.map(item => {
        return <Product key={item.id} {...item} />;
    });
    return (
        <>
            <Tabs
                activeKey={activeKey}
                onSelect={(k) => onCategoryClick(k)}
            >
                {categoryItems.map(item => (
                    <Tab
                        key={item.id}
                        eventKey={item.id}
                        title={item.title}
                    >
                        <SliderCarousel items={resp}>
                            {productsView}
                        </SliderCarousel>
                    </Tab>
                ))}
            </Tabs>
        </>
    );
}

export default VideoProductsCarousel