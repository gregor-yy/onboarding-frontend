import { Box, Text, Flex, Switch, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import getBlocks from '../Helpers/getBlocks';
import { setTrackAction, setCompletedStages } from '../Redux/trackReducer';
import { useDispatch, useSelector } from 'react-redux';

import SwiperTrack from './SwiperTrack';

const Track = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.track.blocks);
  const completedStages = useSelector(state => state.track.completedStages);
  const { colorMode } = useColorMode();
  const getBlocksData = async () => {
    try {
      const response = await getBlocks(completedStages);
      return response.data;
    } catch {}
  };
  useEffect(() => {
    getBlocksData().then(data => {
      dispatch(setTrackAction(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedStages]);
  return (
    <Box mt="40px">
      <Flex alignItems="center">
        <Text fontSize="32px" fontWeight="700" mr="40px">
          Мой трэк
        </Text>
        <Text
          fontWeight="400"
          fontSize="16px"
          color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
          mr="8px"
        >
          Показать пройденные этапы
        </Text>
        <Switch
          isChecked={completedStages}
          onChange={() => dispatch(setCompletedStages(!completedStages))}
          size="md"
        />
      </Flex>
      {blocks ? (
        <Box mt="12px" cursor="grab">
          <SwiperTrack blocks={blocks} />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Track;
