export default (state={users: [], loading: false}, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "GET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case "SET_TOKEN":
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}