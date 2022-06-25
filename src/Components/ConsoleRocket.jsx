import { Flex, Tooltip } from '@chakra-ui/react';
import ItemConsole from './ItemConsole';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';

import fuel from '../Assets/Images/Track/fuel.svg';
import human from '../Assets/Images/Track/human.svg';

import arrayItemConsole from '../Helpers/arrayItemConsole';
import { setStartReadyAction, setStartAction } from '../Redux/rocketReducer';

const ConsoleRocket = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const open = useSelector(state => state.rocket.open);
  const start_ready = useSelector(state => state.rocket.start_ready);
  if (
    me.incentives_fuel >= 1000 &&
    me.incentives_rocket_parts >= 5 &&
    me.incentives_team >= 100
  ) {
    dispatch(setStartReadyAction(true));
  } else {
    dispatch(setStartReadyAction(false));
  }
  const startFunc = () => {
    dispatch(setStartAction(true));
    setTimeout(() => dispatch(setStartAction(false)), 8000);
  };
  return (
    <Flex
      bg="rgba(77, 89, 100, 0.4)"
      w={open ? '100%' : '72px'}
      borderRadius="6px"
      mt="auto"
      padding="24px"
      zIndex="150"
      flexDirection="column"
      gap="12px"
      justifyContent="space-between"
    >
      <ItemConsole
        name={'Топливо'}
        value={me.incentives_fuel}
        array={arrayItemConsole(me.incentives_fuel, 100, fuel)}
      />
      <ItemConsole
        name={'Команда'}
        value={`${Math.round(me.incentives_team)}%`}
        array={arrayItemConsole(Math.round(me.incentives_team), 10, human)}
      />
      {start_ready ? (
        <Button
          onClick={() => startFunc()}
          disabled={!start_ready}
          display={open ? 'inherit' : 'none'}
        >
          Стартуем!
        </Button>
      ) : (
        <Tooltip
          w="100%"
          shouldWrapChildren
          hasArrow
          label={`Чтобы стартовать необходимо:
          1) Собрать всю рокету
          2) Собрать всю команду
          3) Заправить ракету на 1000 ед. топлива
          `}
          bg="red.600"
        >
          <Button
            w="100%"
            disabled={!start_ready}
            display={open ? 'flex' : 'none'}
            justifyContent="center"
            alignItems="center"
          >
            Стартуем!
          </Button>
        </Tooltip>
      )}
    </Flex>
  );
};

export default ConsoleRocket;
