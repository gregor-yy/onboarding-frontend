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
  Text,
} from '@chakra-ui/react';
import Button from './Button';

import getDocDetails from '../Helpers/getDocDetails';

function ModalDocs({ isOpen, onClose, data }) {
  const [doc, setDoc] = useState(false);
  const getDocDetailsData = async () => {
    try {
      const response = await getDocDetails(data.pk);
      return response.data;
    } catch {}
  };
  useEffect(() => {
    if (isOpen && !doc) {
      getDocDetailsData().then(data => {
        setDoc(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'608px'} bg={'#3B454E'}>
          <ModalHeader>{doc?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={'#414C56'} p={'0px'}>
            <Box maxH={'400px'} overflow={'auto'} p={'12px 0 12px 12px'}>
              <div dangerouslySetInnerHTML={{ __html: doc?.description }}></div>
            </Box>
            <Box pt={'12px'} bg="#4D5964" p={'12px 0 12px 12px'}>
              <Text fontWeight={'700'} fontSize="18px" mb={'12px'}>
                Документы:
              </Text>
              {doc ? (
                doc.documents.map(item => (
                  <div key={item.pk}>
                    <a
                      style={{ color: '#ea4600', fontWeight: '700' }}
                      href={`${process.env.REACT_APP_MEDIA}/${item.document}`}
                      download={item.name}
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </div>
                ))
              ) : (
                <></>
              )}
            </Box>
            <Box pt={'12px'} bg="#4D5964" p={'12px 0 12px 12px'}>
              <Text fontWeight={'700'} fontSize="18px" mb={'12px'}>
                Ссылки:
              </Text>
              {doc ? (
                doc.urls.map(item => (
                  <div key={item.pk}>
                    <a
                      style={{ color: '#ea4600', fontWeight: '700' }}
                      href={item.url}
                      target="_blank"
                    >
                      {item.url}
                    </a>
                  </div>
                ))
              ) : (
                <></>
              )}
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={'flex-start'}>
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
export default ModalDocs;
