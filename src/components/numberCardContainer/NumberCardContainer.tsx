import { NumberCard } from "../../elements/index"
import { Grid } from "./NumberCardContainerStyle"

const NumberCardsContainer = () => {

    return (
        <>
            <Grid>
                <div className="card1">
                    <NumberCard label={'Familias'} number={9270} color={'#025393'} />

                </div>
                <div className="card2">
                    <NumberCard label={'Regiones'} number={7} color={'#80DBCC'} />
                </div>
                <div className="card3">
                    <NumberCard label={'Comunidades'} number={53} color={'#00B899'} />

                </div>

            </Grid>
        </>
    )
}

export default NumberCardsContainer
