<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import InstagramCard from "../InstagramCard/InstagramCard";
import Title from "../../elements/title/Title";
import { Container, InstagramContainerStyle } from "./InstagramContainerStyle";
=======
import React, { useState, useEffect } from 'react';
import InstagramCard from '../instagramCard/InstagramCard';
import Title from '../../elements/title/Title';
import { Container, InstagramContainerStyle } from './InstagramContainerStyle';


type Props = {}

>>>>>>> 11a28b171f22069b7f720b02c43a27ed4f3bb922

type Props = {};

const InstagramContainer = (props: Props) => {
<<<<<<< HEAD
  return (
    <>
      <InstagramContainerStyle>
        <Container>
          <InstagramCard />
        </Container>
      </InstagramContainerStyle>
    </>
=======

  return (<>
    <InstagramContainerStyle>
      <Title label={'Actividad reciente'} />
      <Container>
        <InstagramCard />
      </Container>
    </InstagramContainerStyle>
  </>
>>>>>>> 11a28b171f22069b7f720b02c43a27ed4f3bb922
  );
};
export default InstagramContainer;
