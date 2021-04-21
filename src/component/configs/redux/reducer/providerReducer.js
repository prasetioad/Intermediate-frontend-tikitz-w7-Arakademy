const initialState = {
  provider: [],
  time: null,
  price: null,
  date: null,
  location: null,
  seats: []
}

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROVIDER' :
      return {
        ...state,
        transaction: action.payload
      }
    case 'UPDATE_TIME':
      return {
        ...state,
        time: action.payload
      }
    case 'UPDATE_PRICE' :
      return {
        ...state,
        price: action.payload
      }
    case 'UPDATE_DATE' :
      return {
        ...state,
        date: action.payload
      }
    case 'UPDATE_LOCATION' :
      return {
        ...state,
        location: action.payload
      }
    case 'UPDATE_SEATS' :
      return {
        ...state,
        seats: action.payload
      }
    case 'GET_PROVIDER' :
      return {
        ...state,
        provider: action.payload
      }
    default:
      return state
  }
}

export default providerReducer
