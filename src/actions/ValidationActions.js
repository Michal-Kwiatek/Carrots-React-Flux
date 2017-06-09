import dispatcher from '../dispatcher';


export function validateForm(data) {
    dispatcher.dispatch({
        type: "VALIDATE_FORM",
        data
    })
}

