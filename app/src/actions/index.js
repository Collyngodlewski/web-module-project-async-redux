import axios from "axios";

export const getCrypto = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://api2.binance.com/api/v3/ticker/24hr')
        .then(resp => {
            console.log(resp.data[0]);
            dispatch(fetchSuccess((resp.data[0])));
        })
        .catch(err => {
            dispatch(fetchError(err));
        })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:crypto});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}