export function priceWithDiscount(price, percentDiscount) {
	console.log(
		`Calculate.priceWithpercentDiscount price: ${price}, discount: ${percentDiscount}`
	);

	let result = (price * (100 - percentDiscount)) / 100;
	console.log(`Calculate.priceWithDiscount priceWithDiscount: ${result}`);

	return result;
}
