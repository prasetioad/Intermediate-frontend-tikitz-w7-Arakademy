import React, { Component } from 'react'
import './admin.css'
import Footer from '../component-source/Footer/Footer'
import { Navbar } from '../component-source/Navbar/Navbar'

export class Admin extends Component {
    render() {
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
                                                <img src="" alt=""/>
                                            </div>
                                        </div>
                                        <div className="ach-head-right">
                                            <form action="">
                                                <div className="ach-identity">
                                                    <div className="ach-movie">
                                                        <p>Movie Name</p>   
                                                        <input type="text" name="name" id=""/>
                                                    </div>
                                                    <div className="ach-category">
                                                        <p>Category</p>
                                                        <input type="text" name="category"/>
                                                    </div>
                                                </div>
                                                <div className="ach-date-body">
                                                    <div className="ach-date">
                                                        <p>Release Date</p>
                                                        <input type="text" className="date"/>
                                                    </div>
                                                    <div className="ach-date-time">
                                                        <p>Duartion (hour / minute)</p>
                                                        <input type="number" name="hour"/>
                                                        <input type="number" name="minute"/>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="ach-director">
                                        <div className="director">
                                            <p>Director</p>
                                            <input type="text" name="director"/>
                                        </div>
                                        <div className="ach-cast">
                                            <p>Cast</p>
                                            <input type="text" name="cast"/>
                                        </div>
                                    </div>
                                    <div className="ach-synopsis">
                                        <p>Synopsis</p>
                                        <input type="text" name="synopsis"/>
                                    </div>
                                </div>
                            </div>

                            <div className="ach-admin-container-head-right-title">
                                <div className="achr-title">
                                <p>Premiere Location</p>
                                </div>
                                <div className="ach-admin-container-head-rigth">
                                    <div className="ach-location">
                                        <button className="button">Location</button>
                                        <input type="checkbox" className="ach-checkbox"/>
                                        <div className="dropDownContent">
                                            <div>
                                                <p>Manu 1</p>
                                            </div>
                                            <div>
                                                <p>menu 2</p>
                                            </div>
                                            <div>
                                                <p>Menu 3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="ach-content-right">
                                        <div className="ach-content-right-item ach-ebu">
                                            <img src="../source/ebu.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-hiflix">
                                            <img src="../source/hiflix.png" alt=""/>
                                        </div>
                                        <div className="ach-content-right-item ach-cine">
                                            <img src="../source/Cine.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ach-admin-container-bottom-right">
                                    <div className="ach-p">
                                        <p>Showtimes</p>
                                    </div>
                                    <div className="ach-set-date-time">
                                        <div className="ach-date">
                                            <input type="date"/>
                                        </div>
                                        <div className="ach-set">
                                            <div className="ach-time">
                                                <div>
                                                    <input type="file" placeholder="none" id=""/>
                                                </div>
                                            </div>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                                <p>08.30am</p>
                                        </div>
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
