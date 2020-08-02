import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        console.log(getState()); //oldState. May be required to perform async task.
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }

}
export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    }
}