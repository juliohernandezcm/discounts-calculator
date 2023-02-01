import { getPercentDiscount } from '../src/js/coupon.js';

describe('get discount value', () => {
	test('Coupon not found', () => {
		expect(() => {
			getPercentDiscount('discount88');
		}).toThrow('Coupon not found');
		expect(getPercentDiscount('discount20')).toEqual(20);
		expect(getPercentDiscount('discount30')).toEqual(30);
		expect(getPercentDiscount('discount40')).toEqual(40);
		expect(getPercentDiscount('discount50')).toEqual(50);
	});
});
