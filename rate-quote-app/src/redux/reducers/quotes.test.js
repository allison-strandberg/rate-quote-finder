import { expect } from 'chai';
import { 
	REQUEST_QUOTES,
	RECEIVE_QUOTES
} from "../actionTypes";
import {
	requestQuotes,
	receiveQuotes
} from "../actions"
import { quotes } from "./quotes";

describe("quotes reducer", function() {
	const initialState = {
		isFetching: false,
		rateQuotes: [],
	}
	const loanSize = 10000;
	const propertyType = "MultiFamily";
	const creditScore = 700;
	const occupancy = "Secondary";
	const testJSON = {
	    "rateQuotes": [
	        {
	            "lenderName": "Test Credit Union",
	            "loanType": "7/1 ARM",
	            "interestRate": 4.375,
	            "closingCosts": 1100,
	            "monthlyPayment": 49.928525773518246,
	            "apr": 5.282310432412484
	        },
	        {
	            "lenderName": "Test Credit Union",
	            "loanType": "10/1 ARM",
	            "interestRate": 4.5,
	            "closingCosts": 1100,
	            "monthlyPayment": 50.66853098258855,
	            "apr": 5.414250953996092
	        }
		]
	};

	it("should return the initial state", function() {
		const reducerState = quotes(undefined, {});
		expect(reducerState).to.deep.equal(initialState);
	});

	it("should handle REQUEST_QUOTES", function() {
		const expectedState = {
			isFetching: true,
			rateQuotes: [],
		}
		const action = requestQuotes(
			loanSize, propertyType, creditScore, occupancy
		);
		const reducerState = quotes(initialState, action);
		expect(reducerState).to.deep.equal(expectedState);
	});

	it("should handle RECEIVE_QUOTES", function() {
		const expectedState = {
			isFetching: false,
			rateQuotes: testJSON.rateQuotes,
		}
		const action = receiveQuotes(testJSON);
		const reducerState = quotes(initialState, action);
		expect(reducerState).to.deep.equal(expectedState);
	});
});