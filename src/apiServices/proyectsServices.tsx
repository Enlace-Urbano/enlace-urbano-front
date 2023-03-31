import axios from "axios";

const baseProjectsUrl = ('http://localhost:3000/api/v1/projects/')

export const getProjectRequest = async()=>{
    return await axios.get(baseProjectsUrl)
}