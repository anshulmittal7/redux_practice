import * as actionTypes from '../actions/actionTypes'




// action creators -- they are required to run asynchronous code. As we cant run async code inside reducers


export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (val) => {
    return {
        type: actionTypes.ADD,
        payload: {
            val: val
        }
    }
}

export const subtract = (val) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: {
            val: val
        }
    }
}
