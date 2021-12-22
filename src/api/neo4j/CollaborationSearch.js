import axios from "axios"
const  base="http://139.196.202.57:8089/api/coopneo4j/"
export const getActorActor =()=>{
    let geturl=base+'aanda';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getActorDirecctor =()=>{
    let geturl=base+'aandd';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorActor =()=>{
    let geturl=base+'danda';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorDirector =()=>{
    let geturl=base+'dandd';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
