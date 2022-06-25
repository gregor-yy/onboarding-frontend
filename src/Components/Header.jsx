import { Box, Flex, Image, Text, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaUserAstronaut } from 'react-icons/fa';

import MenuHeader from './MenuHeader';

import { useSelector } from 'react-redux';

const Header = () => {
  const { colorMode } = useColorMode(useColorMode);
  const me = useSelector(state => state.user.me);
  return (
    <Box
      bg={colorMode === 'dark' ? '#323242' : '#ebebeb'}
      as="header"
      p="12px 24px"
      position="fixed"
      w="100vw"
      top="0"
      zIndex="99"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <ColorModeSwitcher />
        {me ? (
          <Flex alignItems="center">
            {me?.avatar ? (
              <Image
                w="24px"
                h="24px"
                marginRight="12px"
                borderRadius="100%"
                objectFit={'cover'}
                src={`${process.env.REACT_APP_MEDIA}/${me?.avatar}`}
                alt="image-user"
              />
            ) : (
              <FaUserAstronaut size={'24px'} style={{ marginRight: '12px' }} />
            )}
            <Box mr="12px">
              <Text fontSize="14px">
                {`${me?.first_name} ${me?.last_name}`}
              </Text>
              <Text fontSize="12px" color="gray.500">
                {me?.focus.name}
              </Text>
            </Box>
            <MenuHeader />
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
