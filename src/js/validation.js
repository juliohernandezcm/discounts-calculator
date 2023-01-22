export function validateDataInputs(price, discount) {
	if (price === 0 || discount === 0) {
		return false;
	}

	if (discount > 100) {
		return false;
	}

	return true;
}
