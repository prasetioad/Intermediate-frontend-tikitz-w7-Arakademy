// import store from './store'

const userState = {
  user: []
}

const userReducer = (state = userState, action) => {
  // if(action.type === "GET_PROFILE"){
  //     return {
  //         ...state,
  //         user : action.payload
  //     }
  // }
  // else{
  // return state
  // }
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default userReducer
