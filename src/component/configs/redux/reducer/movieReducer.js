const movieState = {
  movie: []
}
const movieReducer = (state = movieState, action) => {
  // if(action.type === "UPDATE_MOVIE"){
  //     console.log(action);
  //     return {
  //         ...state,
  //         movie : action.payload
  //     }
  // }
  // else{
  // return state
  // }
  switch (action.type) {
    case 'UPDATE_MOVIE' :
      return {
        ...state,
        movie: action.payload
      }
    default :
      return state
  }
}

export default movieReducer
