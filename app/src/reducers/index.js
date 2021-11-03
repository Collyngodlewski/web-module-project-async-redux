import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

    const initialState = {
    crypto: {
        symbol: '',
        priceChange: '',
        priceChangePercent: '',
        weightedAvgPrice: '',
        prevClosePrice: '',
    },
    isFetching: false,
    error: "",
    };

    export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
        return {
            ...state,
            crypto: {},
            isFetching: true,
            error: "",
        };
        case FETCH_SUCCESS:
        return {
            ...state,
            crypto: action.payload,
            isFetching: false,
            error: "",
        };
        case FETCH_ERROR:
        return {
            ...state,
            crypto: {},
            isFetching: false,
            error: action.payload,
        };
        default:
        return state;
    }
    };
