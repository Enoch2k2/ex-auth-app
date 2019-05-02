export const getToken = () => {
  return localStorage.getItem('token');
}

export const loadUsers = () => {
  return dispatch => {
    dispatch({type: "LOADING"});
    return fetch('/api/v1/users', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${ getToken() }`
      }
    })
      .then(resp => resp.json())
      .then(json => {
          if(json.success) {
            return dispatch({type: "GET_USERS", payload: json.users})
          } else {
            throw new Error('Not Authorized to do that!')
          }
        }
      ).catch(err => console.log(err));
  }
}

export const signup = (user, history) => {
  return dispatch => {
    dispatch({type: "LOADING"});
    return fetch('/api/v1/signup', {
      method: 'post',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ user })
    }).then(res => res.json())
    .then(json => {
        if(json.success) {
          localStorage.setItem('token', json.token);
          dispatch({ type: "SET_TOKEN" });
          history.push("/");
        } else {
          throw new Error(json.errors)
        }
      }
    ).catch(err => console.log(err))
  }
}

export const authenticateToken = () => {
  return !!localStorage.getItem('token');
}

export const logout = (history) => {
  localStorage.removeItem("token");
  history.push("/login");
}

export const login = (user, history) => {
  return dispatch => {
    dispatch({type: "LOADING"});
    return fetch('/api/v1/login', {
      method: 'post',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ user })
    }).then(res => res.json())
    .then(json => {
      if(json.success) {
        localStorage.setItem('token', json.token);
        dispatch({ type: "SET_TOKEN" });
        history.push("/")
      } else {
        throw new Error('Username and/or Password doesn\'t match');
      }
    })
    .catch(err => console.log(err));
  }
}