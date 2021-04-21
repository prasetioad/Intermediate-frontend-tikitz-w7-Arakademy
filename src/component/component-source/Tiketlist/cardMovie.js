import React from 'react'

const cardMovie = (props) => {
  return (
    <div>
      <div className='b-card'>
        <a href=''>
          <img src='../source/Rectangle140.png' alt='' />
          <p className='b-title'>{props.title}</p>
          <p className='b-desc'>{props.date}</p>
          <a href='' className='b-cd-1'>Details</a>
        </a>
      </div>
    </div>
  )
}

export default cardMovie
