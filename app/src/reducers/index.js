import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

    const initialState = {
    data: {
        "symbol": "",
        "priceChange": "",
        "priceChangePercent": "",
        "weightedAvgPrice": "",
        "prevClosePrice": "",
    },
    isFetching: false,
    error: "",
    };

    export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
        return {
            ...state,
            data: {},
            isFetching: true,
            error: "",
        };
        case FETCH_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
            error: "",
        };
        case FETCH_ERROR:
        return {
            ...state,
            data: {},
            isFetching: false,
            error: action.payload,
        };
        default:
        return state;
    }
    };
