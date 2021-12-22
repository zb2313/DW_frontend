import axios from "axios"
const  base="http://121.5.137.205:8089/hive/"
export const getByYearH =(param)=>{
    let geturl=base+'year/'+param;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonthH =(year, month)=>{
    let geturl=base+'year-and-month?year='+year+"&"+"month="+month;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonthDayH =(year, month, day)=>{
    let geturl=base+'year-and-month-and-day?year='+year+"&"+"month="+month+"&day="+day;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
