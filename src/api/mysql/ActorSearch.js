import axios from "axios"
const  base="http://139.196.202.57:8089/api/"
export const getActorId = params=>{
    let geturl=base+'actor/fuzzy-name/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getActorMovie = params=>{
    let geturl=base+'actor/movies-name/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getActorRelation = params=>{
    let geturl=base+'actor/cooperate-actor/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getActorDirectorRelation = params=>{
    let geturl=base+'actor/cooperate-director/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
