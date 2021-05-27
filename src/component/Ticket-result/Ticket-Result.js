import React, { Component } from 'react'
import './Ticket-Result.css'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

export class TicketResult extends Component {
  render () {
    console.log(this.props.transaction)
    return (
      <div className='res-main'>
        <Navbar />
        <main>
          <div className='res-container'>
            <div className='res-title'>
              <p>Proof of Payment</p>
            </div>
            <div className='res-ticket-container'>
              <div className="res-ticket-mobile">
                <div className="res-ticket-wrapper-top">
                  <div className="res-ticket-mobile-item">
                    <img src="./source/bx_bxs-check-circle.png" alt="image" />
                  </div>
                  <div className="res-ticket-thankyou">
                    <span>Thank You!</span>
                    <p>Your transaction was successful</p>
                  </div>
                  <div className="res-ticket-code">
                    <div className="itemQR">
                      <img src="./source/Bitmap Copy 9.png" alt="bitmap" />
                    </div>
                  </div>
                </div>
                <div className="res-ticket-wrapper-bot">
                  <div className="res-ticket-wrapper-bot-left">
                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Movie</span>
                        <p>{this.props.transaction.transaction.movie}</p>
                      </div>
                    </div>
                    
                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Date</span>
                        <p>{this.props.transaction.transaction.date}</p>
                      </div>
                    </div>

                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Count</span>
                        <p>{this.props.transaction.transaction.count}</p>
                      </div>
                    </div>
                  </div>
                  <div className="res-ticket-wrapper-bot-right">
                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Category</span>
                        <p>{this.props.transaction.transaction.category}</p>
                      </div>
                    </div>
                    
                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Time</span>
                        <p>{this.props.transaction.transaction.time}</p>
                      </div>
                    </div>

                    <div className="res-ticket-desc">
                      <div className="res-ticket-desc-item">
                        <span>Seats</span>
                        <p>{this.props.transaction.transaction.seats}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="res-ticket-desc-total">
                      <div className="res-ticket-desc-item">
                        <p>Total</p>
                      </div>
                      <div className="res-ticket-desc-item">
                        <p>{this.props.transaction.transaction.price}</p>
                      </div>
                </div>
              </div>
              <div className='res-ticket-left'>
                <div className='res-ticket-head'>
                  <div className='rth-title'>
                    <img src='./source/tikitz-2.png' alt='' />
                  </div>
                  <div className='rth-des rth-title'>
                    <p>Admit One</p>
                  </div>
                </div>
                <div className='rth-body'>
                  <div className='rth-body-head'>
                    <p className='res-p-name'>Movie</p>
                    <span className='res-p-item'>{this.props.transaction.transaction.movie}</span>
                  </div>
                  <div className='rth-body-content'>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Date</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.date}</p>
                    </div>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Time</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.time}</p>
                    </div>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Category</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.category}</p>
                    </div>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Count</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.count}</p>
                    </div>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Seats</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.seats}</p>
                    </div>
                    <div className='rth-content-date'>
                      <p className='res-p-name'>Price</p>
                      <p className='res-p-item'>{this.props.transaction.transaction.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='res-ticket-right'>
                <div className='res-ticket-right-header'>
                  <div className='res-ticket-right-header-item'>
                    <img src='./source/tikitz-2.png' alt='' />
                  </div>
                </div>
                <div>
                  <div className=' res-ticket-right-body'>
                    <div className='right-body-item-container'>
                      <div className='right-body-item right-body-item-bot-content'>
                        <p className='res-p-name'>Movie</p>
                        <p className='res-p-item'>{this.props.transaction.transaction.movie}</p>
                      </div>
                      <div className='right-body-item-bot'>
                        <div className='right-body-item-bot-content '>
                          <p className='res-p-name'>Date</p>
                          <p className='res-p-item'>{this.props.transaction.transaction.date}</p>
                        </div>
                        <div className='right-body-item-bot-content res-item-bot-content-time '>
                          <p className='res-p-name'>Time</p>
                          <p className='res-p-item'>{this.props.transaction.transaction.time}</p>
                        </div>
                      </div>
                      <div className='right-body-item-bot'>
                        <div className='right-body-item-bot-content '>
                          <p className='res-p-name'>Count</p>
                          <p className='res-p-item'>{this.props.transaction.transaction.count}</p>
                        </div>
                        <div className='right-body-item-bot-content res-item-bot-content-seats'>
                          <p className='res-p-name'>Seats</p>
                          <p className='res-p-item'>{this.props.transaction.transaction.seats}</p>
                        </div>
                      </div>
                      <div className='right-body-item-bot-content  res-item-bot-content-category'>
                        <p className='res-p-name'>Category</p>
                        <p className='res-p-item'>{this.props.transaction.transaction.category}</p>
                      </div>
                    </div>
                    <div className='res-barcode'>
                      <img src='./source/Bitmap Copy 7.png' alt='' />
                      <img src='./source/Bitmap Copy 8.png' alt='' />
                      <img src='./source/Bitmap Copy 8.png' alt='' />
                      <img src='./source/Bitmap Copy 10.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='res-button'>
              <a href='#'><button className='glyphicon glyphicon-download'>Download</button></a>
              <button className='glyphicon glyphicon-print' onClick={window.print}>Print</button>
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

export default connect(mapStateToProps)(withRouter(TicketResult))
