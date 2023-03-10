import { Button, Input, Title } from '../../elements/index'
import { FormContainer, FormStyle } from './FormStyle'

const Form = () =>  {

    return (
    <>
    <FormStyle>
        <FormContainer>
     <Title label={'Contáctanos'}/>
     <Input placeholder='Nombre'/>
     <Input placeholder='Email'/>
     <Input placeholder='Mensaje'/>
        </FormContainer>
    <Button label={'Enviar'}/>
    </FormStyle>    
    </>
    )
    
}
export default Form