import React, { Component } from 'react'
import Footer from './component-source/Footer/Footer'
import { Navbar } from './component-source/Navbar/Navbar'
import axios from 'axios'

export class Authorization extends Component {

    async componentDidMount (){
        const source = this.props.location.pathname
        console.log(source);
        const dataSource = source.split('/')
        console.log(dataSource);
        const data = {
            userid: dataSource[3],
            email: dataSource[4],
            password: dataSource[5]
        }
        console.log(data);
        const url = await process.env.REACT_APP_API_HOST+'/users/auth';
        console.log(data);
            axios.post(url, data)
            .then(
                alert('Berhasil!')
            )
            this.props.history.push('/signin')
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar />
                <h1>Mohon tunggu sebentar, Sedang di Alihkan....</h1>
                <Footer />
            </div>
        )
    }
}

export default Authorization
