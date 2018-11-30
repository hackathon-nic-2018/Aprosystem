import { combineReducers } from 'redux'

import { linesReducer } from './linesReducer'
import { SuggestionReducer } from './SuggestionReducer'
import { NearByStopsReducer } from './nearByStepsReducer'

export const reducers = combineReducers({
    lines: linesReducer,
    suggestion: SuggestionReducer,
    nearByStops: NearByStopsReducer,
});