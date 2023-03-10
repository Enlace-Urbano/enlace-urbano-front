import { NumberCard } from "../../elements/index"
import { Grid } from "./NumberCardsContainerStyle"



const NumberCardsContainer = () =>  {
    return (
        <>
        <Grid>
            <NumberCard label={'ccccccccccccccccccccccc'} number={345}  color={'black'} />
      
        <div className="card2">
            <NumberCard label={'sss'} number={2545}  color={'#80DBCC'} />
        </div>
        <div className="card3">
        <NumberCard label={'sss'} number={3123}  color={'#00B899'} />
        </div>     
        </Grid>
    
        </>
        )
}

export default NumberCardsContainer