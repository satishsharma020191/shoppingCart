import {call, put, takeEvery} from "redux-saga/effects";

import { receivedProductsData, filterProductsData } from "./actions";
import { receivedCategoriesData } from "../home/actions";
import { REQUEST_PRODUCTS_DATA } from "./constants";
import { fetchProductsData } from './api';
import { fetchCategoriesData } from '../home/api';

function *getProductsData(action){
        console.log('getProduct Data plp saga', action);
    try{
        const data = yield call(fetchProductsData);
        console.log('product data plp saga', data);
        yield put(receivedProductsData(data));

        if(!action.payload.categories){
            const data = yield call(fetchCategoriesData);
            yield put(receivedCategoriesData(data));
        }

        if(action.payload.cid && action.payload.cid!='all'){
            let catID = data && data.filter((d)=>{
                return d.key == action.payload.cid;
            })[0].id;

            console.log('printing CID plp SAGA', catID);

            yield put(filterProductsData(action.payload.cid));
        }
    }catch(e){
        console.log(e);
    }
}


export function* plpSaga(){
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}

