import { useEffect, useState } from 'react';
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Button from './Button';
import getCardDetails from '../Helpers/getCardDetails';

import Clip from '../Assets/Images/Track/clip.svg';

import TestTrack from './TestTrack';

function ModalTrack({ isOpen, onClose, data }) {
  const [cardData, setCardData] = useState(false);
  const getCardDetailsData = async () => {
    try {
      const response = await getCardDetails(data.id);
      return response.data;
    } catch {}
  };
  useEffect(() => {
    if (isOpen && !cardData) {
      getCardDetailsData().then(data => {
        setCardData(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'608px'} bg={'#3B454E'}>
          <ModalHeader fontWeight="700">{cardData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={'0px'} bg={'#414C56'}>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={'18px'} fontWeight="600">
                      Информация
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Box maxH={'400px'} overflow="auto" p={'12px'}>
                    <div
                      dangerouslySetInnerHTML={{ __html: cardData.text }}
                    ></div>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={'18px'} fontWeight="600">
                      Материалы
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Box p={'12px 24px'} maxH={'400px'} overflow="auto">
                    {cardData?.sources?.map(item => (
                      <Box
                        borderRadius={'4px'}
                        p="12px 24px"
                        bg="#3B454E"
                        mt="4px"
                        key={item.id}
                        display="flex"
                        alignItems={'center'}
                        gap="10px"
                      >
                        <a
                          style={{ color: '#ea4600', fontWeight: '700' }}
                          href={item.url}
                          target="_blank"
                        >
                          {item.name}
                        </a>
                        <Image src={Clip} alt="clip" />
                      </Box>
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={'18px'} fontWeight="600">
                      Тест
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Box p={'12px 24px'} maxH={'400px'} overflow="auto">
                    <TestTrack test={cardData.test} onClose={onClose} />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
export default ModalTrack;
