import axios from "axios"
const  base="http://139.196.202.57:8089/api/"
export const getByDay = params=>{
    let geturl=base+'time/day/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByMonth = params=>{
    let geturl=base+'time/month/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYear = params=>{
    let geturl=base+'time/year/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByQuarter = params=>{
    let geturl=base+'time/quarter/'+params;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonth = (year,month)=>{
    let geturl=base+'time/year-and-month?year='+year+'&month='+month;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearQuarter = (year,quarter)=>{
    let geturl=base+'time/year-and-quarter?year='+year+'&quarter='+quarter;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByMonthDay = (month,day)=>{
    let geturl=base+'time/month-and-day?month='+month+'&day='+day;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonthDay =(year,month,day)=>{
    let geturl=base+'time/year-and-month-day?year='+year+'&month='+month+'&day='+day;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
