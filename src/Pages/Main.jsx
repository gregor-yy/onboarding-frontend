import React from 'react';
import { Container } from '@chakra-ui/react';
import Drawer from '../Components/Drawer';
import Track from '../Components/Track';
import Sections from '../Components/Sections';

function Main() {
  return (
    <div>
      <Drawer />
      <Container maxW="1873px" pt="64px">
        <Track />
        <Sections />
      </Container>
    </div>
  );
}

export default Main;
