import dispatcher from '../dispatcher';


export function validateForm(data) {
    dispatcher.dispatch({
        type: "VALIDATE_FORM",
        data
    })
}

export function changeState(state) {
    dispatcher.dispatch({
        type: "VALIDATE_CHANGE_STATE",
        state
    })
}