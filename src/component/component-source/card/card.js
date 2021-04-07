import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'



const Card = (props) => {
    // console.log(props);
    return(
        
        <Fragment>
            <div className="b-card-body"> 
                            <div className="b-card">
                                <a href="">
                                    <img src={props.img} alt=""/>
                                    <p className="b-title">{props.title}</p>
                                    <p className="b-desc">{props.genre}</p>
                                    <button className="b-cd-1" onClick={props.getDetil} >Details</button>
                                </a>
                            </div>
                     </div> 
        </Fragment>
    )
        
}

export default Card