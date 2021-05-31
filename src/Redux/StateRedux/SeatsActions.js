import axios from "axios";


export const fetchSucsess = (seats)=> {
    return {
        type : 'FETCHING',
        payload : seats
    }
}


//case of fetching from an api


// export const fetchingSeats = () =>{
//     return (dispatch) =>{
//         axios.get('http://localhost:3000/seats')
//         .then(response => {
//             const seats = response.data
//             dispatch(fetchSucsess(seats))
//         })
//     }
// }

