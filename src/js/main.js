import { validateDataInputs } from './validation.js';
import { priceWithDiscount } from './calculate.js';
import { getPercentDiscount } from './coupon.js';

const inputDiscountPrice = document.querySelector('#container-discount_price');
const inputDiscountPercentage = document.querySelector(
	'#container_discount-percentage'
);
const btnCalculate = document.querySelector('#container_discount-btn');
const totalPriceDiscount = document.querySelector('#totalPriceDiscount');
const inputPriceCoupon = document.querySelector('#inputPriceCoupon');
const coupon = document.querySelector('#coupon');
const btnCoupons = document.querySelector('#btnCoupons');
const totalPriceCoupons = document.querySelector('#totalPriceCoupons');

let totalPriceWithDiscount = 0;

btnCalculate.addEventListener('click', () => {
	let price = Number(inputDiscountPrice.value);
	let percent = Number(inputDiscountPercentage.value);

	totalPriceDiscount.value = calculatePriceWithDiscount(price, percent);
});

const calculatePriceWithDiscount = (price, percent) => {
	if (!validateDataInputs(price, percent)) {
		totalPriceDiscount.value = `Input values invalid`;
	}

	return (totalPriceWithDiscount = priceWithDiscount(price, percent));
};

btnCoupons.addEventListener('click', () => calculateDiscountWithCoupon());

const calculateDiscountWithCoupon = () => {
	const price = Number(inputPriceCoupon.value);
	const discountCoupon = coupon.value;

	if (!price || !discountCoupon) {
		totalPriceCoupons.value = 'Debe llenar ambos campos';
		return;
	}

	let percentDiscount = getPercentDiscount(discountCoupon);

	let totalPrice = priceWithDiscount(price, percentDiscount);

	totalPriceCoupons.value = totalPrice;
};
