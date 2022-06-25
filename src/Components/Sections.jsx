import { useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

import Tabs from './Tabs';
import Help from './Help';
import Map from './Map';
import Team from './Team';

const Sections = () => {
  const { colorMode } = useColorMode();
  const active = useSelector(state => state.sections.active);
  return (
    <Box w="100%" mt="42px" mb={'32px'}>
      <Tabs />
      <Box
        w="100%"
        borderRadius="0px 0px 6px 6px"
        p="40px"
        bg={colorMode === 'dark' ? '#313B44' : '#d5d5d5'}
      >
        {active === 'help' ? <Help /> : <></>}
        {active === 'map' ? <Map /> : <></>}
        {active === 'team' ? <Team /> : <></>}
      </Box>
    </Box>
  );
};

export default Sections;
