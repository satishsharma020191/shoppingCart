import { combineReducers } from "redux";

import home from "./containers/home/reducer";
import plp from "./containers/plp/reducer";

export default combineReducers({ home, plp });