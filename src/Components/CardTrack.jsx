import { Flex, Box, Text, Image, useDisclosure } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { mediaLink } from '../Helpers/request';
import Button from './Button';

import rocket from '../Assets/Images/Track/rocket.svg';
import fuel from '../Assets/Images/Track/fuel.svg';
import human from '../Assets/Images/Track/human.svg';

import ModalTrack from './ModalTrack';

const CardTrack = ({ card }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w="297px"
        flexDirection="column"
        justifyContent="space-between"
        h="330px"
        bg={colorMode === 'dark' ? '#313B44' : '#d5d5d5'}
        p="16px"
        borderRadius="4px"
      >
        <Box
          bg={colorMode === 'dark' ? '#3B454E' : '#bdbdbd'}
          backgroundImage={`url(${mediaLink}${card?.main_image})`}
          backgroundRepeat="no-repeat"
          objectFit="cover"
          backgroundPosition="0% 100%"
          backgroundSize="100% 60%"
          h="210px"
          borderRadius="2px"
        >
          <Text p="10px 12px 0px 12px" fontSize="20px" fontWeight="700">
            {card?.name}
          </Text>
        </Box>
        <Flex>
          <Button primary="yes" onClick={onOpen}>
            {card?.text_button}
          </Button>
          <Flex ml="28px" alignItems="center" fontWeight="600">
            {card?.type_incentives === 'rocket_parts' ? (
              <Image src={rocket} alt="rocket" />
            ) : (
              <></>
            )}
            {card?.type_incentives === 'team' ? (
              <Image src={human} alt="human" />
            ) : (
              <></>
            )}
            {card?.type_incentives === 'fuel' ? (
              <Image src={fuel} alt="fuel" />
            ) : (
              <></>
            )}
            <Text ml="10px">+{card?.value_incentives}</Text>
          </Flex>
        </Flex>
      </Flex>
      <ModalTrack isOpen={isOpen} onClose={onClose} data={card} />
    </>
  );
};
export default CardTrack;
