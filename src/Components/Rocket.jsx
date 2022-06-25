import { Flex, Image } from '@chakra-ui/react';
import Part5 from '../Assets/Images/Rocket/part5.svg';
import Part4 from '../Assets/Images/Rocket/part4.svg';
import Part3 from '../Assets/Images/Rocket/part3.svg';
import Part2 from '../Assets/Images/Rocket/part2.svg';
import Part1 from '../Assets/Images/Rocket/part1.svg';
import Bottom from '../Assets/Images/Rocket/bottom.svg';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import './styles/animation.css';

const Rocket = () => {
  const me = useSelector(state => state.user.me);
  const start = useSelector(state => state.rocket.start);
  return (
    <Flex
      left="50%"
      height="634px"
      transform="translateX(-50%)"
      top="85px"
      position="absolute"
      flexDirection="column-reverse"
      alignItems="center"
    >
      <Image transform="translate(0%, -90%)" src={Bottom} />
      <RocketBody
        start={start}
        top="0"
        flexDirection="column-reverse"
        alignItems="center"
      >
        <Image
          opacity={me.incentives_rocket_parts < 1 ? '0.3' : '1'}
          transform="translate(4.5%, -6%)"
          src={Part1}
        />
        <Image
          opacity={me.incentives_rocket_parts < 2 ? '0.3' : '1'}
          src={Part2}
        />
        <Image
          opacity={me.incentives_rocket_parts < 3 ? '0.3' : '1'}
          src={Part3}
        />
        <Image
          opacity={me.incentives_rocket_parts < 4 ? '0.3' : '1'}
          src={Part4}
        />
        <Image
          opacity={me.incentives_rocket_parts < 5 ? '0.3' : '1'}
          src={Part5}
        />
      </RocketBody>
    </Flex>
  );
};

export default Rocket;

const RocketBody = styled(Flex)`
  animation: ${props => (props.start ? 'start 8s ease 1' : '')};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 550px;
    transform: translateX(-50%);
    width: 75px;
    background: linear-gradient(#ff9d00, transparent);
    filter: blur(10px);
    animation: ${props => (props.start ? 'fire 2s ease 1' : '')};
  }
`;
