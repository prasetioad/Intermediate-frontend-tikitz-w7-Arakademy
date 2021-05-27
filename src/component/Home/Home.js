import React, { Component } from 'react'
import './Home copy.css'
// import Rect35 from '../source/Rectangle35.png'
import Navbar from '../component-source/Navbar/Navbar'
import Footer from '../component-source/Footer/Footer'
import axios from 'axios'
import Card from '../component-source/card/card'
import Swal from 'sweetalert2'

export class Home extends Component {
        constructor(props){
            super(props);
            this.state = {
                movie:[]
        }
    }
    

    componentDidMount(){
        axios.get(process.env.REACT_APP_API_HOST+'/tikets')
        .then((res) =>{
            console.log(res.data);
            this.setState({
                movie: res.data.data
            })
            // this.state.movie.map(movie => {
            //     return movie;
            // })
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }

    getMovieDetil =(id)=>{
        this.props.history.push(`/movie-detil/${id}`)
    }
    removeMovie=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                axios.delete(process.env.REACT_APP_API_HOST+`/tikets/${id}`, {headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }})
                .then((res)=>{
                    Swal.fire({
                        title: 'success',
                        icon: 'success'
                    })
                })
                .catch((err)=>{
                    console.log(err);
                    alert('cek')
                })
            }
        })
        axios.get(process.env.REACT_APP_API_HOST+'/tikets')
        .then((res) =>{
            console.log(res.data);
            this.setState({
                movie: res.data.data
            })
            // this.state.movie.map(movie => {
            //     return movie;
            // })
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }
    handleViewAll = () =>{
        this.props.history.push('/tikets?page=1&per_Page=8')
    }
    
    render() {
        
        console.log(window.location.href);  
        return (
            <div>
                <Navbar  />
                  <header>
                    <div className="b-head-container">
                        <div className="b-head-left grid-item">
                         <p>Nearest Cinema, Newest Movie, <br/> <span>Find out now!</span> </p> 
                         </div>
                        <div className="b-head-right grid-item">
                            <a href="http://"  target="_blank" rel="noopener noreferrer"> 
                                <img src="../source/Rectangle35.png" className="b-img1" alt=""/>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"> 
                                <img src="../source/Rectangle34.png" className="b-img2" alt=""/>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"> 
                                <img src="../source/Rectangle33.png" className="b-img3" alt=""/>
                            </a>
                        </div>
                    </div>
                 </header>

                 <main>
                    <div className="b-main-container">
                        <div className="b-main-left">
                            <div className="b-left">
                                <a href="http://" target="_blank" rel="noopener noreferrer">Now Showing</a>
                            </div>
                            <div className="b-right">
                                <a href="http://"  rel="noopener noreferrer" onClick={this.handleViewAll}>View all</a>
                            </div>
                        </div>

                        <div className="b-main-right">
                        {
                             this.state.movie.map(movie =>{
                                 return <Card key={movie.id} 
                                 title={movie.name} 
                                 genre={movie.genre}
                                 img={movie.image}
                                 getDetil={() => this.getMovieDetil( movie.id)}
                                 />
                             })
                         }
                        </div>
                    </div>
                </main>

                <div className="b-month">
                     <div className="b-month-container">
                        <div className="b-upcoming">{/*GRID */}
                            <div className="b-upcoming-left">
                                <p>Upcoming Movies</p>
                            </div>
                            <div className="b-upcoming-right">
                                <a href="" onClick={this.handleViewAll}><p>view all</p></a>
                            </div>
                        </div>
                        <div className="b-month-body ">
                            {/* <div className='b-mont-item'> */}
                                <a href="" >Januari</a>
                                <a href="" >Februari</a>
                                <a href="" >Maret</a>
                                <a href="" >April</a>
                                <a href="" >Mei</a>
                                <a href="" >Juni</a>
                                <a href="" >Juli</a>
                                <a href="" >Agustus</a>
                                <a href="" >September</a>
                                <a href="" >Oktober</a>
                                <a href="" >Nopember</a>
                                <a href="" >Desember</a>
                            {/* </div> */}
                        </div>
                        <div className="b-card-container">
                         {
                             this.state.movie.map(movie =>{
                                 return <Card key={movie.id} 
                                 title={movie.name} 
                                 genre={movie.genre}
                                 img={movie.image}
                                 getDetil={() => this.getMovieDetil(movie.id)}
                                 removeMovie={()=>{ this.removeMovie(movie.id)}}
                                 />
                             })
                         }
                   </div>
                </div>
              </div>
             
              <div className="b-foot">
                <div className="b-foot-container">
                    <div className="b-foot-head">
                        <p>Be the vanguard of the <br/> <span>Moviegoers</span></p>
                    </div>
                    <div className="b-foot-body">
                        <form action="#">
                            <input type="email" placeholder="Type your email"/>
                            <button>Join now</button>
                        </form>
                    </div>
                    <div className="b-foot-foot">
                        <p>By joining you as a Tickitz member,<br/>
                            we will always send you the latest updates via email .</p>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
