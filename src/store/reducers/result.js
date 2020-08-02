import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const filteredArray = state.results.filter(result => result.key !== action.id);
    console.log(filteredArray)
    return updateObject(state, { results: filteredArray });
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT: return updateObject(state, { results: state.results.concat({ key: new Date(), val: action.result }) });
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)

    }

    return state;
}


export default reducer;