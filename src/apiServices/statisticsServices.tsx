import axios from "axios";

const basestatisticsUrl = ('http://localhost:3000/api/v1/statistics/')

export const getstatisticsRequest = async()=>{
    return await axios.get(basestatisticsUrl)
}