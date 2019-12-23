import { 
	REQUEST_QUOTES,
	RECEIVE_QUOTES,
	RECEIVE_FAILURE
} from "../actionTypes";

export const quotes = (state = {
	isFetching: false,
	rateQuotes: [],
}, action) => {
	switch (action.type) {
		case REQUEST_QUOTES:
			return Object.assign({}, state, {
				isFetching: action.payload.isFetching
			});
			break
		case RECEIVE_QUOTES:
		case RECEIVE_FAILURE:
			action.payload.rateQuotes.map(quote => {
				quote.interestRate = `${quote.interestRate.toFixed(3)}%`;
				quote.closingCosts = `$${quote.closingCosts.toFixed()}`;
				quote.monthlyPayment = `$${quote.monthlyPayment.toFixed()}`;
				quote.apr = `${quote.apr.toFixed(3)}%`;
			});
			return Object.assign({}, state, action.payload);
			break
		default:
			return state
	}
}