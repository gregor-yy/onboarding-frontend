import { Box, Text, useDisclosure } from '@chakra-ui/react';
import Button from './Button';
import ModalDocs from './ModalDocs';

const CardHelp = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w={'716px'} bg={'#3B454E'} p={'20px'} mb="8px" borderRadius={'4px'}>
        <Text
          fontWeight={'700'}
          fontSize={'18px'}
          lineHeight={'150%'}
          mb={'12px'}
        >
          {data.name}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: data.short_description }}></div>
        <Button onClick={onOpen} mt={'16px'} primary="yes">
          Читать
        </Button>
      </Box>
      <ModalDocs isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
};

export default CardHelp;
