import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const [admin, setAdmin] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_HOST+`/users/profile/${localStorage.getItem('token')}`)
    .then((res) =>{
        setAdmin(res.data.data)
    })
    .catch((err) =>{
        console.log(err);
    })
  }, [])

  

  return (

    <>
      <div className='b-card-body'>
        <div className='b-card'>
          {/* <a href=''> */}
          <div className="b-cardCard">
            <div className='b-cardCard-item'>
              <img src={props.img} alt='' />
            </div>
            <div className='b-cardCard-item'>
              <p className='b-title'>{props.title}</p>
            </div>
            <div className='b-cardCard-item'>
              <p className='b-desc'>{props.genre}</p>
            </div>
            {admin.role != 1 ?
            <div className='b-cardCard-item'>
              <button className='b-cd-1' onClick={props.getDetil}>Details</button>
            </div>:<>
            <div className='b-cardCard-item'>
              <button className='b-cd-1' onClick={props.getDetil}>Edit</button>
            </div>
            <div className='b-cardCard-item'>
              <p style={{padding: '2px 15px', background: 'darkred', color: 'white', margin: '0', textAlign: 'center'}} className='b-cd-1' onClick={props.removeMovie}>Remove</p>
            </div>
            </>}
          </div>
          {/* </a> */}
        </div>
      </div>
    </>
  )
}

export default Card
