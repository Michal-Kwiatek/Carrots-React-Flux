import dispatcher from '../dispatcher';


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

export function addCarrots(count) {
    dispatcher.dispatch({
        type: "ADD_CARROTS",
        count
    })
}

export function subtractCarrots(count) {
    dispatcher.dispatch({
        type: "SUBTRACT_CARROTS",
        count
    })
}