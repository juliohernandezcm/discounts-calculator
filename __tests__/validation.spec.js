import { validateDataInputs } from '../src/js/validation.js';

describe('validate function', () => {
	test('it should when price and percentage are greater than zero', () => {
		expect(validateDataInputs(0, 0)).toEqual(false);
		expect(validateDataInputs(1, 0)).toEqual(false);
		expect(validateDataInputs(0, 10)).toEqual(false);
		expect(validateDataInputs(100, 101)).toEqual(false);
		expect(validateDataInputs(100, 10)).toEqual(true);
	});
});
