import axios from "axios"
const  base="http://139.196.202.57:8089/api/"
export const getByAsin = params=>{
    let geturl=base+'movie/complete-info/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByTitle = params=>{
    let geturl=base+'movie/complete-title/'+params;
    geturl=geturl.replace(' ','%20')
    geturl=geturl.replace('&','%26')
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByFuzzyTitle = params=>{
    let geturl=base+'movie/fuzzy-title/'+params;
    geturl=geturl.replace(' ','%20')
    geturl=geturl.replace('&','%26')
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getImage = params=>{
    let geturl=base+'movie/pic-url/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
