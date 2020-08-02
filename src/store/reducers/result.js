import * as actionTypes from '../actions/actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT:
            console.log(action)
            return {
                ...state,
                results: state.results.concat({ key: new Date(), val: action.result })
            }
        case actionTypes.DELETE_RESULT:

            const filteredArray = state.results.filter(result => result.key !== action.id)
            console.log(filteredArray)
            console.log(action)
            return {
                ...state,
                results: filteredArray
            }
    }

    return state;
}


export default reducer;