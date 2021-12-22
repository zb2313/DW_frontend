import axios from "axios"
const  base="http://139.196.202.57:8089/api/coopneo4j/"
export const getByYearN =(param)=>{
    let geturl=base+'year?yearid='+param;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonthN =(year, month)=>{
    let geturl=base+'year_month/yearid='+year+"&"+"monthid="+month;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
export const getByYearMonthDayN =(year, month, day)=>{
    let geturl=base+'year_month_day?yearid='+year+"&"+"monthid="+month+"&dayid="+day;
    console.log(geturl)
    return axios.get(
        `${geturl}`
    )
}
