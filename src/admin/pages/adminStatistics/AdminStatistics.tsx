import { Title } from "../../../elements/index";
import { StatisticsContainer, StatisticsStyle } from "./AdminStatisticsStyle";
import { useState, useEffect } from "react";
import {
  getstatisticsRequest,
  updateStatisticRequest,
} from "../../../apiServices/statisticsServices";

interface Statistic {
  register: string;
  value: number;
  data: Object;
}

const Statistics = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    getstatisticsRequest()
      .then((response) => {
        setStatistics(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (index: number, value: number) => {
    const newStatistics = [...statistics];
    newStatistics[index].value = isNaN(value) ? 0 : value;
    setStatistics(newStatistics);
  };

  const handleUpdate = (index: number) => {
    updateStatisticRequest(statistics[index])
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <StatisticsStyle>
        <Title label={"Estadísticas"} />
        <h3>Edita las cifras </h3>
        <StatisticsContainer>
        <div className="card1">
          <p> Familias </p>
          <input
            value={statistics.length > 0 ? statistics[0].value : 0}
            onChange={(e) => handleEdit(0, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(0)}>Modificar</button>
        </div>
        <div className="card2">
          <p>Comunidades</p>
          <input
            value={statistics.length > 0 ? statistics[1].value : 0}
            onChange={(e) => handleEdit(1, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(1)}>Modificar</button>
        </div>
        <div className="card3">
          <p>Regiones</p>
          <input
            value={statistics.length > 0 ? statistics[2].value : 0}
            onChange={(e) => handleEdit(2, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(2)}>Modificar</button>
        </div>
        </StatisticsContainer>
       
      </StatisticsStyle>
    </>
  );
};

export default Statistics;
