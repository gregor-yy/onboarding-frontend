import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import Button from './Button';

function ModalTeam({ isOpen, onClose, data }) {
  const {
    avatar,
    email,
    first_name,
    last_name,
    patronymic,
    phone_number,
    stack,
    projects,
    about_me,
  } = data;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'608px'} bg={'#3B454E'}>
          <ModalHeader>Часть команды, часть корабля</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bg={'#414C56'}
            display={'grid'}
            gridTemplateColumns="40.1% 1fr"
            p={'0px'}
            gap={'10px'}
          >
            <Box p={'12px'}>
              <Image borderRadius={'4px'} src={avatar} alt="avatar-modal" />
              <Text
                mt={'12px'}
                color={'white'}
                fontWeight={'700'}
                fontSize={'16px'}
                lineHeight={'150%'}
              >{`${first_name} ${last_name} ${patronymic}`}</Text>
              <Text
                color={'rgba(255, 255, 255, 0.6)'}
                fontWeight={'400'}
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
            </Box>
            <Box p={'12px 12px 12px 0'} maxHeight={'500px'} overflow="auto">
              <div dangerouslySetInnerHTML={{ __html: stack }}></div>
              <div dangerouslySetInnerHTML={{ __html: projects }}></div>
              <div dangerouslySetInnerHTML={{ __html: about_me }}></div>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={'flex-start'}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Хорошо
            </Button>
            <Button
              onClick={onClose}
              bg="rgba(250, 250, 250, 0.16) !important"
              variant="ghost"
            >
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalTeam;
