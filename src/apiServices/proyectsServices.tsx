import axios from "axios";

const baseProjectsUrl = ('http://localhost:3000/api/v1/projects/')

export const getProjectRequest = async()=>{
    return await axios.get(baseProjectsUrl)
}

export const postProjectRequest = async (formData:FormData)=>{
   return await axios.post(baseProjectsUrl, formData ,{
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
   }
   )
}