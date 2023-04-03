import axios from "axios";

export const baseProjectsUrl = ('http://localhost:3000/api/v1/projects/')

export const getProjectRequest = async () => {
    return await axios.get(baseProjectsUrl)
}

export const postProjectRequest = async (formData: FormData) => {
    return await axios.post(baseProjectsUrl, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}



export const deleteProjectRequest = async (title: string) => {
    try {
      const response = await axios.delete(`${baseProjectsUrl}${title}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response;
    } catch (error) {
      throw new Error();
    }
  };
