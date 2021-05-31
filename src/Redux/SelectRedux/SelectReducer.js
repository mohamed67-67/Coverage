
let initial = {
    selected : []
}

function SelectReducer(state = initial, action) {
    
    switch(action.type){
        case 'CLICKED' :
            return { selected : action.payload}
        case 'BOOKED' :
            return state
        default : return state
    }
}

export default SelectReducer
