import { 
	SAVE_FORM,
	REQUEST_QUOTES,
} from "./actionTypes";

export const saveForm = (loanSize, propertyType, creditScore, occupancy) => ({
	type: SAVE_FORM,
	payload: {
		loanSize,
		propertyType,
		creditScore,
		occupancy,
	}
});

export const requestQuotes = (loanSize, propertyType, creditScore, occupancy) => ({
	type: REQUEST_QUOTES,
	payload: {
		loanSize,
		propertyType,
		creditScore,
		occupancy,
	}
});
