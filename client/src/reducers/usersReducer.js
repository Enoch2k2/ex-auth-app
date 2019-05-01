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
    default:
      return state;
  }
}