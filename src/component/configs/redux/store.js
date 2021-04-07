import {createStore, combineReducers} from 'redux'

const userState = {
    user: []
}

const userReducer = (state = userState, action) => {
    if(action.type === "GET_PROFILE"){
        return {
            ...state,
            user : action.payload
        }
    }
    else{
    return state
    }
}

const transactionState ={
    transaction: []
}
const transactionReducer = (state = transactionState, action) => {
    if(action.type === "CREAT_TRANSACTION"){
        return {
            ...state,
            transaction : action.payload
        }
    }
    else{
    return state
    }
}

const providerState ={
    provider: [],
    location: null,
    time: null,
    price: null,
    date: null,
    seats: []
}
const providerReducer = (state = providerState , action) => {
    
    if(action.type === "UPDATE_PROVIDER"){
        console.log(action);
        return {
            ...state,
            provider : action.payload
        }
    }else if(action.type === "UPDATE_TIME"){
        console.log(action);
        return{
            ...state,
            time: action.payload
        }
    }else if(action.type === "UPDATE_PRICE"){
        console.log(action);
        return{
            ...state,
            price: action.payload
        }
    }else if(action.type === "UPDATE_DATE"){
        console.log(action,'date berjalan');
        return{
            ...state,
            date: action.payload
        }
    }else if(action.type === "UPDATE_LOCATION"){
        console.log(action);
        return{
            ...state,
            location: action.payload
        }
    }else if(action.type === "UPDATE_SEATS"){
        console.log(providerState.seats);
        return{
            ...state,
            seats: providerState.seats + action.payload
        }
    }
    else{
    return state
    }
}

const movieState ={
    movie: []
}
const movieReducer = (state = movieState, action) => {
    if(action.type === "UPDATE_MOVIE"){
        console.log(action);
        return {
            ...state,
            movie : action.payload
        }
    }
    else{
    return state
    }
}


console.log('ini data dari store : ', userState.user);
const rootReducer =combineReducers({
    user : userReducer,
    transaction : transactionReducer,
    provider : providerReducer,
    movie : movieReducer
})
const store = createStore(rootReducer)
export default store