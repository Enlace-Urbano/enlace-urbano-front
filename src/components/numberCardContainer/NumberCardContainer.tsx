import { NumberCard } from "../../elements/Index";
import { Grid } from "./NumberCardContainerStyle";
import { getstatisticsRequest } from "../../../src/apiServices/statisticsServices";
import { useState, useEffect } from "react";

interface Statistic {
  register: string;
  value: number;
}
const NumberCardsContainer = () => {
  const [statistic, setStatistic] = useState<Statistic[]>([]);
  useEffect(() => {
    getstatisticsRequest()
      .then((response) => {
        setStatistic(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Grid >
        <div className="card1">
          <NumberCard
            label={'Proyectos'}
            number={statistic.length > 0 ? statistic[0].value : 0}
            color={"#025393"}
          />
        </div>
        <div  className="card2">
          <NumberCard 
            label={'Comunidades'}
            number={statistic.length > 0 ? statistic[1].value : 0}
           color={"#80DBCC"} />
        </div>
        <div className="card3">
          <NumberCard 
             label={'Regiones'}
             number={statistic.length > 0 ? statistic[2].value : 0}
            color={"#00B899"}
          />
        </div>
      </Grid>
 
    </>
  );
};

export default NumberCardsContainer;


