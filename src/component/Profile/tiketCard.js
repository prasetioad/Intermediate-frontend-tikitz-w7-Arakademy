import React, { Component } from 'react'

class TiketCard extends Component {
  render () {
    console.log(this.props.name, 'ini props card')
    return (
      <div className='history-card'>
        <div className='history-card-top'>
          <div className='ticketName'>
            <p>{this.props.date}</p>
            <h3>{this.props.name}</h3>
          </div>
          <div className='author'>
            <img src='../source/Cine.png' alt='' />
          </div>
        </div>
        <div className='history-card-bot'>
          <div className='history-card-btn'>
            <div>
              <p>Ticket in active</p>
            </div>
            <button onClick={this.props.deleteRequest}>Delete</button>
          </div>
          <div className='history-card-detil'>
            <button>Show Detil</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TiketCard
