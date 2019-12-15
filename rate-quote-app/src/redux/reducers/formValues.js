import { SAVE_FORM } from "../actionTypes";

export const formValues = (state = {
	loanSize: "",
	propertyType: "SingleFamily",
	creditScore: "",
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