import React, { Component } from 'react'
import './Forgot.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';


class ForgotPassowrd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    ActivateHandler = (e) =>{
        e.preventDefault()
        const data = {
            email: this.state.email
        }
        const url = process.env.REACT_APP_API_HOST+'/users/forgot';
        console.log(data);
            axios.post(url, data)
            .then(
                alert('Link aktivasi telah terkirim ke Email anda!')
            )
    }
    handleInputChange = (event) => { 
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
          [name]: value
        });
      }


    render(){
        
    //   const berhasil = () =>{
    //       alert(`Pendaftaran dengan Email ${this.state.email} berhasil!`)
    //   }

        return(
            <div className="a-container">
                <header className="header-head">
                <div className="a-image">
                    <div className="a-content">
                        <img src="../source/tickitz 1.png" alt=""/>
                        <p className='p'>Lets reset your password</p>
                        <p>To be able to use your account again, please
complete the following steps.</p>
                        <div className="forgot-steps">
                            <div className="forgot-step ">
                                <div >
                                    <p className="forgot-step-num">1</p>
                                </div>
                                <div className="forgot-step-word">
                                    <p>Fill your complete email</p>
                                </div>
                            </div>
                            <div className="forgot-step-line"></div>
                            <div className="forgot-step">
                                <div >
                                    <p className="forgot-step-num">2</p>
                                </div>
                                <div className="forgot-step-word">
                                    <p>Activate your email</p>
                                </div>
                            </div>
                            <div className="forgot-step-line"></div>
                            <div className="forgot-step">
                                <div >
                                    <p className="forgot-step-num">3</p>
                                </div>
                                <div className="forgot-step-word">
                                    <p>Enter your new password</p>
                                </div>
                            </div>
                            <div className="forgot-step-line"></div>
                            <div className="forgot-step">
                                <div >
                                    <p className="forgot-step-num">4</p>
                                </div>
                                <div className="forgot-step-word">
                                    <p>Done</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </header>
                <main>
                    <div className="a-main-left">
                        <div className="a-sign">
                            <p className="a-register">Fill your complete email</p>
                            <p className="a-p">we'll send a link to your email shortly</p>   
                        </div>
                        <form onSubmit={this.ActivateHandler} className="a-form">

                            <p>Email</p>
                            <input type="email" name="email" 
                            placeholder={this.state.email} 
                            className="a-box" 
                            
                            onChange={this.handleInputChange}/>
                            <button className="a-btn">Activate now</button>
                        </form>
                        <p className="a-reset">Do you already have an account? <Link to="/signin">Log in</Link> </p>
                        <div className="a-line">
                            <p ><hr/> Or <hr/> </p>
                        </div>
            
                        <footer className='a-footer'>
                            <div className="a-card">
                                <a href="# ">
                                    <img src="../source/google_icon_131222.png" alt="" className="a-pl" />
                                    <p className="a-pl"> Google</p>
                                </a>
                            </div>
                            <div className="a-card">
                                <a href="#">
                                    <img src="../source/VectorFB.png" alt="" className="a-pl" />
                                    <p className="a-pl">Facebook</p>
                                </a>
                            </div>
                        </footer>

                    </div>
                </main>


            </div>
        )
    }
}

export default ForgotPassowrd