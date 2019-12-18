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
			return Object.assign({}, state, action.payload);
			break
		default:
			return state
	}
}