import { NumberCard } from "../../elements/index"
import { Grid } from "./NumberCardsContainerStyle"



const NumberCardsContainer = () =>  {
    return (
        <>
        <Grid>
        <div className="container1">
            <NumberCard label={'ccccccccccccccccccccccc'} number={345}  color={'black'} />
            </div>

        <div className="container2">
            <NumberCard label={'sss'} number={2545}  color={'#80DBCC'} />
      
        <NumberCard label={'sss'} number={3123}  color={'#00B899'} />
        </div>     
        </Grid>
    
        </>
        )
}

export default NumberCardsContainer