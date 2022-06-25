import { useEffect } from 'react';

import { Flex } from '@chakra-ui/react';
import CardTeam from './CardTeam';

import { useSelector, useDispatch } from 'react-redux';
import { setTeam } from '../Redux/teamReducer';

import getTeam from '../Helpers/getTeam';

const TeamCards = () => {
  const dispatch = useDispatch();
  const activeFocus = useSelector(state => state.team.activeFocus);
  const team = useSelector(state => state.team.team);
  const getTeamData = async () => {
    try {
      const response = await getTeam(activeFocus);
      return response.data;
    } catch {}
  };
  useEffect(() => {
    getTeamData().then(data => {
      dispatch(setTeam(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFocus]);
  return (
    <Flex mt={'24px'} gap={'20px'} alignItems={'stretch'}>
      {team.map(item => (
        <CardTeam key={item.id} data={item} />
      ))}
    </Flex>
  );
};

export default TeamCards;
