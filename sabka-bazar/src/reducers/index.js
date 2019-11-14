import { combineReducers } from "redux";

import data from "../containers/home/reducer";
import login from "../containers/home/reducer";

export default combineReducers({data, login});