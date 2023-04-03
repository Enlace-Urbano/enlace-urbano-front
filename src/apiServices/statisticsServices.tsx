import axios from "axios";

interface Statistic {
  data: any;
  register: string;
  value: number;
}

const basestatisticsUrl = ('http://localhost:3000/api/v1/statistics/')

export const getstatisticsRequest = async () => {
  return await axios.get(basestatisticsUrl)
}

export const updateStatisticRequest = async (statistic: Statistic): Promise<Statistic> => {
  const response = await axios.patch(
    `${basestatisticsUrl}${statistic.register}`,
    { value: statistic.value },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  return response.data
}