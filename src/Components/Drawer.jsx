import { Flex, Button, Image } from '@chakra-ui/react';
import arrowButton from '../Assets/Images/Drawer/arrows-button.svg';
import Rocket from './Rocket';
import ConsoleRocket from './ConsoleRocket';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenAction } from '../Redux/rocketReducer';
const Drawer = () => {
  const open = useSelector(state => state.rocket.open);
  const dispatch = useDispatch();
  const setOpen = value => {
    dispatch(setOpenAction(value));
  };
  return (
    <Flex
      p="12px"
      position="fixed"
      w="400px"
      h="calc(100vh - 64px)"
      top="64px"
      right="0px"
      transform={open ? 'translateX(0px)' : 'translateX(304px)'}
      transition="300ms"
      bg="rgba(115, 116, 150, 0.3)"
      backdropFilter="blur(26px)"
      zIndex="10"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Button
        onClick={() => setOpen(!open)}
        p="14px 24px"
        bg="transparent"
        borderRadius="4px"
        border="1px solid rgba(255, 255, 255, 0.8)"
      >
        <Image
          src={arrowButton}
          alt="arrows-button"
          transition="300ms"
          transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
        />
      </Button>
      <Rocket />
      <ConsoleRocket />
    </Flex>
  );
};

export default Drawer;
