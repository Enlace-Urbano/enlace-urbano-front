import { NumberCard, Title } from "../../../elements/Index";
import { CardSection, Container, StadisticsContainer, StadisticsStyle } from "./AdminStadisticsStyle";

const Stadistics = () => {

    return (
        <>
            <StadisticsStyle>
                <Title label={'Estadísticas'} />
                <Container>
                    <h3>Edita las cifras o texto </h3>
                    <CardSection>
                        <StadisticsContainer>
                            <p>Estadística 1</p>
                            <NumberCard label={"bla bla bla"} number={2} color={"green"}/>
                        </StadisticsContainer>
                        <StadisticsContainer>
                            <p>Estadística 2</p>
                            <NumberCard label={"bla bla bla"} number={2} color={"grey"}/>
                        </StadisticsContainer>
                        <StadisticsContainer>
                            <p>Estadística 3</p>
                            <NumberCard label={"bla bla bla"} number={2} color={"pink"}/>
                        </StadisticsContainer>
                    </CardSection>
                </Container>
            </StadisticsStyle>
        </>
    );
}

export default Stadistics;