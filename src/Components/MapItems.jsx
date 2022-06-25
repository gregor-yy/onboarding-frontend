import { Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import itemsMapArray from '../Helpers/itemsMapArray';
import { setDepartmentAction } from '../Redux/mapReducer';

const MapItems = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const active = useSelector(state => state.map.department);
  return (
    <Flex flexDirection="column" gap="8px">
      {itemsMapArray.map(item => (
        <Button
          key={item.state}
          onClick={() => dispatch(setDepartmentAction(item))}
          width="100%"
          p="12px 24px"
          bg={colorMode === 'dark' ? '#3B454E' : '#bdbdbd'}
          borderRadius="4px"
          justifyContent="flex-start"
        >
          <Text
            fontSize="16px"
            fontWeight="400"
            pl="5px"
            transition="200ms"
            borderLeft={
              active.state === item.state ? '5px solid #d23f00' : '0px'
            }
            color={colorMode === 'dark' ? '#9C9C9C' : '#6a6a6a'}
          >
            {item.name}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};
export default MapItems;
