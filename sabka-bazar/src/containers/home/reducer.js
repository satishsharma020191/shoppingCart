import { RECEIVED_BANNER_DATA, RECEIVED_CATEGORIES_DATA, SET_ERROR_TOAST } from "./constants";

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_BANNER_DATA:
            return state = { ...state, banners: action.payload }

        case RECEIVED_CATEGORIES_DATA:
            return state = { ...state, categories: action.payload }

        case SET_ERROR_TOAST:
            return state = { ...state, toastMessage: action.payload }

        default:
            return state;
    }
} 