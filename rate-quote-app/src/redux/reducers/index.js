import { combineReducers } from "redux";
import * as reducers from "../reducers";
import { saveForm } from "../actions";
import { SAVE_FORM } from "../actionTypes";

export default combineReducers(reducers)