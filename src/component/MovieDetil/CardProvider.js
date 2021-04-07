import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import store from '../configs/redux/store'
import {Provider} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'

import './Movie.css'



function CardProvider (props) {
    
//   const [data, setData] = useState(0);
  const {user} = useSelector( state => state.user)
  const {transaction}= useSelector( state => state.transaction)
  const {provider, time, price} = useSelector(state => state.provider)
  const dispatch = useDispatch()


    const onClickHandler =(e)=>{
        dispatch({
            type: "UPDATE_TIME",
            payload: e.target.innerHTML
        })
    }

    return (
        <div>
            
                <div className="m-card on" >
                    <div className="m-card-head">
                        <img src="./source/ebu.png" alt="ebu.id" />
                        <div className="m-profile">
                            <p className="m-instansi">{props.name}</p>
                            <p>{props.place}</p>
                        </div>
                    </div>
                    <div className="m-time row">
                        <p className="col-3" name='teks1' onClick={onClickHandler}>{props.time1}</p>
                        <p className="col-3" name='teks2' onClick={onClickHandler}>{props.time2}</p>
                        <p className="col-3" name='teks3' onClick={onClickHandler}>{props.time3}</p>
                        <p className="col-3" name='teks4' onClick={onClickHandler}>{props.time4}</p>
                        <p className="col-3" name='teks5' onClick={onClickHandler}>{props.time5}</p>
                        <p className="col-3" name='teks6' onClick={onClickHandler}>{props.time6}</p>
                        <p className="col-3" name='teks7' onClick={onClickHandler}>{props.time7}</p>
                    </div> 
                    <div className="m-price">
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                    </div>
                    <div className="m-main-action">
                        <div className="m-btn">
                            <button onClick={props.handleBook}><p>Book Now</p></button>
                        </div>
                        <div className="m-add">
                            <a href="#"  ><p> Add to cart</p></a>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default CardProvider