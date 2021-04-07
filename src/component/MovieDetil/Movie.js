import React, { Component } from 'react'
import './Movie.css'
import Navbar from '../component-source/Navbar/Navbar'
import Footer from '../component-source/Footer/Footer'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import CardProvider from './CardProvider'

export class Movie extends Component {
  constructor(props) {
    super(props);
    const {product} =props;
     this.state = {
        movie: [],
        provider: [],
        date: null
      }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(process.env.REACT_APP_API_HOST + `/tikets/${id}`)
      .then((res) => {
        this.setState({
          movie: res.data.result
        })
      })
      axios.get(process.env.REACT_APP_API_HOST+`/provider`)
      .then((res) =>{
        console.log(res.data.result)
        this.setState({
          provider: res.data.result
        })
      })
  }

  handleBook = (provId) => {
    this.props.updateProvider(this.state.provider[provId - 1])
    this.props.updateMovie(this.state.movie[0])
    const id = this.props.match.params.id
    this.props.history.push(`/order`)
  }
  dateHandler = (e) =>{
    this.props.updateDate(e.target.value)
  }

  placeHandler = (e) =>{
    this.props.updateLocation(e.target.value);
  }


  render() {
    console.log('this props provider cek', this.props.provider);
    console.log('this props movie', this.state.movie);
    // console.log('this state date ', this.state.date);
    return (
      <div>
        <Navbar />
        {
          this.state.movie.map((item) => {
            return (
              <header>
                <div className="m-header-container">
                  <div className="m-header-left" >
                    <img src={item.image} alt="" />
                  </div>

                  <div className="m-header-right">
                    <div className="m-top-container">
                      <p className="m-title">{item.name}</p>
                      <p className="m-genre">{item.genre}</p>
                      <div className="m-top-header">
                        <div className="m-top-header-left">
                          <div className="m-detil">
                            <p className="m-date">Release date</p>
                            <p className="m-duration">{item.release_date}</p>
                          </div>
                          <div className="m-detil">
                            <p className="m-date">Duration</p>
                            <p className="m-duration m-delete">2 hours 13 min<span>utes</span></p>
                          </div>
                        </div>
                        <div className="m-top-header-right">
                          <div className="m-detil" >
                            <p className="m-date">Directed by</p>
                            <p className="m-duration">{item.director}</p>
                          </div>
                          <div className="m-detil">
                            <p className="m-date">Casts</p>
                            <p className="m-duration">{item.cast}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div className="m-bot-container">
                      <p className="m-synopsis"></p>
                      <p>{item.synopsis}</p>
                    </div>
                  </div>

                </div>
              </header>
            )
          })
        }

        <main>
          <div className="m-main-container">
            <div className="m-main-title">
              <p>Showtimes and Tickets</p>
            </div>
            <div className="m-main-data-order">
              <div className="m-order-date dropdown">
                <div className="m-location ">
                  <input className="dropdown-item dropdown-toggle flex-row-reverse" type="date" id="start" name="trip-start"
                    min="2021-01-01" max="2021-12-31" placeholder="03/04/2021" onChange={this.dateHandler} />
                </div>
              </div>
              <div className="m-order-date">
                <div className="m-location">
                  <div className="m-item">
                    <img src="./source/place.png" alt="" />
                  </div>
                </div>
                <div className="dropdown">
                  <form action="" onChange={this.placeHandler} >
                    <select name="select" id="selecr">
                    <option value="Purwokerto">Location</option>
                      <option value="Purwokerto">Purwokerto</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Cilacap">Cilacap</option>
                      <option value="Ciamis">Ciamis</option>
                      <option value="Surabaya">Surabaya</option>
                    </select>
                  </form>

                </div>
              </div>
            </div>
            <div className="m-menu">
              {
                this.state.provider.map(item => {
                  return <CardProvider key={item.id}
                  id={item.id}
                  name={item.name}
                  place={item.place}
                  time1={item.time1} time2={item.time2} time3={item.time3} time4={item.time4}
                  time5={item.time5} time6={item.time6} time7={item.time7} 
                  handleBook={()=>this.handleBook(item.id)}
                  // handleTime={()=>this.handleTime()}
                  />
                })
              }
            </div>
            <div className="m-line" >
              <hr /><a href=""> view more</a><hr />
            </div>
          </div>
        </main>
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
  // return {
  //   updateProvider: (data) =>{ dispatch({type: 'UPDATE_PROVIDER', payload: data})},
  //   updateMovie: (data) => {dispatch({type: 'UPDATE_MOVIE', payload: data})}
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie))
