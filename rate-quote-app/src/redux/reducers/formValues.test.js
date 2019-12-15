import { expect } from 'chai';
import { formValues } from "./formValues";
import { SAVE_FORM } from "../actionTypes";

describe("formValues reducer", function() {
	const initialState = {
		loanSize: "",
		propertyType: "SingleFamily",
		creditScore: "",
		occupancy: "Primary",
	}
	const loanSize = 10000;
	const propertyType = "MultiFamily";
	const creditScore = 700;
	const occupancy = "Secondary";
	const rateQuotes = [];

	it("should return the initial state", function() {
		const reducerState = formValues(undefined, {});
		expect(reducerState).to.deep.equal(initialState);
	});

	it("should not mutate state to handle SAVE_FORM", function() {
		const initialStateFrozen = Object.assign({}, initialState);
		Object.freeze(initialStateFrozen);
		const action = {
			type: SAVE_FORM,
			payload: {
				loanSize,
				propertyType,
				creditScore,
				occupancy,
			}
		};
		formValues(initialState, action);
		expect(initialState).to.deep.equal(initialStateFrozen);
	});

	it("should handle SAVE_FORM", function() {
		const expectedState = {
			loanSize,
			propertyType,
			creditScore,
			occupancy,
		}
		const action = {
			type: SAVE_FORM,
			payload: {
				loanSize,
				propertyType,
				creditScore,
				occupancy,
			}
		};
		const reducerState = formValues(initialState, action);
		expect(reducerState).to.deep.equal(expectedState);
	});
});