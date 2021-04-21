import React, { useState, useEffect } from 'react'
// import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './configs/redux/store'

import Navbar from './component-source/Navbar/Navbar'
import Footer from './component-source/Footer/Footer'
import Register from './register/Register'
import Signin from './signin/Signin'
import Home from './Home/Home'
import Tiketlist from './component-source/Tiketlist/Tikets'
import Payment from './Payment/Payment'
import Profile from './Profile/Profile'
import Movie from './MovieDetil/Movie'
import Authorization from './authorization'
import Admin from './Admin/Admin'
import Order from './Order/Order'
import ForgotPassowrd from './forgot-password/ForgotPassword'
import TicketResult from './Ticket-result/Ticket-Result'
import authForgot from './component-source/page-auth-password/auth-forgot'
import PrivateRoute from '../PrivateRoutes/PrivateRoutes'
import { useHistory } from 'react-router'

function Index (props) {
  const [data, setData] = useState(0)
  const { user } = useSelector(state => state.user)
  const { transaction } = useSelector(state => state.transaction)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const url = process.env.REACT_APP_API_HOST
    if (typeof token === 'string') {
      axios.get(url + `/users/profile/${token}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
          console.log('get di index ' + res.data)
          dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
          })
          console.log('effek index berjalan, state terisi,', user)
        })
    }
    dispatch({
      type: 'GET_PRODUCT',
      payload: 'Rotii marii'
    })
    // alert(user)
    // if(token ){

    // }
  }, [])

  const signOutHandler = () => {
    localStorage.removeItem('token')
    history.push('/signin')
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/navbar' component={Navbar} signOutHandler={() => signOutHandler()} />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Register} />
          <Route path='/signin' component={Signin} />
          <PrivateRoute path='/payment' component={Payment} />
          <Route path='/profile' component={Profile} />
          <Route path='/movie-detil/:id' component={Movie} />
          <Route path='/tikets' component={Tiketlist} />
          <Route path='/auth/:id' component={Authorization} />
          <PrivateRoute path='/admin' component={Admin} />
          <PrivateRoute path='/order' component={Order} />
          <PrivateRoute path='/ticket-result' component={TicketResult} />
          <Route path='/forgot-password' component={ForgotPassowrd} />
          <Route path='/activation/forgot-password' component={authForgot} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Index
