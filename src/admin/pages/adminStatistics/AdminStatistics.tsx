import { NumberCard, Title } from "../../../elements/index";
import { StatisticsStyle } from "./AdminStatisticsStyle";
import { useState, useEffect } from "react";
import { getstatisticsRequest, updateStatisticRequest } from "../../../apiServices/statisticsServices";

interface Statistic {
  register: string;
  value: number;
}

const Statistics = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    getstatisticsRequest()
            .then((response) => {
              setStatistics(response.data);
              console.log(response.data);
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
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          };

  return (
    <>
      <StatisticsStyle>
        <Title label={"Estadísticas"} />
        <h3>Edita o elimina las cifras </h3>
        <div className="card1">
          <p> Proyectos </p>
          <input
            value={
              statistics.length > 0 ? statistics[0].value : 0
            }
            onChange={(e) => handleEdit(0, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(0)}>Update</button>
        </div>
        <div className="card2">
          <p>Comunidades</p>
          <input
            value={
              statistics.length > 0 ? statistics[1].value : 0
            }
            onChange={(e) => handleEdit(1, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(1)}>Update</button>
        </div>
        <div className="card3">
          <p>Regiones</p>
          <input
            value={
              statistics.length > 0 ? statistics[2].value : 0
            }
            onChange={(e) => handleEdit(2, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdate(2)}>Update</button>
        </div>
      </StatisticsStyle>
    </>
  );
};

export default Statistics;







// import { NumberCardContainer } from "../../../components/index";
// import { NumberCard, Title } from "../../../elements/Index";
// import { CardSection, Container, StatisticsContainer, StatisticsStyle } from "./AdminStatisticsStyle";
// import { useState, useEffect } from "react";
// import { getstatisticsRequest } from "../../../apiServices/statisticsServices";

// interface Statistic {
//   register: string;
//   value: number;
// }
// const Statistics = () => {

//     const [statistic, setStatistic] = useState<Statistic[]>([]);
//     useEffect(() => {
//       getstatisticsRequest()
//         .then((response) => {
//           setStatistic(response.data);
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }, []);

//     return (
//         <>
//             <StatisticsStyle>
//                 <Title label={'Estadísticas'} />
//                     <h3>Edita o elimina las cifras </h3>
//         <div className="card1">
//           <NumberCard
//             label={'Proyectos'}
//             number={statistic.length > 0 ? statistic[0].value : 0}
//             color={"#025393"}
//           />
//         </div>
//         <div  className="card2">
//           <NumberCard 
//             label={'Comunidades'}
//             number={statistic.length > 0 ? statistic[1].value : 0}
//            color={"#80DBCC"} />
//         </div>
//         <div className="card3">
//           <NumberCard 
//              label={'Regiones'}
//              number={statistic.length > 0 ? statistic[2].value : 0}
//             color={"#00B899"}
//           />
//         </div>
   
 
//             </StatisticsStyle>
//         </>
//     );
// }

// export default Statistics;





