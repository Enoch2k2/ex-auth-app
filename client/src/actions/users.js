export const loadUsers = () => {
  return dispatch => {
    dispatch({type: "LOADING"});
    return fetch('/api/v1/users')
      .then(resp => resp.json())
      .then(users => dispatch({type: "GET_USERS", payload: users}))
  }
}