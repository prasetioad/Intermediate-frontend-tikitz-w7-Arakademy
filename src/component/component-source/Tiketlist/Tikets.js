
import React, { useState, useEffect, Component} from 'react'
import './Tikets.css'
import axios from 'axios'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'



class Tiketlist extends Component {
  
        state = {
            data: [],
            cp: 2,
            pp: 8,
            search:[]
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
                        search: res.data.data
                    })
                })
        }
        let search = document.getElementById('search')
        typeof this.props.location.search == ''?
        search.style.display = "block" :
        search.style.display = "none"
        console.log(this.props.location.search);
       
    }

    handleMove = () =>{
        this.state.data.map(item =>{
            console.log(item);
            return this.props.history.push(`/movie-detil/${item.id}` )
            } )
    }         

    handleSearch=(e)=>{
        this.state.data.map(item =>{
            let i;
            let target = document.getElementsByClassName('tik-container')
            for(i=0;i<target.length;i++){
                target[i].style.display = "none"
            }
            const search = document.getElementById('search')
            search.style.display = 'block'
            this.props.history.push(`/tikets/?search=${e.target.value}`)
        })
    }


    // nextPage =() =>{
    //     const page = this.props.location.search
    //     this.props.history.push(`/tikets?page=${page[6]/2*2+1}&per_Page=${this.state.pp}`)
    // }
    
    // backPage =() =>{
    //     const page = this.props.location.search
    //     this.props.history.push(`/tikets?page=${page[6]-1}&per_Page=${this.state.pp}`)
    // }


    render(){
        console.log( 'ini adalag data hasil get',this.state.data);
        const mystyle = {
            height:"100px"
          };

          console.log(this.state.data);
          console.log(typeof this.props.location.search)
    return(
        <div>
            <Navbar />
            <div className="t-search-objek">
            <form class="t-search" action="">
                <input type="text" placeholder="Search.." name="search" onChange={this.handleSearch}/>
            </form>
            </div>
            <div className='tik-container'>
            <div className="t-post" id="search">
                <div className="t-img-thumb">
                    <img src={this.state.search.image} alt="Dummy Blog Post" />
                </div>
                <div className="t-content">
                   <p>{this.state.search.name}</p>
                   <p>{this.state.search.genre}</p>
                   <button onClick={this.handleMove}>Detil</button>
                </div>
                
            </div>
            {
                this.state.data.map(data =>{
                     return( 
            <div className="t-post" id="common">
                <div className="t-img-thumb">
                    <img src={data.image} alt="Dummy Blog Post" />
                </div>
                <div className="t-content">
                   <h3>{data.name}</h3>
                   <p>{data.genre}</p>
                   <button onClick={()=>this.props.history.push(`/movie-detil/${data.id}`)}>Detil</button>
                </div>
                
            </div>
            
             )
            })
            }  
            </div>
            <div className="t-content-page-link">
                {this.props.location.search[6] == 1 ?
                     <div className="t-page-next">
                         <a href={`/tikets?page=${this.props.location.search[6]/2*2+1}&per_Page=${this.state.pp}`}>Next</a>
                    </div>:
                    <div>
                        <div className="t-page-back">
                        <a href={`/tikets?page=${this.props.location.search[6]/2*2-1}&per_Page=${this.state.pp}`}>Back</a>
                        </div>
                        <div className="t-page-next">
                        <a href={`/tikets?page=${this.props.location.search[6]/2*2+1}&per_Page=${this.state.pp}`}>Next</a>
                        </div>
                    </div>
               
                }
            </div>
            <Footer />
        </div>
    )
}
}

export default Tiketlist