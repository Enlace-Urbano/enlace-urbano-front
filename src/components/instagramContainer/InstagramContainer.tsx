import React, { useState, useEffect } from 'react';
import InstagramCard from '../InstagramCard/InstagramCard';
import Title from '../../elements/title/Title';
import { InstagramContainerStyle } from './InstagramContainerStyle';


type Props = {}



const InstagramContainer = (props: Props) => {

  return (<>
  <Title label={'Actividad reciente'} />
    <InstagramContainerStyle>
      <ul>
      <InstagramCard />
      </ul>
      </InstagramContainerStyle>
</>
  );
};
export default InstagramContainer