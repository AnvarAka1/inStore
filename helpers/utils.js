// import React from "react";
// export const addRemoveToEachRow = rows => {
// 	return rows.map(row => {
// 		return {
// 			...row,
// 			remove: ""
// 		};
// 	});
// };
// export const removeFormatter = (cell, row) => {
// 	return (
// 		<React.Fragment>
// 			<i className="fa fa-times" /> {cell}
// 		</React.Fragment>
// 	);
// };
export const convertFrontToBackDate = date => {
	const year = date.substring(0, 4);
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);
	return `${day}-${month}-${year}`;
};
export const convertBackToFrontDate = date => {
	const year = date.substring(6, 10);
	const month = date.substring(3, 5);
	const day = date.substring(0, 2);
	return `${year}-${month}-${day}`;
};
export const formCheckValidity = (formControls = []) => {
	let isFormValid = true;
	formControls.forEach(c => {
		isFormValid = isFormValid && c.isValid;
	});
	return isFormValid;
};
