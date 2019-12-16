import { combineReducers } from "redux";
import { formValues } from "./formValues";
import { quotes } from "./quotes";

export default combineReducers({
	formValues,
	quotes,
});