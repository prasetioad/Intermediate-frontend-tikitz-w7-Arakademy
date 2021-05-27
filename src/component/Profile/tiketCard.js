import React, { Component } from 'react'

function TiketCard ({id, name ,date, deleteRequest}) {
  
  
    console.log(name, 'ini props card')
    return (
      <div className='history-card'>
        <div className='history-card-top'>
          <div className='ticketName'>
            <p>{date}</p>
            <h3>{name}</h3>
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
            <button onClick={deleteRequest}>Delete</button>
          </div>
          <div className='history-card-detil'>
            <button>Show Detil</button>
          </div>
        </div>
      </div>
    )
  
}

export default TiketCard
