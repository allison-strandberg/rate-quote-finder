import React from "react";
import { expect } from "chai";
import { SAVE_FORM } from "./actionTypes";
import { saveForm } from "./actions";

describe("actions", () => {
	it("should create an action to save the form values", function() {
		const loanSize = 10000;
		const propertyType = "SingleFamily";
		const creditScore = 700;
		const occupancy = "Primary";
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
});