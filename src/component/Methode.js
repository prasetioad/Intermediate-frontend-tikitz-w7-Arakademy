// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Tikets from './Tiketlist/Tikets'
// import Tiketlist from './Tiketlist/Tikets';
// import axios from 'axios'

// class Tikets extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data:[]
//         }
//     }

//     componentDidMount(){
//         axios.get("http://localhost:5400/tikets/")
//         .then((res) => {
//             this.setState({
//                 data : res.data.data
//             })
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Mungkin ini yang anda cari?</h3>
//                 {
//                     this.state.data.map(data => {
//                         return <Tiketlist key={data.data.id} name={data.data.name} date={data.data.date}
//                         price={data.data.price} name={data.data.name} nameCategory={data.data.nameCategory}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default Tikets
