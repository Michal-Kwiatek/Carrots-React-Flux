import dispatcher from '../dispatcher';

export function createProfile(name, carrotsCount) {
    dispatcher.dispatch({
        type: "CREATE_PROFILE",
        name,
        carrotsCount
    })
}

export function deleteProfile(id) {
    dispatcher.dispatch({
        type: "DELETE_PROFILE",
        id
    })
}

export function validateForm(data) {
    dispatcher.dispatch({
        type: "VALIDATE_FORM",
        data
    })
}