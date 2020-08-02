export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


// action creators -- they are required to run asynchronous code. As we cant run async code inside reducers


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (val) => {
    return {
        type: ADD,
        payload: {
            val: val
        }
    }
}

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        payload: {
            val: val
        }
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id: id
    }
}