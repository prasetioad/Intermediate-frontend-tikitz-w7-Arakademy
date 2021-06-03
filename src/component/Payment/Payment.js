import React, { Component } from 'react'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import './Payment.css'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

export class Payment extends Component {

    state = {
        data: [],
        dataUser: [],
        seats: [],
        isLoading: false
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.get(process.env.REACT_APP_API_HOST+`/users/profile/${token}`)
        .then((res) =>{
            this.setState({
                dataUser: res.data.data
            })
        })
        if(typeof this.props.provider.seats){
            let seats = this.props.provider.seats.join()
            this.setState({
                seats: seats.length
            })
        }
        if(this.props.provider.provLoc.name){
            return
        }else{
            this.props.history.push('/signin')
        }
    }

    paymentHandler = (e) =>{
        e.preventDefault()
        const url = process.env.REACT_APP_API_HOST;
        const data = {
            transaction_id: this.state.dataUser.userid,
            movie: this.props.movie.movie.name,
            provider: this.props.provider.provLoc.name,
            location: this.props.provider.provLoc.place,
            date: this.props.provider.date,
            time: this.props.provider.time,
            category:this.props.movie.movie.nameCategory,
            count: this.props.provider.seats.length + ' pieces',
            seats: this.props.provider.seats.join(),
            price: this.props.provider.price,
        }
        console.log(data);
        this.props.creatTransaction(data)
        axios.post(url+'/transactions', data)
        .then((res)=>{
            const seatBook = {seat: data.seats}
            axios.put(url+`/tikets/${this.props.movie.movie.id}`, seatBook, {headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }})
            .then((respon)=>{
                console.log(respon);
                this.props.history.push('/ticket-result')
            }).catch((err)=>{
                console.log(err.response);
            })
        })
        .catch((err)=>{
            console.log(err.response );
        })
    }
    
    
    render() {
        if(this.props.movie.movie.name){
            console.log('ok');
        }else{
            this.props.history.push('/')
        }
        return (
            <div className='main'>
                <Navbar />
                {this.props.provider &&
                     <div class="p-container">
                        <div class="p-flex">
                         <div class="p-left">
                        <p class="p-title">Payment Info</p>
                        <div class="p-left-content">
                            {/* {
                                this.state.data.map((item) =>{
                                    return( */}
                                <div class="p-date">
                                    <div class="p-detil">
                                    <p class="p-exp1">Date & time</p>
                                    <p class="p-exp2">{this.props.provider.date} at {this.props.provider.time}</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Movie title</p>
                                    <p class="p-exp2">{this.props.movie.movie.name}</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Cinema name</p>
                                    <p class="p-exp2">{this.props.provider.provLoc.name}</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Number of tickets</p>
                                    <p class="p-exp2">{this.props.provider.seats.length} pieces</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Total payment</p>
                                    <p class="p-exp2 total">Rp.{this.props.provider.price}</p>
                                    </div>
                                </div>
                                {/* )
                            })
                            } */}
                        <div className='choosePaymentWrapper'>
                            <p class="p-title">Choose a Payment Method</p>
                            <div class="p-display">
                            <div class="p-opt-wrapper">
                                <div class="p-pay-option">
                                <div class="p-opt">
                                    <a href=""><img src="../source/GPay.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/visa.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/gopay.png" alt="" /></a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/paypal.png" alt=""/>
                                    </a>
                                </div>
                                </div>
                                <div class="p-pay-option">
                                <div class="p-opt">
                                    <a href=""><img src="../source/Dana_logo.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/bca.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/bri.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/ovo.png" alt=""/>
                                    </a>
                                </div>
                                </div>
                                <div class="p-line">
                                <p>
                                    <hr />or <hr/>
                                </p>
                                </div>
                                <div class="p-cash">
                                <p>Pay via cash. <a href="">See how it work</a></p>
                                </div>
                            </div>
                            <div class="p-btn">
                                        {/* <!--FLEX--> */}
                                        <div>
                                            <p><a href="" class="p-change">Change your movie</a></p>
                                        </div>
                                        <div className="p-btn-btn">
                                            <button onClick={this.paymentHandler}>Checkout now</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="p-right">
                                <p class="p-title" >Personal Info</p>
                                <div>
                                <div class="p-right-content">
                                    <div class="p-box">
                                    <div class="p-content">
                                        {/* {this.state.dataUser.map((item) =>{
                                            return(
                                                 */}
                                        <form action="">
                                        <div class="p-form">
                                            <p>Full Name</p>
                                            <input type="text" placeholder="Jonas El Rodriguez" value={this.state.dataUser.firstName +' '+ this.state.dataUser.lastName}/>
                                        </div>
                                        <div class="p-form">
                                            <p>Email</p>
                                            <input type="email" placeholder="jonasrodri123@gmail.com" value={this.state.dataUser.email}/>
                                        </div>
                                        <div class="p-form">
                                            <p>Phone Number</p>
                                            <input type="tel" placeholder="6281445687121" value={this.state.dataUser.phone_number}/>
                                        </div>
                                        </form>
                                            {/* )
                                        })} */}

                                        <div className="notice">
                                            <p>Fill Your Data Correctly!</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        }
                        <Footer />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      transaction: state.transaction,
      provider: state.provider,
      movie: state.movie
    }
  }

  const mapDispatchToProps = dispatch => ({
    updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
    updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})},
    updateDate: (data) => {dispatch({type: 'UPDATE_DATE', payload: data})},
    updateLocation: (data) => {dispatch({type: 'UPDATE_LOCATION', payload: data})},
    updateSeats: (data) => {dispatch({type: 'UPDATE_SEATS', payload: data})},
    updatePrice: (data) => {dispatch({type: 'UPDATE_PRICE', payload: data})},
    creatTransaction: (data) => {dispatch({type: 'CREAT_TRANSACTION', payload: data})}
    // return {
    //   updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
    //   updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})}
    // }
  })  

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Payment))
