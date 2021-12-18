import axios from "axios"

const base = "http://139.196.202.57:8089/api/combination/"
export const getByYearIdType = (year, id, type) => {
    let geturl = base + "year-and-id-and-type?year=" + year + "&id=" + id + "&type=" + type
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByStyleIdType = (style, id, type) => {
    let geturl = base + "style-and-id-and-type?styleName=" + style + "&id=" + id + "&type=" + type
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByStyleYear = (year, style) => {
    let geturl = base + "year-and-style-name?year=" + year + "&styleName=" + style
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByStyleAvg1 = (style) => {
    let geturl = base + "style-avg/" + style
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}

export const getByStyleAvg2 = (style) => {
    let geturl = base + "style-avg-motion/" + style
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}





