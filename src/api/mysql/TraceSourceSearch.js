import axios from "axios"
const  base="http://139.196.202.57:8089/api/trace/"
export const getSeriesByAsin = params=>{
    let geturl=base+'movie-series-num/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getSeriesBySeriesId = params=>{
    let geturl=base+'movie-series/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getNonMovie = ()=>{
    let geturl=base+'non-movie';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
