import { useEffect } from 'react';

import { Button, Flex } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveFocus, setFocus } from '../Redux/teamReducer';

import getFocus from '../Helpers/getFocus';

const TabsTeam = () => {
  const dispatch = useDispatch();
  const activeFocus = useSelector(state => state.team.activeFocus);
  const focus = useSelector(state => state.team.focus);
  const getFocusData = async () => {
    try {
      const response = await getFocus();
      return response.data;
    } catch {}
  };
  useEffect(() => {
    getFocusData().then(data => {
      dispatch(setFocus(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex
      borderRadius={'4px'}
      display="inline-flex"
      gap={'4px'}
      bg="#414C56"
      p="4px"
    >
      {focus.map(item => (
        <Button
          borderRadius={'2px'}
          onClick={() => dispatch(setActiveFocus(item.id))}
          bg={activeFocus === item.id ? ' #3B454E' : 'transparent'}
          color={'white'}
          p={'8px 12px'}
        >
          {item.name}
        </Button>
      ))}
    </Flex>
  );
};

export default TabsTeam;
