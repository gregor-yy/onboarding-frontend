import { Box, Checkbox, Stack, CheckboxGroup } from '@chakra-ui/react';

const QuestionTrackOneMultiple = ({ question, changeResponse }) => {
  return (
    <CheckboxGroup>
      <Stack>
        {question?.responses?.map(response => (
          <Checkbox
            onChange={event =>
              changeResponse(
                event.currentTarget.checked,
                question?.id,
                response?.id,
                question?.type_question
              )
            }
            value={`${response?.id}`}
          >
            {response?.text}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};
export default QuestionTrackOneMultiple;
