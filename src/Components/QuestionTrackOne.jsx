import { Checkbox, Stack, CheckboxGroup } from '@chakra-ui/react';
import { useState } from 'react';

const QuestionTrackOne = ({ question, changeResponse }) => {
  const [activeResponse, setActiveResponse] = useState(false);
  return (
    <CheckboxGroup>
      <Stack>
        {question?.responses?.map(response => (
          <Checkbox
            isChecked={activeResponse === response?.id ? true : false}
            onChange={event => {
              setActiveResponse(response?.id);
              changeResponse(
                event.currentTarget.checked,
                question?.id,
                response?.id,
                question?.type_question
              );
            }}
            // value={`${response?.id}`}
          >
            {response?.text}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default QuestionTrackOne;
