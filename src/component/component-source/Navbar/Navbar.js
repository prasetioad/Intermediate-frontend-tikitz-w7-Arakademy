import React, { Component } from 'react'
import './Navbar.css'
import axios from 'axios'
import { withRouter} from 'react-router-dom'
import {
    Link,
  } from "react-router-dom";
 
export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            isLoggedIn: '',
            find: false,
            foundData:[],
            onOf: false
        }
    } 
    componentDidMount(){
        const url = process.env.REACT_APP_API_HOST
        const token = localStorage.getItem('token');
        if(typeof token == 'string'){
            this.setState({
                isLoggedIn: true
            })
            if(this.state.data.length == 0){
            axios.get(url +`/users/profile/${token}`)
            .then((res) =>{
                localStorage.setItem('userId', res.data.data.userid)
                this.setState({
                    data: res.data.data
                })
            })
            .catch((err) =>{
                if(err){
                // this.props.history.push('/signin')
                window.localStorage.removeItem("token")
                console.log(token)
                // alert('token salah')
                }
            })
         }
    }
        // this.setState({
        //     data: this.props.user.user
        // })
        }

    findMovie=(e)=>{
        axios.get(process.env.REACT_APP_API_HOST+'/tikets?search='+ e.target.value)
        .then((res)=>{
            this.setState({
                foundData: res.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }
    SearchTikets = (e) =>{
        e.preventDefault()
       this.props.history.push(`/tikets?search=${this.state.search}`)
    }


    handleInputChange = (event) => { 
        const target = event.target;
        const value = target.value
        const name = target.name;
        // console.log('handle input change berjalan' + value);
        this.setState({
          [name]: value
        });
      }

      handleFind=()=>{
          if(this.state.find == false){
              this.setState({
                  find: true
              })
          }else{
              this.setState({
                  find: false
              })
          }
      }

      handleLogout = () => {
          window.localStorage.removeItem("token")
          window.localStorage.removeItem("userId")
          window.localStorage.removeItem("role")
          if(this.props.history){
          this.props.history.push('/signin')
          }
      }

      handleProfile = () => {
        this.props.history.push('/profile')
      }

      handleHome = () =>{
        this.props.history.push('/tikets?page=1&per_Page=8')
      }

      handleTikets = () =>{
        this.props.history.push('/tikets?page=1&per_Page=8')
    }

    handleBuy = ()=>{
        this.props.history.push('/tikets?page=1&per_Page=8')
    }
    
    active =()=>{
        const target = document.getElementById('bardProfil')
        if(this.state.onOf == true){
            this.setState({
                onOf: false
            })
        }else{
            this.setState({
                ...this.state,
                onOf: true
            })
        }
    }

    render() {
        console.log(this.state.data.image);
        function burger () {
        const burger = document.querySelector('.n-burger input');
        const nav = document.querySelector('.n-nav1 ul');
  
        burger.addEventListener('click', function() {
          nav.classList.toggle('slide')
        });
    }

    
        // console.log('navbar dari state: ',  this.state.data);
       console.log(this.state.onOf);
        console.log(this.props);
        return (
            <div>
                
                <nav className="n-nav-container" >
                    <div className="n-wrapper" >
                        <div className="n-logo">
                        <a className="n- " href="/" onClick={this.handleHome}> <img src="./source/Logo.png" alt="" /> </a>
                        <div className="n-nav1">
                        <ul className="">
                            <li className="n-off">
                                <form onSubmit={(e)=>this.SearchTikets(e)}  >
                                    <input type="text" className="glyphicon glyphicon-search" name="search"  placeholder="Search..." onChange={(e)=>this.handleInputChange(e)}/>
                                    <button type='submit'>Cari</button>
                                </form>
                            </li>
                            <li className="n-off">
                            <li className="nav-item dropdown .n-off">
                                <a className="nav-link dropdown-toggle .n-off" href="./home"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Home
                                </a>
                                <ul className="dropdown-menu .n-off" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item .n-off" href="../Ready Deploy/index.html.html">Home</a></li>
                                <li><a className="dropdown-item" href="../Ready Deploy/movie.html">Cinemas</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="./order.html">Order</a></li>
                                </ul>
                            </li>
                            </li>
                            <li>
                            <a href=""  rel="noopener noreferrer" onClick={this.handleHome}>Movies</a>
                            </li>
                            <li>
                            <a href=""  rel="noopener noreferrer" onClick={this.handleTikets}>Cinemas</a>
                            </li>
                            <li>
                            <a href="" rel="noopener noreferrer" onClick={this.handleBuy}>Buy Tickets</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                        <div className="n-nav" >
                        <li className="nav-item dropdown .n-nav2 " style={{display: "flex"}}>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Location
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Purwokerto</a></li>
                            <li><a className="dropdown-item" href="#">Cilacap</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Bandung</a></li>
                            </ul>
                        </li>
                        {this.state.find == false ? 
                        <i className="glyphicon glyphicon-search" onClick={()=> this.handleFind()}><a href="#"></a></i> :
                        <div>
                        <form class="d-flex">
                            <input class="form-control me-10 w-1 glyphicon glyphicon-remove" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> this.findMovie(e)}/>
                            <button class="btn btn-outline-secondary" type="submit" onClick={()=> this.handleFind()}>Cancel</button>
                        </form>
                        <div className="foundData">
                            <div className="foundDataWidth">
                                {this.state.foundData && this.state.foundData.map((item,index)=>{return(
                                <div className="foundDataItem" style={{width: '100%', background:'whitesmoke', border:'1px solid white', zIndex: '4', cursor: 'pointer'}} onClick={()=> this.props.history.push(`/movie-detil/${item.id}`)}>
                                    <div className="foundDataTitle" style={{fontWeight: 'bold'}} key={index}>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="foundDataGenre" style={{fontSize: '12px'}}>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                )})}
                            </div>
                        </div>
                        </div>
                        }
                        {this.state.isLoggedIn == false ?
                       <> <div className="n-btn">
                        <Link to="/signup"><a href="" target="_blank" rel="noopener noreferrer">Sign Up</a></Link>
                        </div> </> :<>
                        <div className="n-profil-icon" onClick={() => this.active()}>
                            {this.state.data.image ? 
                            <img src={this.state.data.image} alt=""/>
                            :
                            <img src='https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg' alt=""/>
                            }
                        </div>
                        {this.state.onOf == true && 
                            <div className="bardProfil" id='bardProfil' style={{display: 'block', position: 'absolute', background: 'white', border: '1px solid grey', right: '50px', top: '100px'}}>
                            <ul className="" style={{listStyle: 'none', textAlign: 'center'}}>
                                {localStorage.getItem('role') == 1 && <li><button style={{background: 'none', border: 'none', padding:'5px'}} ><Link to="/admin"><a href="" target="_blank" rel="noopener noreferrer">Setting</a></Link></button></li>}
                                <li><button style={{background: 'none', border: 'none', padding:'5px'}} ><Link to="/profile"><a href="" target="_blank" rel="noopener noreferrer">Profile</a></Link></button></li>
                                <li><button style={{background: 'none', border: 'none', padding:'5px'}} onClick={()=>{this.handleLogout()}}><Link to="/signin"><a href="" target="_blank" rel="noopener noreferrer">Logout</a></Link></button></li>
                            </ul>
                        </div>
                         }
                        </>}
                        </div>
                        <div className="n-burger">
                        <input type="checkbox" className="n-off" onClick={() => burger()}/>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                </nav>
                {/* {
                    this.state.data.map(data => {
                        return <Tiketlist key={data.id} name={data.name} date={data.date} 
                        price={data.price} nameCategory={data.nameCategory}/>
                    })
                } */}
            </div>
        )
    }
}


export default  withRouter(Navbar) ;
