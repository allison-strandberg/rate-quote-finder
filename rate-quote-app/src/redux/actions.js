import { 
	SAVE_FORM,
	REQUEST_QUOTES,
	RECEIVE_QUOTES,
	RECEIVE_FAILURE
} from "./actionTypes";
import { authKey } from "../authKey";

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
		isFetching: true,
	}
});

export const receiveQuotes = (json) => ({
	type: RECEIVE_QUOTES,
	payload: {
		rateQuotes: json.rateQuotes,
		isFetching: false,
	},
});

export const receiveFailure = () => ({
	type: RECEIVE_FAILURE,
	payload: {
		isFetching: false,
		didFail: true
	}
})

export const fetchQuotes = (loanSize, propertyType, creditScore, occupancy) => {
	return dispatch => {
		dispatch(requestQuotes(loanSize, propertyType, creditScore, occupancy))
		return fetch(
			`https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com` + 
			`/Prod/quotes?`+
			`loanSize=${loanSize}` + 
			`&propertyType=${propertyType}` + 
			`&creditScore=${creditScore}` + 
			`&occupancy=${occupancy}`,
			{headers: { Authorization: authKey } }
		)
			.then(
				response => {
					if (!response.ok) {
						dispatch(receiveFailure());
					} else {
						response.json()
						.then(json => dispatch(receiveQuotes(json)));
					}
				}, 
				error => console.log('An error occurred.', error)
			)
	}
};