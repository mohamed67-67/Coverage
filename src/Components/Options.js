import React, { useEffect } from 'react'
import { BooK, Select } from '../Redux/SelectRedux/SelectActions'
import {useSelector,useDispatch} from 'react-redux'
import { $ }  from 'react-jquery-plugin'
import {useHistory} from 'react-router-dom'


function Options({thechosen}) {
    const history = useHistory();
    const dispatch = useDispatch();
    let State = useSelector(state => state.BookingfromStore)
    const {selected} = State
    
    
    const final = () =>{
        dispatch(Select(thechosen));
        dispatch(BooK(selected))
        history.push('/result')
        
    }


    return (
        
        <div className='options' style={{textAlign : 'center'}}>
            <div><button className='Dostpne'> </button> <span>miejsca Dostępne</span> </div>
            <div><button className='Miejsca'>  </button> <span>Miejsca zarezerwowane</span> </div>
            <div><button className='twoj'>  </button> <span>Twój wybór</span> </div>
            <div><button className='confirm' onClick={() => final()}> rezerwuj </button></div>
        </div>
    )
}

export default Options
