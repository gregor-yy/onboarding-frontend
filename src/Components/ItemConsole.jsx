import { Text, Image, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const ItemConsole = ({ name, value, array }) => {
  const open = useSelector(state => state.rocket.open);
  return (
    <div>
      <Flex alignItems="center" gap="8px">
        <Text
          display={open ? 'inherit' : 'none'}
          fontSize="16px"
          fontWeight="700"
        >
          {name}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="300"
          color="rgba(255, 255, 255, 0.35)"
        >
          {value}
        </Text>
      </Flex>
      {array ? (
        <Flex>
          {array?.map(item => (
            <Item
              key={item.key}
              open={open}
              padding="5px"
              src={item.image}
              opacity={item.opacity ? '1' : '0.5'}
            />
          ))}
        </Flex>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemConsole;

const Item = styled(Image)`
  &:not(:first-child) {
    display: ${props => (props.open ? 'inherit' : 'none')};
  }
`;
