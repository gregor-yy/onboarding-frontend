import {
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import Button from './Button';
import { FaUserAstronaut } from 'react-icons/fa';

import ModalTeam from './ModalTeam';

const CardTeam = ({ data }) => {
  const {
    avatar,
    email,
    first_name,
    last_name,
    patronymic,
    phone_number,
    post,
  } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderRadius={'4px'}
        overflow={'hidden'}
        bg={'#414C56'}
        w={'220px'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
      >
        {avatar ? (
          <Image
            src={avatar}
            alt="avatar"
            w={'100%'}
            h={'200px'}
            objectFit={'cover'}
          />
        ) : (
          <Flex
            alignItems={'center'}
            justifyContent="center"
            width={'100%'}
            h={'200px'}
          >
            <FaUserAstronaut size={'120px'} style={{ marginRight: '12px' }} />
          </Flex>
        )}
        <Box p={'16px'} w="100%">
          <Tooltip label={post}>
            <Box
              borderRadius={'4px'}
              bg="#24C38E"
              display={'inline-block'}
              p="0 4px"
            >
              <Text
                className="post"
                fontSize={'12px'}
                fontWeight="700"
                lineHeight={'150%'}
              >
                {post}
              </Text>
            </Box>
          </Tooltip>

          <Text
            mt={'8px'}
            color={'white'}
            fontWeight={'700'}
            fontSize={'16px'}
            lineHeight={'150%'}
          >{`${first_name} ${last_name} ${patronymic}`}</Text>
          <Text
            color={'rgba(255, 255, 255, 0.6)'}
            fontWeight={'700'}
            fontSize={'16px'}
            lineHeight={'150%'}
            mt={'16px'}
          >
            {phone_number}
          </Text>
          <Text
            color={'rgba(255, 255, 255, 0.6)'}
            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={'150%'}
            mt={'4px'}
          >
            {email}
          </Text>
          <Button mt="16px" primary="yes" onClick={onOpen}>
            Подробнее
          </Button>
        </Box>
      </Box>
      <ModalTeam isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
};
export default CardTeam;
