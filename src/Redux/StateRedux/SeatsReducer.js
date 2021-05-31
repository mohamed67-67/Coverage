

const initial = []


const SeatReducer = (state = initial, action) => {
    switch (action.type) {
        case 'FETCHING' :
            return {seats : action.payload}
        default : return state;
    }
}
 
export default SeatReducer;