const transactionState = {
  transaction: []
}
const transactionReducer = (state = transactionState, action) => {
  // if(action.type === "CREAT_TRANSACTION"){
  //     return {
  //         ...state,
  //         transaction : action.payload
  //     }
  // }
  // else{
  // return state
  // }
  switch (action.type) {
    case 'CREAT_TRANSACTION' :
      return {
        ...state,
        transaction: action.payload
      }
    default:
      return state
  }
}

export default transactionReducer
