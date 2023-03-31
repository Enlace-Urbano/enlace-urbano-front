import axios from "axios";

const baseWorkersUrl = ('http://localhost:3000/api/v1/workers/')

export const getWorkersRequest = async()=>{
    return await axios.get(baseWorkersUrl)
}