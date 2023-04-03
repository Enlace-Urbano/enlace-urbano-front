import axios from "axios";

const basestatisticsUrl = ('http://localhost:3000/api/v1/statistics/')

export const getstatisticsRequest = async()=>{
    return await axios.get(basestatisticsUrl)
}

interface Statistic {
    data: any;
    register: string;
    value: number;
  }

export const updateStatisticRequest = async (statistic: Statistic): Promise<Statistic> => {
    const response = await axios.patch(`${basestatisticsUrl}${statistic.register}`, { value: statistic.value });
    return response.data;
  };