import { RECEIVED_API_DATA } from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case RECEIVED_API_DATA:
            console.log('reducer received data::', action);
            return action.payload;
        default:
            return state;
    }
}