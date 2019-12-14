import { SAVE_FORM } from "./actionTypes";

export const saveForm = (loanSize, propertyType, creditScore, occupancy) => ({
	type: SAVE_FORM,
	payload: {
		loanSize,
		propertyType,
		creditScore,
		occupancy,
	}
});
