export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";

export const requestApiData = () => ({type: REQUEST_API_DATA});

export const receiveApiData = data => ({type: RECEIVED_API_DATA, payload: data});