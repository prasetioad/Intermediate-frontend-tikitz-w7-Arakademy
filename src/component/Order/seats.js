    import React, { useEffect, useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import available from '../asset/Rectangle 438.png'
    import select from '../asset/Rectangle 469.png'
    import love from '../asset/Rectangle 540.png'
    import soldgrey from '../asset/Rectangle 443.png'
    import {deleteSeat, updateSeats, updatePrice} from '../configs/redux/action/providerAction.js'


    function Seats({index, col, booked, clicked, price, priceProv}) {
        const dispatch = useDispatch()
        const state = useSelector(state => state.movie)
        const {seats} = useSelector(state => state.provider)
        const [selected, setSelected] = useState(false)
        const [sold, setSold] = useState([])
        const [seatNumb, setSeatNumb] = useState([])
        const [order, setOrder] = useState([])

        useEffect(() => {
            setSeatNumb(booked.split(','))
        }, [])
        // useEffect(() => {
        //     console.log(seats);
        // }, [seats])

        const handleSelect= (id)=>{
            console.log(seats)
            if(selected){
                setSelected(false)
                dispatch(updatePrice(priceProv - price))
                if(seats.length != 0){
                    // dispatch({type: 'DELETE_SEAT', payload: index})
                    console.log('seats jalan');
                    dispatch(deleteSeat(col+index,))
                }else{
                    console.log('statenya kosong');
                }
            }else{
                setSelected(true)
                 dispatch(updateSeats(col+index,))
                 dispatch(updatePrice(price + priceProv))
            }
        }
        console.log(seatNumb);
        return (
            <div className="ord-icon-book">
                {selected ?
                <div className="ord-icon-book-item"  id='selected' onClick={clicked, ()=>{handleSelect()}} >
                    <img src={select} alt={`A`} name={col+index} />
                </div> :
                col+index == seatNumb[seatNumb.indexOf(col+index)] ?
                <div className="ord-icon-book-item"  name='seat'>
                    <img src={soldgrey} alt={`A$`} name={col+index} />
                </div> :
                <div className="ord-icon-book-item" id='available' onClick={clicked, ()=>{handleSelect()}} >
                    <img src={available} alt={`A`} name={col+index} />
                </div>
               } 
            </div>

            // <div className="ord-icon-book">
            //     {seatNumb && seatNumb.map(book =>{return(
            //         col+book == col+index ?<>
            //     <div className="ord-icon-book-item"   name='seat'>
            //         <img src={love} alt={`A$`} name={col+index} placeholder='seat'/>
            //     </div>
            //     <div className="ord-icon-book-item"  name='seat'>
            //         <img src={soldgrey} alt={`A$`} name={col+index} />
            //     </div>  </> :
            //    <> {selected ?
            //     <div className="ord-icon-book-item"  id='selected' onClick={()=>handleSelect()}>
            //         <img src={select} alt={`A`} name={col+index} />
            //     </div> :
            //     <div className="ord-icon-book-item" id='available' onClick={()=>handleSelect()}>
            //         <img src={available} alt={`A`} name={col+index} />
            //     </div>
            //    } </>
            //     )})}
            // </div>
        )
    }

    export default Seats
