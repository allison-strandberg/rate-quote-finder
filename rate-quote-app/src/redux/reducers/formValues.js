import { SAVE_FORM } from "../actionTypes";

export const formValues = (state = {
	loanSize: null,
	propertyType: "SingleFamily",
	creditScore: null,
	occupancy: "Primary",
}, action) => {
	switch (action.type) {
		case SAVE_FORM:
			return Object.assign({}, state, action.payload);
			break
		default:
			return state
	}
}