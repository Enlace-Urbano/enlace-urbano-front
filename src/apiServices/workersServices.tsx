import axios from "axios";

const baseWorkersUrl = ('http://localhost:3000/api/v1/workers/')

export const getWorkersRequest = async()=>{
    return await axios.get(baseWorkersUrl)
}
export const postWorkersRequest = async (formData:FormData)=>{
    return await axios.post(baseWorkersUrl, formData ,{
     headers: {
         'Content-Type': 'multipart/form-data',
         'Authorization': `Bearer ${localStorage.getItem('token')}`
     }
    }
    )
 }

 export const deleteWorkersRequest = async (name: string) => {
    try {
      const response = await axios.delete(`${baseWorkersUrl}${name}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response;
    } catch (error) {
      throw new Error();
    }
  };