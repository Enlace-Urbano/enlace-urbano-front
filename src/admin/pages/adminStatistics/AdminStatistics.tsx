import { NumberCardContainer } from "../../../components/index";
import { NumberCard, Title } from "../../../elements/Index";
import { CardSection, Container, StatisticsContainer, StatisticsStyle } from "./AdminStatisticsStyle";


const Statistics = () => {


    return (
        <>
            <StatisticsStyle>
                <Title label={'Estadísticas'} />
                    <h3>Edita las cifras o texto </h3>
                <NumberCardContainer/>
          
            </StatisticsStyle>
        </>
    );
}

export default Statistics;