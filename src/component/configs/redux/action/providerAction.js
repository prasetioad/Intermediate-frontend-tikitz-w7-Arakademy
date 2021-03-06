import axios from 'axios'

export const updateProvider = (data) => (dispatch) => {
  dispatch({ type: 'UPDATE_PROVIDER', payload: data })
}

export const updateMovie = (data) => (dispatch) => {
  { dispatch({ type: 'UPDATE_MOVIE', payload: data }) }
}

export const updateDate = (data) => (dispatch) => {
  { dispatch({ type: 'UPDATE_DATE', payload: data }) }
}

export const updateLocation = (data) => (dispatch) => {
  { dispatch({ type: 'UPDATE_LOCATION', payload: data }) }
}

export const getprovider = () => (dispatch) => {
  axios.get(process.env.REACT_APP_API_HOST + '/provider')
    .then((res) => {
      { dispatch({ type: 'GET_PROVIDER', payload: res.data.result }) }
    })
}
export const updateSeats = (data) => (dispatch) => {
  { dispatch({ type: 'UPDATE_SEATS', payload: data }) }
}

export const deleteSeat = (data) => (dispatch) => {
  { dispatch({ type: 'DELETE_SEAT', payload: data }) }
}

export const updatePrice = (data) => (dispatch) => {
  { dispatch({ type: 'UPDATE_PRICE', payload: data }) }
}
