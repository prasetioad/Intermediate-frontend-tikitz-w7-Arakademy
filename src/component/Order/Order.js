import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import axios from 'axios'
import './Order.css'
import Seats from './seats.js'
import Swal from 'sweetalert2'

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [null],
            seats: [],
            seat:[null],
            ordered: [],
            number: 0
        };

      }

    
    checkOutHandler= (e)=>{
        e.preventDefault()
        if(this.props.provider.seats.length == 0){
            Swal.fire({
                icon: 'error',
                title: 'Hei..',
                text: 'Kamu mau duduk dimana kalo gak pilih bangku ? ><'
            })
        }else{
            this.props.history.push('/payment')
        }
    }

  componentDidMount(){
        let i;
        for(i=0; i< 14; i ++){
           this.state.seats.push(i)
        }
        axios.get(`${process.env.REACT_APP_API_HOST}/tikets/${this.props.movie.movie.id}`)
        .then((res)=>{
            console.log(res.data.data);
            this.setState({
                data: res.data.result,
                // seat: res.data.result[0].split('')x  x
            });
        })
        .catch((err)=>{
            console.log(err.response);
        })
        
    }
    bookHandler = (col, index)=>{
        const track = this.state.ordered.indexOf(col+index)
        if(track){
            this.state.ordered.splice(this.state.ordered.indexOf(col+index), 1)
        }else{
            this.state.ordered.push(col+index)
        }
    }
    render() {
        if(this.props.movie.movie){
            console.log('ok');
        }else{
            this.props.history.push('/')
        }
        console.log(this.state.data);
        return (
            <div>
                <Navbar />
                    <main className="ord-main">
                        <div className="ord-main-container">
                            <div className="ord-main-left">
                                <div className="ord-left-head">
                                    <p>Movie Selected</p>
                                    {this.props.movie.movie &&
                                    <div className="ord-choosen">
                                        <p>{this.props.movie.movie.name}</p>
                                        <p style={{cursor: 'pointer'}}><span onClick={()=>{this.props.history.push('/tikets?page=1&per_Page=8')}}>Change movie</span></p>
                                    </div>}
                                </div>
                                <div className="ord-left-bot">
                                    <p className="ord-lb1">Choose Your Seat</p>
                                    <div className="ord-map">
                                        <p className="ord-style-map-p">Screen</p>
                                        <div className="ord-spot">
                                            {this.state.data.map((data)=>{return(
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p>A</p>
                                                        {this.state.seats.map((item)=>{return(
                                                           <Seats index={item + 1} col='A' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('A',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>B</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <Seats index={index + 1} col='B' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('B',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>C</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <Seats index={index + 1} col='C' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('C',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>D</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <Seats index={index + 1} col='D' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('D',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>E</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <Seats index={index + 1} col='E' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('E',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>F</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <Seats index={index + 1} col='F' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('F',item)})}/>
                                                       )})}
                                                </div>
                                                <div className="ord-spot-left">
                                                <p>G</p>
                                                       {this.state.seats.map((index)=>{return(
                                                           <div>
                                                               <div>
                                                                    <Seats index={index + 1} col='G' booked={data.seat} price={this.props.movie.movie.price} priceProv={this.props.provider.price} clicked={((item)=>{this.bookHandler('G',item)})}/>
                                                               </div>
                                                               <div style={{textAlign: 'center'}}>
                                                                    <p>{index+ 1}</p>
                                                               </div>
                                                           </div>
                                                       )})}
                                                </div>
                                            </div>
                                            )})}
                                        </div>
                                        <div className="ord-map-bot">
                                            <p>Seating key</p>
                                            <div className="ord-key">
                                                <div>
                                                    <img src="./source/Rectangle 438.png" alt="" />
                                                </div>
                                                <p>Available</p>
                                                <div>
                                                    <img src="./source/Rectangle 469.png" alt="" />
                                                </div>
                                                <p>Selected</p>
                                                <div>
                                                    <img src="./source/Rectangle 443.png" alt="" />
                                                </div>
                                                <p>Sold</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ord-btn">
                                        <p><a href="" className="ord-change">Change your movie</a></p>
                                        <p onClick={this.checkOutHandler}><a href="" className="ord-checkout">Checkout now</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ord-main-right">
                                <p className="ord-lb1">Order Info</p>
                                {this.props.movie.movie && 
                            <div className="ord-order-info">
                                <div className="ord-style-ord-info">
                                    <img src={this.props.provider.provider.image} alt="" />
                                    <p className="ord-cinema">{this.props.provider.provider.name}</p>
                                </div>
                                <div className="ord-detil">
                                    <p className="ord-d1">Movie selected</p>
                                    <p className="ord-d2">{this.props.movie.movie.name}</p>
                                </div>
                                <div className="ord-detil">
                                    <p className="ord-d1">{this.props.provider.date}</p>
                                    <p className="ord-d2">{this.props.provider.time}</p>
                                </div>
                                <div className="ord-detil">
                                    <p className="ord-d1">One ticket price</p>
                                    <p className="ord-d2">Rp.{this.props.movie.movie.price}</p>
                                </div>
                                <div className="ord-detil">
                                    <p className="ord-d1">Seat choosed</p>
                                    <p className="ord-d2">{this.props.provider.seats}</p>
                                </div>
                                <hr className="ord-hr"/>
                                    <div className="ord-pay">
                                        <p className="ord-p1">Total Payment</p>
                                        <p className="ord-p2">Rp.{this.props.provider.price}</p>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </main>
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
    // return {
    //   updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
    //   updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})}
    // }
  })  

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Order))
