import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import './Order.css'

export class Order extends Component {

    checkOutHandler= (e)=>{
        e.preventDefault()
        this.props.history.push('/payment')
    }

    seatsHandleA = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleB = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleC = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleD = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleE = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleF = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }

    seatsHandleG = (e)=>{
        this.props.updateSeats(e.target.alt +','+ this.props.provider.seats)
        this.props.updatePrice(this.props.movie.movie.price + this.props.provider.price)
    }
    render() {
        console.log(this.props.movie);
        console.log(this.props.provider);
        return (
            <div>
                <Navbar />
                    <main className="ord-main">
                        <div className="ord-main-container">
                            <div className="ord-main-left">
                                <div className="ord-left-head">
                                    <p>Movie Selected</p>
                                    <div className="ord-choosen">
                                        <p>{this.props.movie.movie.name}</p>
                                        <p><a href="">Change movie</a></p>
                                    </div>
                                </div>
                                <div className="ord-left-bot">
                                    <p className="ord-lb1">Choose Your Seat</p>
                                    <div className="ord-map">
                                        <p className="ord-style-map-p">Screen</p>
                                        <div className="ord-spot">

                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">A</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A1" onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A2"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A3"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A4"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A5"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="A6"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A7"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A8"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A9"  onClick={this.seatsHandleA}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A10" onClick={this.seatsHandleA} />
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A11" onClick={this.seatsHandleA} />
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A12" onClick={this.seatsHandleA} />
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="A13" onClick={this.seatsHandleA} />
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="A14" onClick={this.seatsHandleA} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">B</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B1" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="B2" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="B3" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B4" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B5" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B6" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B7" onClick={this.seatsHandleB}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B8" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B9" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B10" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B11" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B12" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B13" onClick={this.seatsHandleB}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="B14" onClick={this.seatsHandleB}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">C</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C1" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C2" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C3" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 469.png" alt="C4" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 469.png" alt="C5" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 469.png" alt="C6" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C7" onClick={this.seatsHandleC}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C8" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="C9" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C10" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C11" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C12" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="C13" onClick={this.seatsHandleC}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="C14" onClick={this.seatsHandleC}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">D</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D1" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="D2" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D3" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D4" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D5" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D6" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D7" onClick={this.seatsHandleD}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D8" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="D9" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D10" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D11" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D12" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="D13" onClick={this.seatsHandleD}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="D14" onClick={this.seatsHandleD}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">E</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E1" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E2" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E3" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="E4" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E5" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E6" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E7" onClick={this.seatsHandleE}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E8" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E9" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E10" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E11" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E12" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E13" onClick={this.seatsHandleE}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="E14" onClick={this.seatsHandleE}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">F</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F1" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F2" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F3" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F4" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F5" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F6" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F7" onClick={this.seatsHandleF}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F8" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F9" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F10" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F11" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="F12" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F13" onClick={this.seatsHandleF}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="F14" onClick={this.seatsHandleF}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-style-abjad">G</p>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G1" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G2" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G3" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G4" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G5" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 443.png" alt="G6" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G7" onClick={this.seatsHandleG}/>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G8" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G9" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G10" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G11" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G12" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G13" onClick={this.seatsHandleG}/>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <img src="./source/Rectangle 438.png" alt="G14" onClick={this.seatsHandleG}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ord-spoting">
                                                <div className="ord-spot-left">
                                                    <p className="ord-spot-left-a">A</p>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p" p>1</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p" p>2</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p" p>3</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p" p>4</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p" p>5</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="order-icon-book-p" p>6</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="order-icon-book-p" p>7</p>
                                                    </div>
                                                </div>
                                                <div className="ord-spot-right">
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">8</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">9</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">10</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">11</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">12</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">13</p>
                                                    </div>
                                                    <div className="ord-icon-book">
                                                        <p className="ord-icon-book-p-2">14</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ord-map-bot">
                                            <p>Seating key</p>
                                            <div className="ord-key">
                                                <p>Available</p>
                                                <div>
                                                    <img src="./source/Rectangle 469.png" alt="" />
                                                </div>
                                                <p>Selected</p>
                                                <div className="ord-key-img">
                                                    <img src="./source/Rectangle 518.png" alt=""  />
                                                </div>
                                                <p>Love nest</p>
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
                                </div>
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
