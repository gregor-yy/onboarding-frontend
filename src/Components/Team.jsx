import { Text } from '@chakra-ui/react';
import TabsTeam from './TabsTeam';
import TeamCards from './TeamCards';

const Team = () => {
  return (
    <div>
      <Text fontSize="20px" fontWeight="700" mb="24px">
        Летишь в космос вот с этими ребятами
      </Text>
      <TabsTeam />
      <TeamCards />
    </div>
  );
};

export default Team;
