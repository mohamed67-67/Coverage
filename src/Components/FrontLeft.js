import React from 'react'
import {  useSelector } from 'react-redux';
import { $ }  from 'react-jquery-plugin'
import { motion } from 'framer-motion';


function FrontLeft({thechosen}) {
    const state = useSelector(state => state.SRFromStore)
    const {seats} = state
    
    const variants = {
        initial: {x: '100vw'},
        animate: {x: 0, transition: {duration: 1.4}}
    }

    const pick = () => {
       
        $('.chosen').on('click', function () {
            let id = this.id
            let selected = seats.filter(seat => seat.id == id)
            $(this).removeClass('chosen');
            $(this).addClass('w');
            thechosen.delete(selected[0])
        });

        $('.w').on('click', function () {
        
            let id = this.id
            let selected = seats.filter(seat => seat.id == id)
    
            $(this).addClass('chosen');
            $(this).removeClass('w');
            thechosen.add(selected[0]);
        })
        
    }
    
    return (
        <motion.div variants={variants} animate='animate' initial='initial' className='FrontLeft'>
            {
                seats&&seats.slice(51,67).map(seat => {
                   if(seat.reserved) {return <button disabled id={seat.id}  key={seat.id} className='w' style={{backgroundColor : seat.reserved ? '#474747' : null}} ></button>}
                   else return <button onClick={() => pick()} id={seat.id}  key={seat.id} className='w' style={{cursor: 'pointer'}} ></button>
                })
            }
        </motion.div>
    )
}

const mapStateToProps = (state) =>{
    return{
        seats : state.SRFromStore
    }
}

// const mpaDispatchToProps = (dispatch) => {
//     return {
//         action : (alo) => dispatch( Choose(alo))
//     }
// }

export default  FrontLeft
