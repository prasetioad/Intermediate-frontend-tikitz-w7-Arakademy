import React, { Component } from 'react'
import './Navbar.css'
import axios from 'axios'
import { withRouter} from 'react-router-dom'
 




export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            isLoggedIn: ''
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
                this.setState({
                    data: res.data.data
                })
            })
            
            .catch((err) =>{
                if(err){
                this.props.history.push('/signin')
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

     

      handleLogout = () => {
          window.localStorage.removeItem("token")
          this.props.history.push('/signin')
      }

      handleProfile = () => {
        this.props.history.push('/profile')
      }

      handleHome = () =>{
        this.props.history.push('/tikets')
      }

      handleTikets = () =>{
        this.props.history.push('/movie-detil')
    }

    handleBuy = ()=>{
        this.props.history.push('/payment/2')
    }

    render() {

        function burger () {
        const burger = document.querySelector('.n-burger input');
        const nav = document.querySelector('.n-nav1 ul');
  
        burger.addEventListener('click', function() {
          nav.classList.toggle('slide')
        });
    }

    function active(){
        const trigger = document.querySelector('.n-profil-icon input');
        const target = document.querySelector('.n-profil-icon ul');

        trigger.addEventListener('click', function() {
            target.classList.toggle('n-active')
            // target.style.display = 'block'
          });
    }
    
        // console.log('navbar dari state: ',  this.state.data);
       
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
                                    <input type="text" className="glyphicon glyphicon-search" name="search"  placeholder="Search..." onChange={this.handleInputChange}/>
                                    <button type='submit'>Cari</button>
                                </form>
                            </li>
                            <li className="n-off">
                            <li className="nav-item dropdown .n-off">
                                <a className="nav-link dropdown-toggle .n-off" href="./index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
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
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <i className="glyphicon glyphicon-search"><a href="#"></a></i>
                        { this.state.isLoggedIn == false ?
                        <div className="n-btn">
                        <Link to="/signup"><a href="" target="_blank" rel="noopener noreferrer">Sign Up</a></Link>
                        </div> :
                        <div className="n-profil-icon" onClick={() => active()}>
                            <img src={ this.state.data.image} alt=""/>
                            <input type="checkbox" className="triger-check" name="" id=""/>
                            <ul className="">
                                <li><button onClick={this.handleProfile}>Profil</button></li>
                                <li><button  onClick={this.signOutHandler}>Logout</button></li>
                            </ul>
                        </div>
                        }
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

// const mapStateToProps = (state) => {
//     return{
//         user: state.user,
//         product: state.product
//     }
// }

export default  withRouter(Navbar) ;
