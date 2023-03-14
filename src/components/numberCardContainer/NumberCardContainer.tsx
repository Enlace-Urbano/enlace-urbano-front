import { NumberCard } from "../../elements/index"
import { Grid } from "./NumberCardsContainerStyle"



const NumberCardsContainer = () =>  {
    return (
        <>
        <Grid>
            <div className="card1">
        <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit. '} number={9270}  color={'#025393'} />

            </div>
            <div className="card2">
        <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit.'} number={2545}  color={'#80DBCC'} />
                
                </div>
                <div className="card3">
        <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit.'} number={3123}  color={'#00B899'} />
                
                </div>
      
        </Grid>
        </>
        )
}

export default NumberCardsContainer