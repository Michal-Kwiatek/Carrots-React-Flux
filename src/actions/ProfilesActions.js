import dispatcher from '../dispatcher';


export function validateForm(data) {
    dispatcher.dispatch({
        type: "VALIDATE_FORM",
        data
    })
}

export function createProfile(name, carrotsCount) {
    dispatcher.dispatch({
        type: "CREATE_PROFILE",
        name,
        carrotsCount
    })
}

export function changeSelected(id) {
    dispatcher.dispatch({
        type: "SELECTED_PROFILE_CHANGE",
        id
    })
}

export function deleteSelected() {
    dispatcher.dispatch({
        type: "DELETE_SELECTED_PROFILE"
    })
}