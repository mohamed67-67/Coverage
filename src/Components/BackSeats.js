import { motion } from 'framer-motion'
import React,{useEffect, useState,useRef,memo } from 'react'
import { $ }  from 'react-jquery-plugin'
import { useSelector } from 'react-redux'


function BackSeats({thechosen}) {

    // const variants = {
    //     initial : { x : '100vw', opacity : 0 },
    //     animate : {x : 0, opacity: 1, transition :  {delay: 0.5,  type: "spring"}},
    //     exit : {x: '-100vw', transition : { ease : 'easeInOut'}}
    //   }

    const variants = {
        animate : {x: 0, opacity : 1, transition: {duration: 1.2}},
        initial : {x : '-100vw', opacity: 0}
    }
    useEffect(()=>{

        let styling = [...thechosen]
        styling.map(one => {
            let id = one.id
            let shika = document.getElementById(id)
            shika.classList.add('chosen');
        })
    },[])
    
    

    const state = useSelector(state => state.SRFromStore)
    const {seats} = state


    
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
        <motion.div variants={variants} animate='animate' initial='initial' className='BackSeats'>
        
            {
                seats&&seats.slice(0,51).map(seat => {
                   if(seat.reserved) {return (<button disabled id={seat.id}  key={seat.id} className='w' style={{backgroundColor :'#474747'}} ></button>)}
                   else return (<button onClick={()=>pick()} id={seat.id} key={seat.id} className='w' style={{cursor: 'pointer'}} ></button>)
                })
            }
        </motion.div>
    )
}

export default BackSeats ;
