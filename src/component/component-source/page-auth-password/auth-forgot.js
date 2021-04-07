import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import './auth-forgot.css'
import axios from 'axios'

export class authForgot extends Component {

    state={
        userid:'',
        email: '',
        password: ''
    }


         componentDidMount (){
        const source = this.props.location.pathname
        console.log(source);
        const dataSource = source.split('/')
        console.log(dataSource);
        this.setState ({
            userid: dataSource[4],
            email: dataSource[5],
        })
    }

    activationHandler =  ()=>{
        const {userid, email, password} = this.state
        const data = {email, password}
        console.log(data);
        const url = process.env.REACT_APP_API_HOST+`/users/forgot/${userid}`;
        console.log(data);
            axios.put(url, data)
            .then((res) =>{
                alert('berhasil di perbarui')
                this.props.history.push('/signin')
            })
    }

    handlePasswordChange = (event) => { 
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
          [name]: value
        });
      }



    render() {
        console.log(this.state.password);
        return (
            <div>
                <Navbar />
                    <div className="forgot-face">
                    <form onSubmit={this.activationHandler}>
                        <p>New Password</p>
                        <input type="text" name="password"  onChange={this.handlePasswordChange}/>
                        <p>Retype your password</p>
                        <input type="text" name="password"  onChange={this.handlePasswordChange}/><br/>
                        <button>Activate</button>
                    </form>
                    </div>
                <Footer />

            </div>
        )
    }
}

export default authForgot
