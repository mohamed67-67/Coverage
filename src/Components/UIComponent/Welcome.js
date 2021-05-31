import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { Redirect,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'react-jquery-plugin'
import data from './db.json'
import { fetchSucsess } from '../../Redux/StateRedux/SeatsActions';
import { AllOut } from '@material-ui/icons';
import { animate, motion } from 'framer-motion';





function Welcome({thechosen}) {

    const containerVariant = {
        initial : {opacity : 0.5},
        animate : {opacity : 1, transition : {duration : 1.1}},
        exit : {x: '-100vw', transition : { ease : 'easeInOut'}}
      }
    
    const history = useHistory()
    const disptach = useDispatch();
    useEffect(()=>{
        // case of fetching from local

        const {seats} = data
        disptach(fetchSucsess(seats))
        
        //case of fetching from an api
        // disptach(fetchingSeats())
    },[])

    const state = useSelector(state => state.SRFromStore)
    const {seats} = state

    

    
    const [checked, setCheked] = useState(false);

    const handleChange = (e) => {
        setCheked(e.target.checked);
    }
    
    
    let NOSeats ;
    let arr = [];
    seats&&seats.map(one => {
        if(! one.reserved) {
            arr = [...arr,one]
            return;
        }
    })
    const [number, setNumber] = useState();
    NOSeats = arr.length

    
    const handleSubmit = ()=>{
        // if(checked && number >1){
        //     thechosen.add(number)
        // }else {

            let theCut
            theCut = arr.slice(0,number)
            
            theCut.map(array=> {
                thechosen.add(array)
            })
        // }
        
        history.push('/book');
    }

    
    
    return (
        <motion.div className='welcome'
            variants={containerVariant}
            animate='animate'
            initial='initial'
            exit='exit'
        >
            <form onSubmit={() => handleSubmit() }>

                <div className="entry">
                    <EventSeatRoundedIcon  className='chair' color='primary' fontSize='large' />
                    <TextField onChange={(e) => setNumber(e.target.value)} required  type='number' name='quantity' label="No.Seats" helperText={`Number of seats left :${NOSeats}`} InputProps={{ inputProps: { min: "1", max: `${NOSeats}`, step: "1" } }} />
                </div>
                <div className="questionare">
                    <p>miejsca mają być obok siebie?</p>
                    <Checkbox
                        onChange={handleChange}
                        checked={checked}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
                <div className="btnConf"> 
                <Button  className="btnConff" variant="contained" type='submit'>
                    wybierz miejsca
                </Button>
                </div>
            </form>
               
        </motion.div>
    )
}

export default Welcome