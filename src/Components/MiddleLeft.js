import React,{useEffect} from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { $ }  from 'react-jquery-plugin'
import {motion} from 'framer-motion'


function MiddleLeft({thechosen}) {

    const state = useSelector(state => state.SRFromStore)
    const {seats} = state
    
    const variants = {
        initial: {opacity: 0.5, scale:0.9},
        animate: {opacity: 1, scale: 1, transition: {duration: 1.5}}
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
        <motion.div variants={variants} animate='animate' initial='initial' className='MiddleLeft'>
             {
                seats&&seats.slice(83,99).map(seat => {
                   if(seat.reserved) {return <button disabled id={seat.id} key={seat.id} className='w' style={{backgroundColor : seat.reserved ? '#474747' : null}} ></button>}
                   else return <button onClick={()=>pick()} id={seat.id} key={seat.id} className='w' style={{cursor: 'pointer'}} ></button>
                })
            }
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        seats : state.SRFromStore
    }
}

export default  MiddleLeft;
