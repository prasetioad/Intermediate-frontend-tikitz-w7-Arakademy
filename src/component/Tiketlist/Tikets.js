
import React, { useState, useEffect, Component} from 'react'
import './Tikets.css'
import axios from 'axios'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'



class Tiketlist extends Component {
  
        state = {
            data: []
        }

    componentDidMount() {
        const name = this.props.location.search
        console.log(name);
        if (name == '') {
            axios.get(process.env.REACT_APP_API_HOST+`/tikets`)
                .then((res) => {
                    console.log('data tiket',res.data.data);
                    this.setState({
                        data: res.data.data
                    })
                })
        } else {
            const name = this.props.location.search
            axios.get(process.env.REACT_APP_API_HOST+`/tikets/${name}`)
                .then((res) => {
                    console.log(res.data.data);
                    this.setState({
                        data: res.data.data
                    })
                })
        }
    }

    handleMove = () =>{
        this.state.data.map(item =>{
            console.log(item);
            return this.props.history.push(`/movie-detil/${item}` )
            } )
    }         




    render(){
        console.log( 'ini adalag data hasil get',this.state.data);
        const mystyle = {
            height:"100px"
          };

          console.log('ini adalah data',this.state.data);
    return(
        <div>
            <Navbar />
            <div className='tik-container'>
            {
                this.state.data.map(data =>{
                     return( 
            <div className="t-post">
                <div className="t-img-thumb">
                    <img src={data.image} alt="Image" style={{ height: '200', width: '100px', padding: '0', margin: '0' }}/>
                </div>
                <div className="t-content">
                   <h3>{data.name}</h3>
                   <button onClick={this.handleMove}>Detil</button>
                </div>
                
            </div>
            
             )
            })
            }  
            </div>
            <Footer />
        </div>
    )
}
}

export default Tiketlist