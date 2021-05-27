
import React, { Component} from 'react'
import './Tikets.css'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


class Tiketlist extends Component {
  
        state = {
            data: [],
            cp: 2,
            pp: 8,
            search:[],
            order: false
        }

    componentDidMount() {
        const name = this.props.location.search
        console.log(name);
        if (name == '') {
            axios.get(process.env.REACT_APP_API_HOST+`/tikets`)
                .then((res) => {
                    this.setState({
                        data: res.data.data
                    })
                })
        } else {
            const name = this.props.location.search
            axios.get(process.env.REACT_APP_API_HOST+`/tikets/${name}`)
                .then((res) => {
                    this.setState({
                        search: res.data.data
                    })
                })
        }
        if(this.props.provider){
            if(this.props.provider.provLoc){
                this.setState({
                    order: true
                })
            }else{
                return;
            }
        }
       
    }

    handleMove = () =>{
        this.state.data.map(item =>{
            console.log(item);
            return this.props.history.push(`/movie-detil/${item.id}` )
            } )
    }         

    handleSearch=(e)=>{
        axios.get(process.env.REACT_APP_API_HOST+'/tikets?search='+ e.target.value)
        .then((res)=>{
            console.log(res);
            this.setState({
                search: res.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response);
        })
        // this.state.data.map(item =>{
        //     let i;
        //     let target = document.getElementsByClassName('tik-container')
        //     for(i=0;i<target.length;i++){
        //         target[i].style.display = "none"
        //     }
        //     const search = document.getElementById('search')
        //     search.style.display = 'block'
        //     this.props.history.push(`/tikets/?search=${e.target.value}`)
        // })
    }


    // nextPage =() =>{
    //     const page = this.props.location.search
    //     this.props.history.push(`/tikets?page=${page[6]/2*2+1}&per_Page=${this.state.pp}`)
    // }
    
    // backPage =() =>{
    //     const page = this.props.location.search
    //     this.props.history.push(`/tikets?page=${page[6]-1}&per_Page=${this.state.pp}`)
    // }
    changeMovie= async(id)=>{
        await this.props.updateMovie(this.state.search[id])
        this.props.history.push(`/order`)
    }

    render(){
        console.log( 'ini adalag data hasil get',this.state.data);
        const mystyle = {
            height:"100px"
          };

          console.log(this.state.search);
    return(
        <div>
            <Navbar />
            <div className="t-search-objek">
            <form class="t-search" action="">
                <input type="text" placeholder="Search.." name="search" onChange={(e)=>this.handleSearch(e)}/>
            </form>
            </div>
            <div className='tik-container'>
            {/* <div className="t-post" id="search">
                <div className="t-img-thumb">
                    <img src={this.state.search.image} alt="Dummy Blog Post" />
                </div>
                <div className="t-content">
                   <p>{this.state.search.name}</p>
                   <p>{this.state.search.genre}</p>
                   <button onClick={this.handleMove}>Detil</button>
                </div>
                
            </div> */}
            {
                this.state.search.map((data, index) =>{
                     return( 
            <div className="t-post" id="common">
                <div className="t-img-thumb">
                    <img src={data.image} alt="Movie Image" />
                </div>
                <div className="t-content" key={index.id}>
                   <h3>{data.name}</h3>
                   <p>{data.genre}</p>
                   {this.state.order &&
                   <button onClick={()=>this.changeMovie(data.id)}>Choose</button>}
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
const mapStateToProps = (state) => {
    return {
      user: state.user,
      transaction: state.transaction,
      provider: state.provider,
      movie: state.movie
    }
  }
  const mapDispatchToProps = dispatch => ({
    updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
    updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})},
    updateDate: (data) => {dispatch({type: 'UPDATE_DATE', payload: data})},
    updateLocation: (data) => {dispatch({type: 'UPDATE_LOCATION', payload: data})},
    updateSeats: (data) => {dispatch({type: 'UPDATE_SEATS', payload: data})},
    updatePrice: (data) => {dispatch({type: 'UPDATE_PRICE', payload: data})},
    // return {
    //   updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
    //   updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})}
    // }
  })  

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Tiketlist))