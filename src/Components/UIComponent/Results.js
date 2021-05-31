import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function Results() {

    const State = useSelector(state => state.BookingfromStore)
    const {selected} = State;


    const variants = {
        initial: {opacity: 0, scale: 0.9},
        animate : {opacity : 1, scale: 1, transition : {duration: 1.2}}
    }
    return (
        <motion.div variants={variants} initial='initial' animate='animate' className='result'>
            <h1>twoja rezerwacja przebiegła pomyślnie</h1>
            <div className="cho">
                <p>wybrates miejsca</p>

                {
                    selected.map(one => {
                        return(
                            <div key={one.id}>
                                <p>rząd {one.cords.x} miejsce {one.cords.y} ( {one.id} ) </p>
                            </div>
                        )
                    })
                }
            </div>
            <h1>dziekujemy! W razie problemów prosimy o kontakt z działem administracji</h1>
        </motion.div>
    )
}

export default Results
