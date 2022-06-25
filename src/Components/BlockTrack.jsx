import { Box, Flex, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import CardTrack from './CardTrack';

const TrackBlock = ({ block }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="inline-block"
      bg={colorMode === 'dark' ? '#2C353D' : '#f2f2f2'}
      h="406px"
      p="16px"
      borderRadius="6px"
    >
      <Text fontSize="24px" fontWeight="700" mr="40px" mb="8px">
        {block?.name}
      </Text>
      <Flex gap="20px">
        {block.cards?.map(card => (
          <CardTrack key={card.name} card={card} />
        ))}
      </Flex>
    </Box>
  );
};
export default TrackBlock;
