import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../Home/Home copy.css'

export class Footer extends Component {
  render () {
    return (
      <div>
        <footer>
          <div className='b-footer-container'>
            <div className='b-footer-left'>
              <img src='./source/Logo.png' alt='' />
              <p>Stop waiting in line. Buy tickets <br />
                conveniently, watch movies quietly.
              </p>
            </div>
            <div className='b-footer-right'>
              <div className='b-left-one sett'>
                <div>
                  <p className='b-foot-title'>Explore</p>
                </div>
                <div className='b-foot-mobile'>
                  <li>
                    <a href='' className='b-foot-right-item'>Cinemas</a>
                  </li>

                  <li>
                    <a href='' className='b-foot-right-item'>Movies List</a>
                  </li>
                  <li>
                    <a href='' className='b-foot-right-item'>My Tickets</a>
                  </li>
                  <li>
                    <a href='' className='b-foot-right-item'>Notification</a>
                  </li>
                </div>
              </div>
              <div className='b-left-two sett'>
                <div>
                  <p className='b-foot-title'>Our Sponsor</p>
                </div>
                <div className='b-foot-mobile'>
                  <img src='./source/ebu.png' className='b-ebu' alt='ebu.id' />
                  <img src='./source/Cine.png' className='b-cine' alt='CineOne21' />
                  <img src='./source/hiflix.png' className='b-hif' alt='hiflix' />
                </div>
              </div>
              <div className='b-left-three sett'>
                <div>
                  <p className='b-foot-title'>Follow us</p>
                </div>
                <div className='b-foot-mobile'>
                  <div className='b-foot-icon'>
                    <a href=''><img src='./source/fb.png' alt='Facebook' />Tickitz Cinema id
                    </a> <p>  </p>
                  </div>
                  <div className='b-foot-icon'>
                    <a href=''><img src='./source/ig luar.png' alt='Facebook' />tickitz.id
                    </a> <p> </p>
                  </div>
                  <div className='b-foot-icon'>
                    <a href=''><img src='./source/twit.png' alt='Facebook' />tickitz.id
                    </a> <p> </p>
                  </div>
                  <div className='b-foot-icon'>
                    <a href=''><img src='./source/ytluar.png' alt='Facebook' /> Tickitz Cinema id
                    </a> <p>  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='b-copyright'>© 2020 Tickitz. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
}

export default Footer
