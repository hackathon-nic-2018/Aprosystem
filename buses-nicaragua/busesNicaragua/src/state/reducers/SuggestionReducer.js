import {
    SET_DATA_LINE,
    SET_FILTER_DATA_LINE,
} from './../actions/SuggestionAction';

export const SeggestionReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_DATA_LINE: {
            const { line } = action.payload;
            const newState = { ...state, ...line };
            return newState;
        }
        case SET_FILTER_DATA_LINE: {
            const { line } = action.payload;
            const newState = { ...state, ...line };
            return newState;
        }
        default:
            return state;
    }

};