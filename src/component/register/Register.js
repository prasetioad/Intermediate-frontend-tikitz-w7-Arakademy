import React, { Component } from 'react'
import './Register.css'
import {
    Link,
  } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    CreatNewUser = (e) =>{
        e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const url = process.env.REACT_APP_API_HOST+'/users/register';
        console.log(data);
            axios.post(url, data)
            .then((res) =>{
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Check your email!'
                })
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'warning',
                    title: 'Opps!',
                    text: err.response.data
                })
            })
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
                        <p className='p'>Lets build your account</p>
                        <p className="p2">To be a loyal moviegoer and access all of features, <br/>your details are required.</p>
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
                <main style={{width: '100%'}}>
                    <div className="a-main-left">
                        <div className="a-sign">
                            <p className="a-register">Fill your additional details</p>
                            {/* <p className="a-p">Sign in with your data that you entered during your registration</p>    */}
                        </div>
                        <form onSubmit={(e)=>{this.CreatNewUser(e)}} className="a-form">

                            <p>Email</p>
                            <input type="email" name="email" 
                            placeholder="Write your email" 
                            className="a-box" 
                            
                            onChange={this.handleInputChange}/>

                            <p className="a-pass">Password</p>
                            {/* <img src="../source/Vector.png" alt="" className="a-eye"/>
                            <img src="../source/Vector0.png" alt="" className="a-eye1"/> */}

                            <input type="password" 
                            name="password" 
                            placeholder="Write your password" 
                            className="a-box" 

                            onChange={this.handleInputChange}/>

                            <br/>
                            <p className='a-checkbox'><input type="checkbox" className='a-boxcheck'/>I agree to terms & conditions</p>
                            <button className="a-btn" onClick={(e)=>{this.CreatNewUser(e)}}>Register</button>
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

export default Register