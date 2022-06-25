import { Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setInputHelp, setDocs } from '../Redux/helpReducer';
import { useEffect } from 'react';

import CardHelp from './CardHelp';

import getDocs from '../Helpers/getDocs';

const Help = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.help.input);
  const docs = useSelector(state => state.help.docs);
  const getDocsData = async () => {
    try {
      const response = await getDocs(inputValue);
      return response.data;
    } catch {}
  };
  useEffect(() => {
    getDocsData().then(data => {
      dispatch(setDocs(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mb="24px">
        Поиск документов по ближайшей галактике
      </Text>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <AiOutlineSearch
              opacity={'0.7'}
              size={'20px'}
              style={{ marginTop: '5px' }}
            />
          }
        />
        <Input
          value={inputValue}
          w={'421px'}
          placeholder="Например архитектура проекта"
          size="lg"
          mb={'32px'}
          onChange={e => dispatch(setInputHelp(e.target.value))}
        />
      </InputGroup>
      {docs.map(doc => (
        <CardHelp key={doc.pk} data={doc} />
      ))}
    </>
  );
};
export default Help;
