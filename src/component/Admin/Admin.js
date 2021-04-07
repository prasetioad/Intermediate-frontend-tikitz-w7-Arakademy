import React, { Component } from 'react'
import './admin.css'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'
import axios from 'axios'

export class Admin extends Component {
    state = {
        image: [],
        movieName: null,
        category: null,
        release_date: null,
        duration: null,
        director: null,
        cast: null,
        synopsis: null,
        
        name:null,
        location: null,
        place: null,
        date: null,
        time1: null,
        time2: null,
        time3: null,
        time4: null,
        time5: null,
        time6: null,
        time7: null,
    }

    creatTiketHandler= () =>{
        const formData = new FormData();
            formData.append('name', this.state.movieName)
            formData.append('category ', this.state.category)
            formData.append('release_date', this.state.release_date)
            formData.append('duration', this.state.duration)
            formData.append('director', this.state.director)
            formData.append('cast', this.state.cast)
            formData.append('synopsis', this.state.synopsis)
            formData.append('image', this.state.image)
            console.log(formData);
            // axios.post(process.env.REACT_APP_API_HOST+`/tikets`, formData)
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch((err) =>{
            //     console.log('Failed!');
            // })
            const provData ={
                name:this.state.name,
                location: this.state.location,
                place: this.state.place,
                date: this.state.date,
                time1: this.state.time1,
                time2: this.state.time2,
                time3: this.state.time3,
                time4: this.state.time4,
                time5: this.state.time5,
                time6: this.state.time6,
                time7: this.state.time7,
            }
            // axios.post(process.env.REACT_APP_API_HOST+`/provider`, provData)
            // .then((res) =>{
            //     console.log('prov Success', res);
            //     alert('Success')
            // })
            // .catch((err) =>{
            //     console.log('error', err);
            // })
    }

    inputHandler = (event) =>{
        console.log(event.target.value);
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
            ...this.state,
             [name]: value
            });
    }

    timeSelectHandler= (e) =>{
        console.log(e);
        let i;
        const target = e.target
        const value = target.innerText
        const name = target.attributes.name.value
        this.setState({
            ...this.state,
             [name]: value
            });
            target.style.color = "red"
    }

    ebuHandler=(e) =>{
        this.setState({
            ...this.state,
            name: 'ebu.id',
            place: 'ebu.id'
        })
        let item = document.getElementsByClassName('ach-place-item')
        let i;
        const target = e.target
        for(i=0;i<item.length; i++){
            item[i].style.background = 'none'
        }
        target.style.background = 'yellow'
    }
    cinemaHandler=(e) =>{
        this.setState({
            ...this.state,
            name: 'cineOne21',
            place: 'cineOne21'
        })
        let item = document.getElementsByClassName('ach-place-item')
        let i;
        const target = e.target
        for(i=0;i<item.length; i++){
            item[i].style.background = 'none'
        }
        target.style.background = 'yellow'
    }
    hiflixHandler=(e) =>{
        this.setState({
            ...this.state,
            name: 'hiflix',
            place: 'hiflix'
        })
        let item = document.getElementsByClassName('ach-place-item')
        let i;
        const target = e.target
        for(i=0;i<item.length; i++){
            item[i].style.background = 'none'
        }
        target.style.background = 'yellow'
    }

    render() {
        console.log(this.state.movieName);
        return (
            <div>
                <Navbar />
                    <div className="admin-container">
                        <div className="admin-container-head">
                            <div className="admin-container-head-left-title">
                                <div className="achl-title">
                                <p>Movie Description</p>
                                </div>
                                <div className="admin-container-head-left">
                                    <div className="ach-left">
                                        <div className="ach-head-left">
                                            <div className="ach-left-img">
                                                 <input type="file" name="image" onChange={this.inputHandler}/>
                                                 <img src="" alt=""/>
                                            </div>
                                        </div>
                                        <div className="ach-head-right">
                                            <form action="">
                                                <div className="ach-identity">
                                                    <div className="ach-movie">
                                                        <p>Movie Name</p>   
                                                        <input type="text" name="movieName" id="" onChange={this.inputHandler}/>
                                                    </div>
                                                    <div className="ach-category">
                                                        <p>Category</p>
                                                        <input type="text" name="category" onChange={this.inputHandler}/>
                                                    </div>
                                                </div>
                                                <div className="ach-date-body">
                                                    <div className="ach-date">
                                                        <p>Release Date</p>
                                                        <input type="text" name="release_date" className="date" onChange={this.inputHandler}/>
                                                    </div>
                                                    <div className="ach-date-time">
                                                        <p>Duartion (hour / minute)</p>
                                                            <form action="" name="duration" onChange={this.inputHandler}>
                                                            <input type="number" name="duration"/>
                                                            <input type="number" name="duration"/>
                                                        </form>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="ach-director">
                                        <div className="director">
                                            <p>Director</p>
                                            <input type="text" name="director" onChange={this.inputHandler}/>
                                        </div>
                                        <div className="ach-cast">
                                            <p>Cast</p>
                                            <input type="text" name="cast" onChange={this.inputHandler}/>
                                        </div>
                                    </div>
                                    <div className="ach-synopsis">
                                        <p>Synopsis</p>
                                        <input type="text" name="synopsis" onChange={this.inputHandler}/>
                                    </div>
                                </div>
                            </div>

                            <div className="ach-admin-container-head-right-title">
                                <div className="achr-title">
                                <p>Premiere Location</p>
                                </div>
                                <div className="ach-admin-container-head-rigth">
                                    <div className="ach-location ">
                                        <select className="glyphicon glyphicon-map-marker" name="location" id="location" onChange={this.inputHandler}>
                                            <option value="Location">Location</option>
                                            <option value="Purwokerto">Purwokerto</option>
                                            <option value="Cilacap">Cilacap</option>
                                            <option value="Jakarta">Jakarta</option>
                                            <option value="Surabaya">Surabaya</option>
                                            <option value="Bandung">Bandung</option>
                                        </select>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt="" className="ach-place-item" onClick={this.ebuHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt="" className="ach-place-item" onClick={this.hiflixHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt="" className="ach-place-item" onClick={this.cinemaHandler}/>
                                        </div>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt="" className="ach-place-item" onClick={this.ebuHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt="" className="ach-place-item" onClick={this.hiflixHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt="" className="ach-place-item" onClick={this.cinemaHandler}/>
                                        </div>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt="" className="ach-place-item" onClick={this.ebuHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt="" className="ach-place-item" onClick={this.hiflixHandler}/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt="" className="ach-place-item" onClick={this.cinemaHandler}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ach-admin-container-bottom-right">
                                    <div className="ach-p">
                                        <p>Showtimes</p>
                                    </div>
                                    <div className="ach-set-date-time">
                                        <div className="ach-date">
                                            <input type="date" name="date" onChange={this.inputHandler}/>
                                        </div>
                                        <div className="ach-set">
                                            <div className="ach-time">
                                                <div>
                                                    <input type="file" placeholder="none" id=""/>
                                                </div>
                                            </div>
                                                <p onClick={this.timeSelectHandler} name="time1">08.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time2">10.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time3">13.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time4">15.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time5">18.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time6">20.30am</p>
                                                <p onClick={this.timeSelectHandler} name="time7">22.30am</p>
                                        </div>
                                        <button onClick={this.creatTiketHandler}>Creat Movie Tiket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin-container-bot">
                            <div className="ach-saleschart">
                                <div className="ach-sales">
                                    <p>Slaes Chart</p>
                                </div>
                                <div className="ach-tab">
                                    <button className="ach-tablinks">Based on Movie</button>
                                    <button className="ach-tablinks">Based on Location</button>
                                </div>
                                <div className="ach-tablink-item">
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                    <div className="ach-based-movie-card">
                                        <div className="ach-based-movie-title">
                                            <p>Avengers: End Game</p>
                                        </div>
                                        <div className="ach-tablinks-contet">
                                            <button className="ach-tablinks-content">Weekly</button>
                                            <button className="ach-tablinks-content">Monthly</button>
                                            <button className="ach-tablinks-content">Yearly</button>
                                        </div>
                                        <div className="ach-graphic">
                                            <p>DATA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ach-line-bot">
                            <div className="ach-line">
                                <hr/><p>view more</p><hr/>
                            </div>
                        </div>
                    </div>

                    
                <Footer />
            </div>
        )
    }
}

export default Admin
