import axios from "axios"

const base = "http://139.196.202.57:8089/api/"
export const getStyleStatus = () => {
    let geturl = base + 'misc/top100-style-movie-num';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getImdbStatus = (score) => {
    let geturl = base + 'misc/movie-num-more-than-score/' + score;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getImdbRank=()=>{
    let geturl = base + 'misc/top100-imdb';
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
