import axios from "axios"

const base = "http://139.196.202.57:8089/api/cooperate/"
export const getActors100=() =>{
    let geturl = base + "actor-actor-top100"
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectorActor100=() =>{
    let geturl = base + "director-actor-top100"
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getDirectors100=() =>{
    let geturl = base + "director-director-top100"
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
