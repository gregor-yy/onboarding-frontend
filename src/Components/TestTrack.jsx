import { Box, useToast } from '@chakra-ui/react';
import Button from './Button';
import QuestionTrackOne from './QuestionTrackOne';
import QuestionTrackMultiple from './QuestionTrackMultiple';
import postResponseTest from '../Helpers/postResponseTest';
import { useSelector } from 'react-redux';
import getBlocks from '../Helpers/getBlocks';
import showToast from '../Helpers/showToast';

const TestTrack = ({ test, onClose }) => {
  const testResponses = { id_test: test?.id, responses: [] };
  const changeResponse = (target, question, response, type_question) => {
    if (type_question === 'one_choice') {
      testResponses.responses = testResponses.responses.filter(el => {
        return el.question !== question;
      });
      testResponses.responses.push({
        question: question,
        response: response,
      });
    } else if (type_question === 'multiple_choice') {
      if (
        !testResponses.responses.filter(el => el.question === question).length >
        0
      ) {
        testResponses.responses.push({
          question: question,
          response: [],
        });
      }
      testResponses.responses.forEach(el => {
        if (el.question === question) {
          if (target) {
            el.response.push(response);
          } else {
            el.response = el.response.filter(resp => {
              return resp !== response;
            });
          }
        }
      });
    }
  };
  const toast = useToast();
  const completedStages = useSelector(state => state.track.completedStages);
  const getBlocksData = async () => {
    try {
      const response = await getBlocks(completedStages);
      return response.data;
    } catch {}
  };
  const postTest = async () => {
    try {
      const response = await postResponseTest(testResponses);
      if (response.data.status) {
        showToast({
          toast: toast,
          title: 'Поздравляем',
          desc: 'Вы успешно прошли тест',
          status: 'success',
        });
      } else {
        showToast({
          toast: toast,
          title: 'Тест не пройден',
          desc: 'Не расстраивайся, попробуй еще раз 🙂👨‍🚀',
          status: 'error',
        });
      }
      return response.data;
    } catch {
    } finally {
      getBlocksData();
      onClose();
    }
  };
  return (
    <Box>
      {test?.questions?.map(question => (
        <Box bg="#3B454E" mb={'12px'} borderRadius="4px" p={'12px'}>
          <div dangerouslySetInnerHTML={{ __html: question.text }}></div>
          {question.type_question === 'one_choice' ? (
            <QuestionTrackOne
              question={question}
              changeResponse={changeResponse}
            />
          ) : (
            <QuestionTrackMultiple
              question={question}
              changeResponse={changeResponse}
            />
          )}
        </Box>
      ))}
      <Button onClick={() => postTest()}>Отправить ответы</Button>
    </Box>
  );
};

export default TestTrack;
