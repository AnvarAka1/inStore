import React from 'react';
import CategoryItem from "./CategoryItem/CategoryItem";
import classes from './CategoryItems.module.scss'
import {Tab, Tabs} from "react-bootstrap";

function CategoryItems({activeKey, items, onClick}) {
    return (
        <Tabs
            activeKey={activeKey}
            onSelect={(k) => onClick(k)}
        >
            {items.map(item => (
                <Tab
                    key={item.id}
                    eventKey={item.id}
                    title={item.title}
                >

                </Tab>
            ))}
        </Tabs>
    )
}

export default CategoryItems