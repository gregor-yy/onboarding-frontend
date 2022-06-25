import { Button, Flex, Tooltip, useColorMode } from '@chakra-ui/react';
import tabsArrays from '../Helpers/tabsArray';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillLock } from 'react-icons/ai';

import { setActiveAction } from '../Redux/sectionsReducer';

const Tabs = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const active = useSelector(state => state.sections.active);
  return (
    <Flex gap="2px">
      {tabsArrays()?.map(tab => (
        <Tooltip key={tab?.state} label={tab.disable_text} shouldWrapChildren>
          <Button
            disabled={tab.disable}
            onClick={() => dispatch(setActiveAction(tab?.state))}
            p="24px 20px"
            minW="132px"
            fontSize="24px"
            fontWeight="700"
            borderRadius="6px 6px 0px 0px"
            bg={
              active === tab.state
                ? colorMode === 'dark'
                  ? '#313B44'
                  : '#d5d5d5'
                : colorMode === 'dark'
                ? '#2C353D'
                : '#f2f2f2'
            }
            color={
              active === tab?.state
                ? colorMode === 'dark'
                  ? 'white'
                  : 'black'
                : colorMode === 'dark'
                ? 'rgba(255, 255, 255, 0.26)'
                : 'rgb(139, 139, 139)'
            }
          >
            {tab.disable ? <AiFillLock /> : tab?.name}
          </Button>
        </Tooltip>
      ))}
    </Flex>
  );
};

export default Tabs;
