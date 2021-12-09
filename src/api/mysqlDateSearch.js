import axios from "axios"
const  base="http://139.196.202.57:8089/api/"
export const getByDay = params=>{
    let geturl=base+'time/day/'+params;
    return axios.get(
        `${geturl}`
    )
}
