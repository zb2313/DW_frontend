import axios from "axios"
const  base="http://139.196.202.57:8089/api/"
export const getDirectorId = params=>{
    let geturl=base+'director/fuzzy-name/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorMovie = params=>{
    let geturl=base+'director/movies-name/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorRelation = params=>{
    let geturl=base+'director/cooperate-director/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorActorRelation = params=>{
    let geturl=base+'director/cooperate-actor/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
