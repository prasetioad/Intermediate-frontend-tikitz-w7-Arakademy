const initialState = {
  provider: [],
  time: null,
  price: 0,
  date: null,
  location: null,
  provLoc: 0,
  seats: []
}

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROVIDER' :
      return {
        ...state,
        provLoc: action.payload
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
      console.log(state.seats.indexOf(action.payload));
      return {
        ...state,
        seats: [...state.seats, action.payload]
      }
    case 'GET_PROVIDER' :
      return {
        ...state,
        provider: action.payload
      }
      case 'DELETE_SEAT' :
        const splice = [...state.seats]
        splice.splice(state.seats.indexOf(action.payload), 1)
      return {
        ...state,
        seats: splice
      }
    default:
      return state
  }
}

export default providerReducer
