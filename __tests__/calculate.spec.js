import { priceWithDiscount } from '../src/js/calculate.js';

describe('calculate function', () => {
	test('it should when price and percentage are greater than zero', () => {
		expect(priceWithDiscount(100, 10)).toEqual(90);
		expect(priceWithDiscount(100, 20)).toEqual(80);
		expect(priceWithDiscount(100, 30)).toEqual(70);
		expect(priceWithDiscount(100, 40)).toEqual(60);
		expect(priceWithDiscount(100, 50)).toEqual(50);
	});
});
