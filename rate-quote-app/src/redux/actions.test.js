import React from "react";
import { expect } from "chai";
import { 
	SAVE_FORM, 
	REQUEST_QUOTES,
} from "./actionTypes";
import { 
	saveForm,
	requestQuotes,
} from "./actions";

describe("actions", () => {
	const loanSize = 10000;
	const propertyType = "SingleFamily";
	const creditScore = 700;
	const occupancy = "Primary";
	it("should create an action to save the form values", function() {
		const expectedAction = {
			type: SAVE_FORM,
			payload: {
				loanSize,
				propertyType,
				creditScore,
				occupancy,
			}
		}
		expect(
			saveForm(loanSize, propertyType, creditScore, occupancy)
		).to.deep.equal(expectedAction);
	});

	it("should create an action to request quotes", function() {
		const expectedAction = {
			type: REQUEST_QUOTES,
			payload: {
				loanSize,
				propertyType,
				creditScore,
				occupancy,
			}
		}
		expect(
			requestQuotes(loanSize, propertyType, creditScore, occupancy)
		).to.deep.equal(expectedAction);
	});
});
