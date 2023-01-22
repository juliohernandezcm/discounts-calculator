const couponList = [
	{ name: 'discount20', percent: 20 },
	{ name: 'discount30', percent: 30 },
	{ name: 'discount40', percent: 40 },
	{ name: 'discount50', percent: 50 },
];

export function getPercentDiscount(couponName) {
	console.log(`Coupon.getPercentDiscount couponName: ${couponName}`);
	let result = 0;

	let couponInArray = findCouponItemByName(couponName);
	console.log(`Coupon.getPercentDiscount couponInArray: ${couponInArray}`);

	if (!couponInArray) {
		return result;
	}

	result = couponInArray.percent;
	console.log(
		`Coupon.getPercentDiscount couponName: ${couponName} discount: ${result}`
	);

	return result;
}

const findCouponItemByName = (couponName) => {
	console.log(`Coupon.findCouponItemByName couponName: ${couponName}`);
	let result = couponList.find((item) => item.name === couponName);
	console.log(`Coupon.findCouponItemByName couponItem: ${result}`);
	return result;
};
