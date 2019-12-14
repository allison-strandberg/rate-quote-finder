import { saveForm } from "../actions";
import { SAVE_FORM } from "../actionTypes";

export const initialState = {
	loanSize: null,
	propertyType: "SingleFamily",
	creditScore: null,
	occupancy: "Primary",
	rateQuotes: [],
}

export const formValues = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_FORM:
			return Object.assign({}, state, action.payload);
			break
		default:
			return state
	}
}