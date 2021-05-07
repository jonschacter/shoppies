import API_ROOT from '../apiRoot.js'

import { getNominees, clearNominees } from './nominees.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const signup = (userInfo, history) => {
    return dispatch => {
        return fetch(`${API_ROOT}/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userInfo
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    history.push("/")
                }
            })
            .catch(error => alert(error))
    }
}

export const login = (userInfo, history) => {
    return dispatch => {
        return fetch(`${API_ROOT}/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    dispatch(getNominees())
                    history.push("/")
                }
            })
            .catch(error => alert(error))
    }
}

export const logout = (history) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch(`${API_ROOT}/logout`, {
            credentials: "include",
            method: "DELETE"
        })
            .then(() => {
                dispatch(clearNominees())
                history.push("/")
            })
            .catch(error => alert(error))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    dispatch(getNominees())
                }
            })
            .catch(error => alert(error))
    }
}