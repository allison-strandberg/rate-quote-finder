import React from "react";
import { expect, use } from "chai";
import nock from "nock";
import chaiNock from "chai-nock";
import { 
	SAVE_FORM, 
	REQUEST_QUOTES,
	RECEIVE_QUOTES,
} from "./actionTypes";
import { 
	saveForm,
	requestQuotes,
	receiveQuotes,
	fetchQuotes,
} from "./actions";
import { authKey } from "../authKey";

use(chaiNock);

describe("actions", () => {
	const loanSize = 10000;
	const propertyType = "SingleFamily";
	const creditScore = 700;
	const occupancy = "Primary";
	const json = {
		"rateQuotes": [
			{
				"lenderName": "TFB Federal Credit Union",
				"loanType": "7/1 ARM",
				"interestRate": 4.375,
				"closingCosts": 1100,
				"monthlyPayment": 49.928525773518246,
				"apr": 5.282310432412484
			},
			{
				"lenderName": "TFB Federal Credit Union",
				"loanType": "10/1 ARM",
				"interestRate": 4.5,
				"closingCosts": 1100,
				"monthlyPayment": 50.66853098258855,
				"apr": 5.414250953996092
			}
		]
	};
	const rateQuotes = json.rateQuotes;
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
				isFetching: true
			}
		}
		expect(
			requestQuotes(loanSize, propertyType, creditScore, occupancy)
		).to.deep.equal(expectedAction);
	});

	it("should create an action to receive quotes", function() {
		const expectedAction = {
			type: RECEIVE_QUOTES,
			payload: {
				rateQuotes,
				isFetching: false
			}
		}
		expect(
			receiveQuotes(json)
		).to.deep.equal(expectedAction);
	});
});
