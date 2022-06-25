import { Box, Text, Grid, Flex, Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import MapItems from './MapItems';

import map from '../Assets/Images/Map/map.svg';
import officesMapArray from '../Helpers/officesMapArray';

const Map = () => {
  const { colorMode } = useColorMode();
  const active = useSelector(state => state.map.department);
  return (
    <div>
      <Text fontSize="20px" fontWeight="700" mb="24px">
        Отделы
      </Text>
      <Grid gridTemplateColumns="360px 1fr" gridGap="40px">
        <MapItems />
        <Flex
          width="100%"
          bg={colorMode === 'dark' ? '#414C56' : '#b5b5b5'}
          justifyContent="center"
          alignItems="center"
          borderRadius="4px"
        >
          <Box position="relative">
            <Image src={map} />
            {officesMapArray.map(office => (
              <Box
                key={office.state}
                position="absolute"
                w={office.width}
                h={office.height}
                top={office.top}
                left={office.left}
                transition="300ms"
                boxShadow={
                  active.state === office.state
                    ? '0px 0px 20px #ff4d00'
                    : '0px '
                }
                border={
                  active.state === office.state ? '2px solid #d23f00' : '0px '
                }
              />
            ))}
          </Box>
        </Flex>
      </Grid>
    </div>
  );
};

export default Map;
