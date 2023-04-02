import axios from "axios";

const baseWorkersUrl = ('http://localhost:3000/api/v1/workers/')

export const getWorkersRequest = async () => {
    return await axios.get(baseWorkersUrl)
}
export const postWorkersRequest = async (formData: FormData) => {
    return await axios.post(baseWorkersUrl, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}