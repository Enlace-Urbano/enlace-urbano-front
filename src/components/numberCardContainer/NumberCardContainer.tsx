import { NumberCard } from "../../elements/index"
import { Grid } from "./NumberCardsContainerStyle"



const NumberCardsContainer = () =>  {
    return (
        <>
        <Grid>
            <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit. '} number={345}  color={'#025393'} />
        <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit.'} number={2545}  color={'#80DBCC'} />
      
        <NumberCard label={'Forem ipsum dolor sit amet, consectetur adipiscing elit.'} number={3123}  color={'#00B899'} />
        </Grid>
    
        </>
        )
}

export default NumberCardsContainer