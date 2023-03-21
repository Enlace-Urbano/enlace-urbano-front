import React, { useState, useEffect } from 'react';
import InstagramCard from '../InstagramCard/InstagramCard';
import Title from '../../elements/title/Title';
import { Container, InstagramContainerStyle } from './InstagramContainerStyle';


type Props = {}



const InstagramContainer = (props: Props) => {

  return (<>
    <InstagramContainerStyle>
      <Container> 
        <InstagramCard />
      </Container>
    </InstagramContainerStyle>
</>
  );
};
export default InstagramContainer