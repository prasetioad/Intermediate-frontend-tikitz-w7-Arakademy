import React, { Component } from 'react'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import './Profile.css'
import axios from 'axios'
import TiketCard from './tiketCard'
import {connect} from 'react-redux'

export class Profile extends Component {
    state = {
        data: [],
        firstName: null,
        lastName: null,
        email: null,
        phone_number: null,
        password:null,
        image: null,
        dataTicket: [],
        movie:[]
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.get(process.env.REACT_APP_API_HOST+`/users/profile/${token}`)
        .then((res) =>{
            console.log('ini dari profil : ', res.data);
            this.setState({
                data: res.data.data,
                firstName: res.data.data.firstName,
                lastName: res.data.data.lastName,
                email: res.data.data.email,
                phone_number: res.data.data.phone_number,
                password: res.data.data.password,
                image: this.props.user.user.image
            })
        })
        axios.get(process.env.REACT_APP_API_HOST+`/transactions/${localStorage.getItem('userId')}`, {headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }})
        .then((res) =>{
            console.log(res.data, 'data tiket')
            this.setState({
                dataTicket: res.data.data
            })
        })
        if(!localStorage.getItem('token')){
            this.props.history.push('./signin')
        }
    }
    
    handleChange = (event) =>{
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
            ...this.state,
             [name]: value
            });
    }

    updateDataUser = () =>{
        console.log(this.state.image);
            const formData = new FormData()
            console.log(this.state.image);
            formData.append('firstName',this.state.firstName)
            formData.append('lastName',this.state.lastName)
            formData.append('email',this.state.email)
            formData.append('phone_number',this.state.phone_number,)
            formData.append('image',this.state.image)   
            formData.getAll('image' + ' getALl Image')
            axios.put(process.env.REACT_APP_API_HOST+`/users/${this.props.user.user.userid}`, formData)
            .then((res)=>{
                console.log(res);
            })
            .catch((err) =>{
                console.log(err.response);
            })
        
    }

    fileSelectedHandler = event =>{
       this.setState({
           ...this.state,
           image: event.target.files[0]
        });
        this.render(this.state.data.image)
    }



    deleteTicket = (id) =>{
        axios.delete(process.env.REACT_APP_API_HOST+`/tikets/${id}`)
        .then(res =>{
            alert(res + 'Sucess')
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    handlerLogOut=()=>{
        localStorage.removeItem('token');
        this.props.history.push('/signin')
    }

    render() {
        console.log(this.state.data,' dari profile');
      console.log(this.state.data.image);

function openRole(roleName) {
    var i;
    var x = document.getElementsByClassName("roleProfil");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(roleName).style.display = "block";  
    document.getElementById(roleName).style.color = "blue"; 
  } 

      const deleteRequest = () =>{
           const result = window.confirm("Want to delete?");
            if (result) {
                this.deleteTicket()
            }
      }

      console.log(this.state.image);
    //   console.log(this.state.image);
    //   console.log(this.state.email);
        return (
            <div className='root'>
                <Navbar logOut={this.handlerLogOut} />
                <div className='prof-body-container'>
                    <div className='prof-body-wrapper'>
                        <div className="prof-left">
                            <div className="prof-lef-up">
                                <div> 
                                    <p>INFO</p>
                                </div>
                                <div>
                                    <p>•••</p>
                                </div>
                            </div>
                            <div className="prof-left-pict">
                                <div className="prof-left-img">
                                    { this.state.data.image?
                                    <img src={this.state.data.image} alt="" />
                                    :
                                    <img src='https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg' alt="" />
                                    }
                                </div>
                                <form className="prof-update-image">
                                    <input type="file" name='image' onChange={this.fileSelectedHandler}/>
                                </form>
                                <p className='prof-left-name'>{ this.state.data.firstName +' '+ this.state.data.lastName}</p>
                                <p className='prof-left-member'>Moviegoers</p>
                            </div>
                            <div className="loyalty">
                                <p>Loyalty Points</p>
                                <div className="loyalty-card">
                                    <div className='prof-star'>
                                        <p>Moviegoers</p>
                                        <div>
                                            <img src="../source/eva_star-fill.png" alt=""/>
                                        </div>
                                    </div>
                                    <p className='star-bot'>320 <span> points</span></p>
                                </div>
                                <p>180 points become a master</p>
                                <div className="line-process-bar">
                                    <div className="process-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="prof-right">
                            <div className="prof-right-item">
                                <div className='prof-prof'>
                                    <button onClick={()=>openRole('account')} className="account">Account Settings</button>
                                </div>
                                <div  className='prof-order-history prof-prof'>
                                    <button onClick={()=>openRole('history')} className="history">Order History</button>
                                </div>
                            </div>
                            <div id="account"  className='roleProfil' style={{display: ""}}>
                                <div className="prof-right-item">
                                    <p>Details Information </p>
                                </div>
                                <div className="prof-right-form">
                                    <form onSubmit={this.updateDataUser}>
                                        <div className="prof-right-input">
                                            <div className='prof-name'>
                                                <p>Firs Name</p>
                                                <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                                            </div>
                                            <div className='prof-name'>
                                                <p>Last Name</p>
                                                <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                                            </div>
                                        </div>
                                        <div className="prof-right-input">
                                            <div className='prof-name'>
                                                <p>E-mail</p>
                                                <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                                            </div>
                                            <div className='prof-name'>
                                                <p>Phone Number</p>
                                                <input type="text" name="phone_number" onChange={this.handleChange} value={this.state.phone_number} />
                                            </div>
                                        </div>
                                        <div className="prof-right-privacy">
                                            <p>Account and Privacy</p>
                                        </div>
                                        <div className="prof-right-input prof-password">
                                            <div className='prof-right-name'>
                                                <p>New Password</p>
                                                <input type="password" name="password" placeholder='Confirm your password' />
                                            </div>
                                            <div className='prof-right-name'>
                                                <p>Confirm Password</p>
                                                <input type="password" name="password" placeholder='Write your password' />
                                            </div>
                                        </div>
                                        <button className='prof-btn'><p> Update changes</p></button>
                                    </form>
                                </div>
                            </div>
                            <div id="history" className='roleProfil' style={{display: "none"}}>
                               {this.state.dataTicket ? 
                                <div className='historyPageWrapper'>
                                    {
                               this.state.dataTicket.map((item)=>{return(
                               <TiketCard key={item.id} id={item.transaction} name={item.movie} date={item.date} deleteRequest={()=>{this.deleteTicket(item.id)}}/>
                               )}) }
                               </div>:
                               <div></div>}
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        
        )
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.user,
        product: state.product
    }
}

export default connect(mapStateToProps) (Profile);
