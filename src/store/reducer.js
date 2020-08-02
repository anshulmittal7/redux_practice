import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.val
            }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.val,
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ key: new Date(), val: state.counter })
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

    return state
}


export default reducer;