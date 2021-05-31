

export const Select = (temp)=> (dispatch) =>{
    

    dispatch ({
        type : 'CLICKED',
        payload : [...temp]
    })

}




export const BooK =() => (dispatch, getState) =>{

    const {
        BookingfromStore : {selected},
    } = getState();


    selected.map(one => {
        one.reserved = true
    })


    dispatch({
        type: 'BOOKED'
    })
}