import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = ({ items, lang }) => {
	const NavigationItemsView = items.map(item => {
		return (
			<NavigationItem href={item.href} key={item.id} icon={item.icon}>
				{item.titles[lang]}
			</NavigationItem>
		);
	});
	return <ul>{NavigationItemsView}</ul>;
};

export default NavigationItems;
